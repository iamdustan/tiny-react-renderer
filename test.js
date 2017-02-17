'use strict';

const assert = require('assert');
const React = require('react');
const args = process.argv.slice(2);

const TEST_FILE = args[0] === '-f' || args[0] === '--fiber'
  ? 'fiber'
  : 'stack';

const TinyRenderer = require('./src/' + TEST_FILE);
const render = TinyRenderer.render;
const toJSON = (props) => {
  if (props.children) {
    let children;
    if (Array.isArray(props.children)) {
      children = props.children.map(_ => ({}));
    } else {
      children = {};
    }
    return {children};
  }
  return {};
};

// mock stateless components
const Base = () => React.createElement('div');
const Page1 = () => React.createElement('div');
const Page2 = () => React.createElement('div');

// helper for <Route path={path} component={component}>{children}</Route>
const Route = (path, component, children) =>
  React.createElement('route', {path: path, component: component, key: path}, children);

const Rte = (path, component, children) =>
  React.createElement('route', {path: path, component: component, key: path, toJSON: toJSON}, children);

const ok = [];
const fail = [];
const skipped = [];
const it = (desc, fn) => {
  try {
    fn.call(null);
    ok.push({desc});
  } catch (err) {
    fail.push({desc, err});
  }
};

it.skip = (desc, fn) => skipped.push({desc});

it('should render with the default toJSON behavior', () => {
  render(
    Route('/', Base, [
      Route('/page/1', Page1),
      Route('/page/2', Page2)
    ]),
    (element) => {
      assert.deepEqual(
        element,
        {
          path: '/',
          component: Base,
          children: [
            {
              path: '/page/1',
              component: Page1
            },
            {
              path: '/page/2',
              component: Page2
            }
          ]
        }
      );
    }
  );
});

it('should render with a custom toJSON method', () => {
  render(
    Rte('/', Base, [
      Rte('/page/1', Page1),
      Rte('/page/2', Page2)
    ]),
    (element) => {
      assert.deepEqual(
        element,
        {children: [{}, {}]}
      );
    }
  );
});

if (fail.length > 0) {
  fail.map(f => {
    console.log(f.desc);
    console.error('%s. Expected\n  %j\n to equal\n  %j\n', f.err.name, f.err.actual, f.err.expected)
  });
  console.log('%s tests passed', ok.length);
  if (skipped.length) console.log('%s tests skipped', skipped.length);
  console.log('%s tests failed', fail.length);
  process.exit(1);
} else {
  console.log('%s tests passed', ok.length);
  if (skipped.length) console.log('%s tests skipped', skipped.length);
}


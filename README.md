# Tiny React Renderer

Creating a React Renderer will give you the opportunity to apply the same React
knowledge that you and your team already know and enjoy from the web and native
to whatever target environment you need.

Creating a renderer is a fairly straight-forward affair once you know what
you’re looking for.

Many languages have this concept of a `main`—the entry point to your
application. If you look at all of your application code, you enter this world
with a call like the following:

```jsx
// web
React.render(React.createElement(MyApp), document.getElementById('app'));

// native
AppRegistry.registerComponent('MyApp', () => MyApp);
```

Both of these end at the `React{Target}Mount.js` file. Your renderer should
begin there.

To get started, begin reading from [./src/mount.js](./src/mount.js).

## Work in Progress

Please note this guide is a work in progress.

## Thanks

* [@thejameskyle](https://github.com/thejameskyle): for the inspiration of repo style
* [@ryanflorence](https://github.com/ryanflorence) and [@mjackson](https://github.com/mjackson) for React Router and the problem that inspired this
* [@gaearon](https://github.com/gaearon), [@matthewwithanm](https://github.com/matthewwithanm),
  [@vjeux](https://github.com/vjeux), [@zpao](https://github.com/zpao),
  [@Yomguithereal](https://github.com/Yomguithereal), [@axemclion](https://github.com/axemclion),
  and everyone else who has helped me poke around the React codebase.

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

Why should I care?
Where do I begin?
Tests


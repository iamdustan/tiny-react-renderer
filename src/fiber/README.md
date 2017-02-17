# Tiny React Renderer

> Note that this is currently targeting the **React 16.0.0-alpha.2** release.

Creating a fiber-based React renderer is quite direct, though there are a few
awkward pieces around tooling that will be smoothed over in time.

Many languages have this concept of a `main`—the entry point to your
application. If you look at any React application code you’ve written you’ll see
that you “start” your app with a call like the following:

```jsx
// web
ReactDOM.render(React.createElement(MyApp), document.getElementById('app'));

// native
AppRegistry.registerComponent('MyApp', () => MyApp);
```

This is where your application enters into the React domain and comes alive. Your
root React element is instantiated and attached to the host environment.

With Fiber, all renderers begin (and maybe even end) in the React{Host}Fiber.js
file.

With that let’s get started. Our tour continues in
[./ReactTinyFiber.js](./ReactxTinyFiber.js)!

## Work in Progress

Please note this guide is a work in progress. Much of this knowledge is derived
from my experience in creating [React Hardware](https://github.com/iamdustan/react-hardware).


import "../node_modules/react/umd/react.production.min.js";
import "../node_modules/react-dom/umd/react-dom.production.min.js";

// DOM elelment
const rootDom = document.getElementById("root");

// React element
const root = ReactDOM.createRoot(rootDom);

// const reactHeadingElem = React.createElement("h1", {}, "Hello from JSX!");
// const reactSecond = React.createElement("h2", {}, "The best syntax ever!");
// const header = React.createElement(
//   "header",
//   { className: "site-header" },
//   reactHeadingElem,
//   reactSecond,
// );
// now with JSX syntax
const headerJSX = (
  <header className="site-header">
    <h1>Hello from JSX</h1>
    <h2>The best syntax ever!</h2>
    <h3>New type!</h3>
    <form action="">
      <input type="login" />
      <button>login</button>
    </form>
  </header>
);

root.render(headerJSX);

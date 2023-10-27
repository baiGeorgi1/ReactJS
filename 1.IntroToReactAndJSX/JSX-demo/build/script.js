import "../node_modules/react/umd/react.production.min.js";
import "../node_modules/react-dom/umd/react-dom.production.min.js";

// DOM elelment
var rootDom = document.getElementById("root");

// React element
var root = ReactDOM.createRoot(rootDom);

// const reactHeadingElem = React.createElement("h1", {}, "Hello from JSX!");
// const reactSecond = React.createElement("h2", {}, "The best syntax ever!");
// const header = React.createElement(
//   "header",
//   { className: "site-header" },
//   reactHeadingElem,
//   reactSecond,
// );
// now with JSX syntax
var headerJSX = React.createElement(
  "header",
  { className: "site-header" },
  React.createElement(
    "h1",
    null,
    "Hello from JSX"
  ),
  React.createElement(
    "h2",
    null,
    "The best syntax ever!"
  ),
  React.createElement(
    "h3",
    null,
    "New type!"
  ),
  React.createElement(
    "form",
    { action: "" },
    React.createElement("input", { type: "login" }),
    React.createElement(
      "button",
      null,
      "login"
    )
  )
);

root.render(headerJSX);
import "../node_modules/react/umd/react.production.min.js";
import "../node_modules/react-dom/umd/react-dom.production.min.js";

// DOM elelment
var rootDom = document.getElementById("root");

// React element
var root = ReactDOM.createRoot(rootDom);

// none JSX component
function FooterText() {
  return React.createElement('p', {}, 'All rights reserved! R');
}

function Footer() {
  return React.createElement('div', { className: 'site-footer' }, React.createElement(FooterText));
}
// JSX syntaxis

var body = React.createElement(
  "div",
  null,
  React.createElement(
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
  ),
  React.createElement(Footer, null)
);

root.render(body);
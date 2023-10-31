import "../node_modules/react/umd/react.production.min.js";
import "../node_modules/react-dom/umd/react-dom.production.min.js";


// DOM elelment
const rootDom = document.getElementById("root");

// React element
const root = ReactDOM.createRoot(rootDom);

// none JSX component
function FooterText() {
  return React.createElement('p', {}, 'All rights reserved! R');
}

function Footer() {
  return React.createElement(
    'div',
    { className: 'site-footer' },
    React.createElement(FooterText)
  );
}
// JSX syntaxis

const body = (
  <div>
    <header className="site-header">
      <h1>Hello from JSX</h1>
      <h2>The best syntax ever!</h2>
      <h3>New type!</h3>
      <form action="">
        <input type="login" />
        <button>login</button>
      </form>
    </header>
    <Footer />
  </div>
);

root.render(body);

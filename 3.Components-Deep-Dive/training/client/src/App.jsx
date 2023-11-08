import Header from "./components/Header";
import Loading from "./components/Loading";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />

      {/* <!-- Main content --> */}
      <main className="main">
        {/* <!-- Section container --> */}
        <TodoList />
      </main>

      {/* <!-- Footer --> */}
      <Footer />
    </div>
  );
}

export default App;

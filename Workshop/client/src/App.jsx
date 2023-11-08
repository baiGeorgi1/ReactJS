import Footer from "./componets/Footer";
import Header from "./componets/Header";
import UserList from "./componets/UserList";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <UserList />
      </main>
      <Footer />
    </div>
  );
}

export default App;

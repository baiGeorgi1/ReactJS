
import "./App.css";
import MovieList from "./components/MovieList";
import movies from './assets/movies';
import Timer from "./components/Timer";
import Counter from "./components/counter";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <div>
      <h1>My first dynamic React App!</h1>
      <Counter />
      {/* Next line set number like that - NOT like that => "5" */}
      {/* <Timer startTime={5} /> */}

      <MovieList movies={movies} headingText="Movie List" secondaryText="secondary text" />
    </div>
  );
}

export default App;

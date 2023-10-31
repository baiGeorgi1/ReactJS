import Movie from "./Movie";

export default function MovieList(props) {
  // console.log(props);
  return (
    <div className="movie-list">
      <h2>{props.headingText}</h2>
      <ul>
        <li>
          <Movie data={props.movies[0]} />
        </li>
        <li>
          <Movie data={props.movies[1]} />
        </li>
        <li>
          <Movie data={props.movies[2]} />
        </li>
      </ul>
    </div>
  );
}

import { useEffect, useState } from "react";
import * as game from "../../services/gameService";
import GameListItem from "../gameListItem/GameListItem";

const CatalogPage = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    game.getAll().then((result) => setGames(result));
  }, []);
  return (
    <section id="catalog-page">
      <h1>All Games</h1>
      {/* <!-- display items --> */}
      {games.map((game) => (
        <GameListItem key={game._id} {...game} />
      ))}
      {/* <!-- Display paragraph: If there is no games  --> */}
      {games.length === 0 && <h3 className="no-articles">No games yet</h3>}
    </section>
  );
};
export default CatalogPage;

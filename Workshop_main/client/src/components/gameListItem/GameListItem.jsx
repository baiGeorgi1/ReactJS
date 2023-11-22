import { Link } from "react-router-dom";

const GameListItem = ({ title, category, imageUrl }) => {
  return (
    <div className="allGames">
      <div className="allGames-info">
        <img src={imageUrl} />
        <h6>{category}</h6>
        <h2>{title}</h2>
        <Link hrtoef="#" className="details-button">
          Details
        </Link>
      </div>
    </div>
  );
};
export default GameListItem;

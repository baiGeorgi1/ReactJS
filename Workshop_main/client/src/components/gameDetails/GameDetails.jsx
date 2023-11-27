import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as game from "../../services/gameService";
import * as comment from "../../services/commentService";
import AuthContext from "../../contexts/auth";

const GameDetails = () => {
  const { email, isAuthenticated } = useContext(AuthContext);
  const [gameInfo, setGameInfo] = useState({});
  const [comments, setComments] = useState([]);

  const { gameId } = useParams();

  useEffect(() => {
    game.getOne(gameId).then(setGameInfo);
    comment.getAll(gameId).then(setComments);
  }, [gameId]);

  const addCommentHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newComment = await comment.create(gameId, formData.get("comment"));

    setComments((comments) => [
      ...comments,
      { ...newComment, owner: { email } },
    ]);
  };

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={gameInfo.imageUrl} />
          <h1>{gameInfo.title}</h1>
          <span className="levels">MaxLevel: {gameInfo.maxLevel}</span>
          <p className="type">{gameInfo.category}</p>
        </div>

        <p className="text">{gameInfo.summary}</p>

        {/* <!-- Bonus ( for Guests and Users ) --> */}
        <div className="details-comments">
          <h2>Comments:</h2>

          <ul>
            {comments.map(({ _id, text, owner: { email } }) => (
              <li key={_id} className="comment">
                <p>
                  {email}: {text}
                </p>
              </li>
            ))}
          </ul>
          {comments.length === 0 && <p className="no-comment">No comments.</p>}
        </div>

        {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
        {/* <div className="buttons">
          <a href="#" className="button">
            Edit
          </a>
          <a href="#" className="button">
            Delete
          </a>
        </div> */}
      </div>

      {/* <!-- Bonus --> */}
      {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
      {isAuthenticated && (
        <article className="create-comment">
          <label>Add new comment:</label>
          <form className="form" onSubmit={addCommentHandler}>
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input className="btn submit" type="submit" value="Add Comment" />
          </form>
        </article>
      )}
    </section>
  );
};
export default GameDetails;

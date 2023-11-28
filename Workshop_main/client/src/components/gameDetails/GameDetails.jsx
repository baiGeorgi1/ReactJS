import { useContext, useEffect, useReducer, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as game from "../../services/gameService";
import * as comment from "../../services/commentService";
import AuthContext from "../../contexts/auth";
import { useForm } from "../../Hooks/useForm";

//Adv techniques make useReducer function
//TODO да я изнеса от компонента
const reducer = (state, action) => {
    switch (action?.type) {
        case "GET_ALL_COMMENTS":
            return [...action.payload];
        case "ADD_COMMENT":
            return [...state, action.payload];
        //if we have edit_comment
        // ******************************* IMPORTANT
        case "EDIT_COMMENT":
            return state.map((c) =>
                c._id === action.payload._id
                    ? { ...c, text: action.payload.text }
                    : c,
            );

        default:
            return state;
    }
};

const GameDetails = () => {
    const { userId, email, isAuthenticated } = useContext(AuthContext);

    const [gameInfo, setGameInfo] = useState({});
    //  const [comments, setComments] = useState([]);
    //or useReducer
    const [comments, dispatch] = useReducer(reducer, []);

    const { gameId } = useParams();

    useEffect(() => {
        game.getOne(gameId).then(setGameInfo);
        comment
            .getAll(gameId)
            //.then((setComments)); => without reducer
            .then((result) => {
                dispatch({
                    type: "GET_ALL_COMMENTS",
                    payload: result,
                });
            });
    }, [gameId]);

    const addCommentHandler = async (values) => {
        const newComment = await comment.create(gameId, values.comment);
        newComment.owner = { email };
        // setComments((comments) => [ ...comments, { ...newComment, owner: { email } },]);
        dispatch({
            type: "ADD_COMMENT",
            payload: newComment,
        });
    };
    const { values, onChange, onSubmit } = useForm(addCommentHandler, {
        comment: "",
    });
    const isOwner = userId === gameInfo._ownerId;
    console.log(isOwner);
    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={gameInfo.imageUrl} />
                    <h1>{gameInfo.title}</h1>
                    <span className="levels">
                        MaxLevel: {gameInfo.maxLevel}
                    </span>
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
                    {comments.length === 0 && (
                        <p className="no-comment">No comments.</p>
                    )}
                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                {isOwner && (
                    <div className="buttons">
                        <Link to="#" className="button">
                            Edit
                        </Link>
                        <Link to="#" className="button">
                            Delete
                        </Link>
                    </div>
                )}
            </div>

            {/* <!-- Bonus --> */}
            {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            {isAuthenticated && (
                <article className="create-comment">
                    <label>Add new comment:</label>
                    <form className="form" onSubmit={onSubmit}>
                        <textarea
                            name="comment"
                            placeholder="Comment......"
                            value={values.comment}
                            onChange={onChange}
                        ></textarea>
                        <input
                            className="btn submit"
                            type="submit"
                            value="Add Comment"
                        />
                    </form>
                </article>
            )}
        </section>
    );
};
export default GameDetails;

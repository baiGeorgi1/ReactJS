import { useNavigate, useParams } from "react-router-dom";

import { edit, getOne } from "../../services/gameService";
import { useEffect, useState } from "react";

const GameEdit = () => {
    const navigate = useNavigate(); //to redirect PAGES
    const { gameId } = useParams();
    const [game, setGame] = useState({
        title: "",
        category: "",
        maxLevel: "",
        imageUrl: "",
        summary: "",
    });

    useEffect(() => {
        getOne(gameId).then((result) => {
            setGame(result);
        });
    }, [gameId]);

    const editGameSubHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));
        console.log(values);
        try {
            await edit(gameId, values);
            navigate("/catalog");
        } catch (err) {
            //TODO
            console.log(err);
        }
    };
    const onChange = (e) => {
        setGame((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={editGameSubHandler}>
                <div className="container">
                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        value={game.title}
                        onChange={onChange}
                        name="title"
                    />

                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        value={game.category}
                        onChange={onChange}
                        name="category"
                    />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min="1"
                        value={game.maxLevel}
                        onChange={onChange}
                    />

                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        value={game.imageUrl}
                        onChange={onChange}
                        name="imageUrl"
                    />

                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        onChange={onChange}
                        value={game.summary}
                        name="summary"
                        id="summary"
                    ></textarea>
                    <input className="btn submit" type="submit" />
                </div>
            </form>
        </section>
    );
};

export default GameEdit;

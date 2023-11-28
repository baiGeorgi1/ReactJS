import { useNavigate, useParams } from "react-router-dom";

import { edit, getOne } from "../../services/gameService";
import { useForm } from "../../Hooks/useForm";
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

    const editGameSubHandler = async (values) => {
        try {
            await edit(gameId, values);
            navigate("/catalog");
        } catch (err) {
            //TODO
            console.log(err);
        }
    };
    const { values, onChange, onSubmit } = useForm(editGameSubHandler, game);

    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        onChange={onChange}
                        name="title"
                        value={values.title}
                    />

                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        onChange={onChange}
                        name="category"
                        value={values.category}
                    />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min="1"
                        value={values.maxLevel}
                        onChange={onChange}
                    />

                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        onChange={onChange}
                        name="imageUrl"
                        value={values.imageUrl}
                    />

                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        onChange={onChange}
                        name="summary"
                        id="summary"
                        value={values.summary}
                    ></textarea>
                    <input
                        className="btn submit"
                        type="submit"
                        value="Edit Game"
                    />
                </div>
            </form>
        </section>
    );
};

export default GameEdit;

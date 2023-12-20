import { useEffect, useState } from "react";
import * as gameService from "../../services/gameService";
import Latest from "./lastest-game/latest";

const Home = ({ _id, accessToken, email }) => {
    const [latestGame, setLatestGame] = useState([]);
    useEffect(() => {
        gameService.getLatest().then((result) => setLatestGame(result));
    }, []);
    console.log(latestGame);
    return (
        <section id="welcome-world">
            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>

                {/* <!-- Display div: with information about every game (if any) --> */}
                {latestGame.map((game) => (
                    <Latest key={game._id} {...game} />
                ))}

                {!latestGame.length && (
                    <p className="no-articles">No games yet</p>
                )}

                {/* <!-- Display paragraph: If there is no games  --> */}
            </div>
        </section>
    );
};
export default Home;

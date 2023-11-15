import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import styles from "./Characters.module.css";

const baseUrl = "http://swapi.dev/api";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    // С този аборт може да се ънмаунтват заявки (добре е да го има на повечето фетчове!!!)
    const abortController = new AbortController();

    fetch(`${baseUrl}/people`, { signal: abortController.signal })
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
      });
    return () => {
      abortController.abort();
    };
  }, []);
  return (
    <div className={styles.characters}>
      {characters.map((character, index) => (
        <CharacterCard key={character.name} id={index + 1} {...character} />
      ))}
    </div>
  );
};
export default Characters;

import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const CharacterInfo = () => {
  const [character, setCharacter] = useState({});

  const { id } = useParams(); // Така взимаме Id-то на конкретния item
  const location = useLocation(); // Hook за  path
  const navigate = useNavigate(); // HOOk за редирект
  //   С useEffect правим заявка,като подаваме id-то на конкретния item
  console.log(location.pathname);
  useEffect(() => {
    fetch(`http://swapi.dev/api/people/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Not found!");
        }
        return res.json();
      })
      .then(setCharacter)
      .catch((err) => {
        navigate("/404");
      });
  }, [id]);
  return (
    <div>
      <h3>My name is {character.name}</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, harum?
      </p>
    </div>
  );
};
export default CharacterInfo;

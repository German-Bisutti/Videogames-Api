import "./form.style.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { validation } from "../../utils/validation";
import { getAllGenres, getAllGames } from "../../redux/actions/index";
import { Link } from "react-router-dom";

function Form() {
  const dispatch = useDispatch();
  //-------Carga de Games--------
  useEffect(() => {
    dispatch(getAllGames());
    dispatch(getAllGenres());
  }, [dispatch]);
  //-------Estados Globales---
  const allGamescopy = useSelector((state) => state.allGamescopy);
  const allGenres = useSelector((state) => state.allGenres);
  //-----Estados Locales----
  const [input, setInput] = useState({
    name: "",
    description: "",
    platforms: "",
    image: "",
    released: "",
    rating: "",
    genre: [],
  });
  const [errors, setErrors] = useState({
    name: "inserte nombre",
    description: "descripcion...",
    platforms: "plataforma...",
    image: "url...",
    released: "DD/MM/AA...",
    rating: "Seleccione Rating",
    genre: "Seleccione Genero",
  });
  //-----Funciones-----
  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      let updatedGenres = [...input.genre]; //copia del estado input
      if (checked) {
        updatedGenres.push(value); // si es checked agrego genero
      } else {
        updatedGenres = updatedGenres.filter((genre) => genre !== value); // si es checked filtro genero
      }

      setInput({ ...input, genre: updatedGenres });
      validate({ ...input, genre: updatedGenres });
    } else {
      setInput({ ...input, [name]: value });
      validate({ ...input, [name]: value });
    }
  }

  const validate = (input) => {
    const errors = validation(input);
    setErrors(errors);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    if (allGamescopy.some((game) => game.name === input.name)) {
      alert("Nombre Repetido");
    } else {
      axios
        .post("http://localhost:3001/videogames", input)
        .then((res) => {
          alert(res);
          setInput({
            name: "",
            description: "",
            platforms: "",
            image: "",
            released: "",
            rating: "",
            genre: "",
          });
          setErrors({
            name: "inserte nombre",
            description: "descripcion...",
            platforms: "plataforma...",
            image: "url...",
            released: "DD/MM/AA...",
            rating: "Seleccione Raiting",
            genre: "Seleccione Genero",
          });
        })
        .catch((err) => alert(err));
    }
  };

  return (
    <div class="login-box">
      <p>Login</p>
      <p>
        Don't have an account?{" "}
        <a href="" class="a2">
          Sign up!
        </a>
      </p>
    </div>
  );
}

export default Form;

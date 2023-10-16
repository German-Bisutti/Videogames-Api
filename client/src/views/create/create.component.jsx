import "./create.style.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { validation } from "../../utils/validation";
import { getAllGenres, getAllGames } from "../../redux/actions/index";
import { Link } from "react-router-dom";

function Create() {
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
    <div className="create">
      <div>
        <Link to={`/home`} className="button-container">
          <button>Inicio</button>
        </Link>
      </div>
      <div>
        <div class="login-box">
          <p>Crear Videogame</p>
          <form onSubmit={handlerSubmit}>
            <div class="user-box">
              <input
                required=""
                name="name"
                value={input.name}
                onChange={handleChange}
                type="text"
              />
              <label>
                Nombre{" "}
                {errors.name && (
                  <span className="create-error">{errors.name}</span>
                )}
              </label>
            </div>
            <div class="user-box">
              <input
                required=""
                name="description"
                value={input.description}
                onChange={handleChange}
                type="text"
              />
              <label>
                Descripcion{" "}
                {errors.description && (
                  <span className="create-error">{errors.description}</span>
                )}
              </label>
            </div>
            <div class="user-box">
              <input
                required=""
                name="platforms"
                value={input.platforms}
                onChange={handleChange}
                type="text"
              />
              <label>
                Plataformas{" "}
                {errors.platforms && (
                  <span className="create-error">{errors.platforms}</span>
                )}
              </label>
            </div>
            <div class="user-box">
              <input
                required=""
                name="released"
                value={input.released}
                onChange={handleChange}
                type="text"
              />
              <label>
                Fecha de Lanzamiento{" "}
                {errors.released && (
                  <span className="create-error">{errors.released}</span>
                )}
              </label>
            </div>
            <div class="user-box">
              <input
                required=""
                name="image"
                value={input.image}
                onChange={handleChange}
                type="text"
              />
              <label>
                Imagen URL{" "}
                {errors.image && (
                  <span className="create-error">{errors.image}</span>
                )}
              </label>
            </div>
            <div>
              <select
                name="rating"
                value={input.rating}
                onChange={handleChange}
                className="select"
              >
                <option value="">Seleccionar Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              {errors.rating && (
                <span className="create-error">{errors.rating}</span>
              )}
            </div>
            {allGenres &&
              allGenres.newGenre &&
              allGenres.newGenre.length > 0 && (
                <div>
                  <label>Géneros</label>
                  <div>
                    {allGenres.newGenre.map((genre) => (
                      <label key={genre} className="create-check">
                        <input
                          type="checkbox"
                          name="genre"
                          value={genre}
                          checked={input.genre.includes(genre)}
                          onChange={handleChange}
                        />
                        {genre}
                      </label>
                    ))}
                  </div>
                  {errors.genre && (
                    <span className="create-error">{errors.genre}</span>
                  )}
                </div>
              )}
            <button type="submit" className="submit">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Crear
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;

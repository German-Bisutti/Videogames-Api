import "./card.style.css";
import { Link } from "react-router-dom";

function Card({ game }) {
  const { name, genre, image, id } = game;

  const imageStyle = {
    width: "100%",
    height: "130px",
    borderRadius: "6px 6px 0 0",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${image})`, // Utiliza la imagen como fondo
  };

  return (
    <div class="card">
      <div class="card-image" style={imageStyle}></div>
      <div class="category"> {name} </div>
      <div class="heading">
        {`Genero ${genre}`}

        <div class="author">
          <Link to={`/detail/${id}`} className="author">
            Ver mas detalles
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;

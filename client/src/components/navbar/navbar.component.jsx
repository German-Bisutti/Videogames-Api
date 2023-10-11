import "./navbar.style.css";
import { Link } from "react-router-dom";

function Navbar({ handleChange, handleSubmit, handleReset, handleSorting }) {
  return (
    <div className="navbar">
      <form onChange={handleChange}>
        <button type="submit" onClick={handleSubmit}>
          Buscar
        </button>
        <input placeholder="Busqueda" type="search" className="navbar-input" />
      </form>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSorting} value={"nameAsc"}>
        A - Z
      </button>
      <button onClick={handleSorting} value={"nameDesc"}>
        Z - A
      </button>
      <button onClick={handleSorting} value={"ratingAsc"}>
        Raiting Acendente
      </button>
      <button onClick={handleSorting} value={"ratingDesc"}>
        Raiting Decendente
      </button>
      <Link to={`/create`}>
        <button>Crear</button>
      </Link>
    </div>
  );
}

export default Navbar;

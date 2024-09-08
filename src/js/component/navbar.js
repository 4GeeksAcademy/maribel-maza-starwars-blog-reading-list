import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {


	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#"><img src = "https://i.imgur.com/YhauhRo.png" alt="Star Wars logo" width="100px" style={{ marginLeft: '20px' }}/></a> */}
    <Link className="navbar-brand" to="/">
          <img src="https://i.imgur.com/YhauhRo.png" alt="Logo Star Wars" width="100px" style={{ marginLeft: '20px' }} />
        </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="ml-auto" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">Characters</a> */}
		  <Link className=" btn btn-outline-dark me-2" aria-current="page" to="/characters">Characters</Link>
        </li>
        <li className="nav-item">
		{/* <a className="nav-link active" aria-current="page" href="#">Planets</a> */}
		<Link className=" btn btn-outline-dark me-2" aria-current="page" to="/planets">Planets</Link>
        </li>
        <li className="nav-item">
		{/* <a className="nav-link active" aria-current="page" href="#">Starships</a> */}
		<Link className=" btn btn-outline-dark me-2" aria-current="page" to="/starships">Starships</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favorites
          </a>
          <ul className="dropdown-menu">

          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
	);
};

import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
	  <nav className="navbar navbar-light bg-light mb-5 ">
		<div className="container d-flex">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 lead"><strong>Fundación Villanueva</strong></span>  
			</Link>
			<div className="vidaNavbar h3 lead"> Vida</div>
			<div className="obraNavbar h3 lead"> Obra</div>
			<div className="escritosNavbar h3 lead"> Escritos</div>
			<div className="archivosNavbar h3 lead"> Archivos</div>
			<div className="fundacionNavbar h3 lead"> Fundación</div>
		</div>	
	  </nav>
	);
  };

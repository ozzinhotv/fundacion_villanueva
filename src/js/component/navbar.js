import React, { useState } from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
            <div className="container">
                <Link to="/" className="navbar-brand mb-0 h1 lead">
                    <strong>Fundación Villanueva</strong>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleMenu}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className={`collapse navbar-collapse ${
                        showMenu ? "show" : ""
                    }`}
                >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/vida" className="nav-link h3 lead">
                                Vida
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link h3 lead">
                                Obra
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link h3 lead">
                                Escritos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link h3 lead">
                                Archivos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link h3 lead">
                                Fundación
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

import React from "react";
import rigoImage from "../../img/rigo-baby.jpg"; // Importa la imagen de Rigo
import "../../styles/vida.css";

export const Vida = () => {
  return (
    <div className="m-5">
        <div className="container">
            <h1 className="vidaTitle lead"> Vida</h1>
            <div className="timeline">
                <div className="period">
                <div className="period-content">
                    <h2>1900-1928</h2>
                    <p>Descripción del periodo 1</p>
                    <img src={rigoImage} alt="Periodo 1" /> {/* Imagen del período */}
                </div>
                </div>
                <div className="period">
                <div className="period-content">
                    <h2>1929-1940</h2>
                    <p>Descripción del periodo 2</p>
                    <img src={rigoImage} alt="Periodo 2" /> {/* Imagen del período */}
                </div>
                </div>
                
            </div>
        </div>
    </div>
  );
};

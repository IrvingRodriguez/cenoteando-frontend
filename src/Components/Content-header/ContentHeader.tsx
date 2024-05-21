import React from "react";
import { Link } from "react-router-dom";
export const ContentHeader = () => {
  return (
    <>
      <nav className="main-header navbar navbar-expand-md navbar-light navbar-white">
        <div className="container">
          <div className="collapse navbar-collapse order-3" id="navbarCollapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cenotes">
                  Lista de Cenotes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Mapa de Cenotes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">
                  Usuarios
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Descriptores
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  OAI-PMH
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

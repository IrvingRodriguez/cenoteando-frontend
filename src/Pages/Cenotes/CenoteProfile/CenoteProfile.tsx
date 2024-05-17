import React from "react";
import { DashboardData } from "../../Dashboard/DashboardData";
import { Gallery } from "../../../Components/Gallery/Gallery";

export const CenoteProfile = () => {
  return (
    <div>
      <DashboardData>
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-12 col-md-8">
                <p className="lbl-bread-subtitle mb-1">
                  {" "}
                  <img src="/src/assets/Icons/map.svg" alt="" />
                  Telchaquillo, Yucatán
                </p>
                <h1 className="lbl-bread-title mt-0">Che’e’en Chaak</h1>
                <p className="lbl-bread-subtitle">
                  “Cenote de aguas cristalinas”
                </p>
                <label className="tag-green-round mr-2">
                  <img src="/src/assets/Icons/check.svg" alt="" />
                  90% de índice de capacidad de carga
                </label>
                <label className="tag-green-round mr-2">
                  <img src="/src/assets/Icons/check.svg" alt="" />
                  85% de índice de cumplimiento de buenas prácticas
                </label>
                <label className="tag-green-round mr-2">
                  <img src="/src/assets/Icons/check.svg" alt="" />
                  62% de índice de accesibilidad al cenote
                </label>{" "}
                <label className="tag-green-round mr-2">
                  <img src="/src/assets/Icons/check.svg" alt="" />
                  100% de índice de presencia en redes sociales
                </label>
                <label className="tag-green-round mr-2">
                  <img src="/src/assets/Icons/check.svg" alt="" />
                  88% de índice de descripción de biodiversidad
                </label>
                <label className="tag-green-round mr-2">
                  <img src="/src/assets/Icons/check.svg" alt="" />
                  67% de índice de satisfacción de experiencia con base en
                  comentarios de visitantes
                </label>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="row">
                  <div className="col-md-4">
                    <button
                      type="submit"
                      className="btn btn-bg-blue-round  btn-block mt-5 float-right"
                    >
                      <img
                        src="/src/assets/Icons/beach.svg"
                        alt=""
                        className="mr-2 "
                      />
                      Turismo
                    </button>
                  </div>
                  <div className="col-md-2">
                    <button
                      type="button"
                      className="btn  btn-white  mt-5 float-right"
                    >
                      <img src="/src/assets/Icons/edit.svg" alt="" />
                    </button>
                  </div>
                  <div className="col-md-2">
                    <button
                      type="submit"
                      className="btn btn-white  mt-5 float-right"
                    >
                      <img
                        src="/src/assets/Icons/heart.svg"
                        alt=""
                        className="mr-2 "
                      />
                    </button>
                  </div>
                  <div className="col-md-2">
                    <button
                      type="submit"
                      className="btn btn-white  mt-5 float-right"
                    >
                      <img
                        src="/src/assets/Icons/upload.svg"
                        alt=""
                        className="mr-2 "
                      />
                    </button>
                  </div>
                  <div className="col-md-2">
                    <button
                      type="submit"
                      className="btn btn-white  mt-5 float-right"
                    >
                      <img
                        src="/src/assets/Icons/trash.svg"
                        alt=""
                        className="mr-2 "
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <Gallery></Gallery>
        </section>
      </DashboardData>
    </div>
  );
};

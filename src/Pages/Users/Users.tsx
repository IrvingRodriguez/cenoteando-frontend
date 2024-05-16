import React, { useState } from "react";
import { DashboardData } from "../Dashboard/DashboardData";
import { InviteUser } from "../../Components/Modals/InviteUser";

export const Users = () => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <DashboardData>
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6 col-md-5">
                <h1>Usuarios</h1>
              </div>
              <div className="col-sm-6 col-md-7">
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-group input-group-sm">
                      <div className="input-group-append">
                        <button
                          type="submit"
                          className="btn btn-white btn-sm form-control-c"
                        >
                          <img src="/src/assets/Icons/search.svg" alt="" />
                        </button>
                      </div>
                      <input
                        type="text"
                        name="table_search"
                        className="form-control form-control-c float-left btn-white btn-sm"
                        placeholder="Buscar"
                      />
                    </div>
                  </div>
                  <div className="col-md-2">
                    <button
                      type="button"
                      className="btn btn-block btn-white  btn-sm"
                    >
                      <img src="/src/assets/Icons/filter.svg" alt="" />
                      Filtrar
                    </button>
                  </div>
                  <div className="col-md-2">
                    <button
                      type="button"
                      className="btn btn-block btn-white btn-sm"
                      onClick={handleToggleModal}
                    >
                      <img src="/src/assets/Icons/add-user.svg" alt="" />
                      Invitar
                    </button>
                  </div>
                  <div className="col-md-1">
                    <a>
                      <img src="/src/assets/Icons/edit.svg" alt="" />
                    </a>
                  </div>
                  <div className="col-md-1">
                    <a>
                      <img src="/src/assets/Icons/trash.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body table-responsive p-0">
                    <table className="table table-hover text-nowrap">
                      <thead className="bg-header-footer">
                        <tr>
                          <th>
                            ID{" "}
                            <img
                              src="/src/assets/Icons/arrow-down.svg"
                              alt=""
                            />
                          </th>
                          <th>
                            Nombre{" "}
                            <img
                              src="/src/assets/Icons/arrow-down.svg"
                              alt=""
                            />
                          </th>
                          <th>
                            Apellidos{" "}
                            <img
                              src="/src/assets/Icons/arrow-down.svg"
                              alt=""
                            />
                          </th>
                          <th>
                            Correo electrónico{" "}
                            <img
                              src="/src/assets/Icons/arrow-down.svg"
                              alt=""
                            />
                          </th>
                          <th>
                            Tipo de usuario{" "}
                            <img
                              src="/src/assets/Icons/arrow-down.svg"
                              alt=""
                            />
                          </th>
                          <th>
                            Fecha de creación{" "}
                            <img
                              src="/src/assets/Icons/arrow-down.svg"
                              alt=""
                            />
                          </th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>183</td>
                          <td>John </td>
                          <td>Doe</td>
                          <td>John@gmail.com</td>
                          <td>
                            <span className="tag bg-tag-success">Turista</span>
                          </td>
                          <td>11-7-2014</td>
                          <td>
                            {" "}
                            <a>
                              <img src="/src/assets/Icons/eye.svg" alt="" />
                            </a>
                            <a>
                              <img src="/src/assets/Icons/edit.svg" alt="" />
                            </a>
                            <a>
                              <img src="/src/assets/Icons/trash.svg" alt="" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>183</td>
                          <td>John </td>
                          <td>Doe</td>
                          <td>John@gmail.com</td>
                          <td>
                            <span className="tag bg-tag-success">Turista</span>
                          </td>
                          <td>11-7-2014</td>
                          <td>
                            {" "}
                            <a>
                              <img src="/src/assets/Icons/eye.svg" alt="" />
                            </a>
                            <a>
                              <img src="/src/assets/Icons/edit.svg" alt="" />
                            </a>
                            <a>
                              <img src="/src/assets/Icons/trash.svg" alt="" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>183</td>
                          <td>John </td>
                          <td>Doe</td>
                          <td>John@gmail.com</td>
                          <td>
                            <span className="tag bg-tag-success">Turista</span>
                          </td>
                          <td>11-7-2014</td>
                          <td>
                            {" "}
                            <a>
                              <img src="/src/assets/Icons/eye.svg" alt="" />
                            </a>
                            <a>
                              <img src="/src/assets/Icons/edit.svg" alt="" />
                            </a>
                            <a>
                              <img src="/src/assets/Icons/trash.svg" alt="" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>183</td>
                          <td>John </td>
                          <td>Doe</td>
                          <td>John@gmail.com</td>
                          <td>
                            <span className="tag bg-tag-success">Turista</span>
                          </td>
                          <td>11-7-2014</td>
                          <td>
                            {" "}
                            <a>
                              <img src="/src/assets/Icons/eye.svg" alt="" />
                            </a>
                            <a>
                              <img src="/src/assets/Icons/edit.svg" alt="" />
                            </a>
                            <a>
                              <img src="/src/assets/Icons/trash.svg" alt="" />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="card-footer clearfix bg-header-footer">
                    <ul className="pagination pagination-sm m-0 float-right">
                      <li className="page-item">
                        <a className="page-link" href="#">
                          «
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          »
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <InviteUser
            showModal={showModal}
            handleToggleModal={handleToggleModal}
          ></InviteUser>
        </section>
      </DashboardData>
    </>
  );
};

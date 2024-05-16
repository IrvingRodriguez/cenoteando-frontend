import React from "react";

interface Props {
  showModal: boolean;
  handleToggleModal?: () => void;
}

export const InviteUser: React.FC<Props> = ({
  showModal,
  handleToggleModal,
}) => {
  console.log(showModal);
  return (
    <div>
      {showModal && (
        <div
          className={`modal fade ${showModal ? "show" : ""}`}
          id="modal-default"
          style={{ paddingRight: 22, display: "block" }}
          aria-modal="true"
          role="dialog"
          data-backdrop="static"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title-c">Invitar Usuario</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={handleToggleModal}
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <form action="">
                <div className="modal-body">
                  <div>
                    <div className="form-group">
                      <label
                        className="modal-label-c"
                        htmlFor="exampleInputEmail1"
                      >
                        Correo Electrónico
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder=" Correo Electrónico"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        className="modal-label-c"
                        htmlFor="exampleInputPassword1"
                      >
                        Nombre
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="name"
                        placeholder="Nombre"
                      />
                    </div>
                    <div className="form-group">
                      <label className="modal-label-c">Tipo de usuario</label>
                      <select className="form-control">
                        <option>Admin</option>
                        <option>Usuario</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="modal-footer justify-content-between">
                  <button
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                    onClick={handleToggleModal}
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

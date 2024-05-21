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
          <div className="row mt-5">
            <div className="col-12">
              <div className="card card-primary card-outline card-outline-tabs">
                <div className="card-header p-0 border-bottom-0">
                  <ul
                    className="nav nav-tabs"
                    id="custom-tabs-four-tab"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="custom-tabs-four-home-tab"
                        data-toggle="pill"
                        href="#custom-tabs-four-home"
                        role="tab"
                        aria-controls="custom-tabs-four-home"
                        aria-selected="false"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="custom-tabs-four-profile-tab"
                        data-toggle="pill"
                        href="#custom-tabs-four-profile"
                        role="tab"
                        aria-controls="custom-tabs-four-profile"
                        aria-selected="false"
                      >
                        Profile
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="custom-tabs-four-messages-tab"
                        data-toggle="pill"
                        href="#custom-tabs-four-messages"
                        role="tab"
                        aria-controls="custom-tabs-four-messages"
                        aria-selected="false"
                      >
                        Messages
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="custom-tabs-four-settings-tab"
                        data-toggle="pill"
                        href="#custom-tabs-four-settings"
                        role="tab"
                        aria-controls="custom-tabs-four-settings"
                        aria-selected="true"
                      >
                        Settings
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <div className="tab-content" id="custom-tabs-four-tabContent">
                    <div
                      className="tab-pane fade"
                      id="custom-tabs-four-home"
                      role="tabpanel"
                      aria-labelledby="custom-tabs-four-home-tab"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin malesuada lacus ullamcorper dui molestie, sit amet
                      congue quam finibus. Etiam ultricies nunc non magna
                      feugiat commodo. Etiam odio magna, mollis auctor felis
                      vitae, ullamcorper ornare ligula. Proin pellentesque
                      tincidunt nisi, vitae ullamcorper felis aliquam id.
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada fames ac turpis egestas. Proin id orci eu lectus
                      blandit suscipit. Phasellus porta, ante et varius ornare,
                      sem enim sollicitudin eros, at commodo leo est vitae
                      lacus. Etiam ut porta sem. Proin porttitor porta nisl, id
                      tempor risus rhoncus quis. In in quam a nibh cursus
                      pulvinar non consequat neque. Mauris lacus elit,
                      condimentum ac condimentum at, semper vitae lectus. Cras
                      lacinia erat eget sapien porta consectetur.
                    </div>
                    <div
                      className="tab-pane fade"
                      id="custom-tabs-four-profile"
                      role="tabpanel"
                      aria-labelledby="custom-tabs-four-profile-tab"
                    >
                      Mauris tincidunt mi at erat gravida, eget tristique urna
                      bibendum. Mauris pharetra purus ut ligula tempor, et
                      vulputate metus facilisis. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Vestibulum ante ipsum primis
                      in faucibus orci luctus et ultrices posuere cubilia Curae;
                      Maecenas sollicitudin, nisi a luctus interdum, nisl ligula
                      placerat mi, quis posuere purus ligula eu lectus. Donec
                      nunc tellus, elementum sit amet ultricies at, posuere nec
                      nunc. Nunc euismod pellentesque diam.
                    </div>
                    <div
                      className="tab-pane fade"
                      id="custom-tabs-four-messages"
                      role="tabpanel"
                      aria-labelledby="custom-tabs-four-messages-tab"
                    >
                      Morbi turpis dolor, vulputate vitae felis non, tincidunt
                      congue mauris. Phasellus volutpat augue id mi placerat
                      mollis. Vivamus faucibus eu massa eget condimentum. Fusce
                      nec hendrerit sem, ac tristique nulla. Integer vestibulum
                      orci odio. Cras nec augue ipsum. Suspendisse ut velit
                      condimentum, mattis urna a, malesuada nunc. Curabitur
                      eleifend facilisis velit finibus tristique. Nam vulputate,
                      eros non luctus efficitur, ipsum odio volutpat massa, sit
                      amet sollicitudin est libero sed ipsum. Nulla lacinia, ex
                      vitae gravida fermentum, lectus ipsum gravida arcu, id
                      fermentum metus arcu vel metus. Curabitur eget sem eu
                      risus tincidunt eleifend ac ornare magna.
                    </div>
                    <div
                      className="tab-pane fade active show"
                      id="custom-tabs-four-settings"
                      role="tabpanel"
                      aria-labelledby="custom-tabs-four-settings-tab"
                    >
                      Pellentesque vestibulum commodo nibh nec blandit. Maecenas
                      neque magna, iaculis tempus turpis ac, ornare sodales
                      tellus. Mauris eget blandit dolor. Quisque tincidunt
                      venenatis vulputate. Morbi euismod molestie tristique.
                      Vestibulum consectetur dolor a vestibulum pharetra. Donec
                      interdum placerat urna nec pharetra. Etiam eget dapibus
                      orci, eget aliquet urna. Nunc at consequat diam. Nunc et
                      felis ut nisl commodo dignissim. In hac habitasse platea
                      dictumst. Praesent imperdiet accumsan ex sit amet
                      facilisis.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </DashboardData>
    </div>
  );
};

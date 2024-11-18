import React from "react";

export default function MesRecetteCons() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* start page title */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0">Mes Recette</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="ConsulterListRecetteU">Recette</a>
                      </li>
                      <li className="breadcrumb-item active">Mes Recette</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {/* end page title */}
            <div className="row">
              <div className="col-lg-12">
                <div className="card" id="orderList">
                  <div className="card-header border-0">
                    <div className="row align-items-center gy-3">
                      <div className="col-sm">
                        <h5 className="card-title mb-0">Recette récent</h5>
                      </div>
                      <div className="col-sm-auto">
                        <div className="d-flex gap-1 flex-wrap">
                          <button
                            type="button"
                            className="btn btn-dark"
                            onClick={() =>
                              (window.location.href = "AjouterRecette")
                            }
                          >
                            <i className="ri-add-line align-bottom me-1" />{" "}
                            créer une recette
                          </button>

                          <button
                            className="btn btn-soft-danger"
                            id="remove-actions"
                            onclick="deleteMultiple()"
                          >
                            <i className="ri-delete-bin-2-line" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card-body pt-0">
                    <div>
                      
                      <div className="table-responsive table-card mb-1">
                        <table
                          className="table table-nowrap align-middle"
                          id="orderTable"
                        >
                          <thead className="text-muted table-light">
                            <tr className="text-uppercase">
                             
                              <th className="sort" data-sort="id">
                                image
                              </th>
                              <th className="sort" data-sort="customer_name">
                                Nom
                              </th>
                              <th className="sort" data-sort="product_name">
                                Catégorie
                              </th>
                              <th className="sort" data-sort="payment">
                                Sous Catégorie
                              </th>
                              <th className="sort" data-sort="date">
                                 Date
                              </th>
                              <th className="sort" data-sort="payment">
                                Status
                              </th>
                              <th className="sort" data-sort="city">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody className="list form-check-all">
                            <tr>
                              <td className="id">
                              <img src="assets/images/catvége.png" alt="" class="rounded avatar-sm"/>
                              </td>
                              <td className="customer_name">vegain ships</td>
                              <td className="product_name">vegain</td>
                              <td className="payment">snack</td>
                              <td className="date">
                                24 Dec, 2023,{" "}
                              </td>
                              <td className="status">
                                <span className="badge badge-soft-success text-uppercase">
                                  publié
                                </span>
                              </td>
                              <td>
                                <ul className="list-inline hstack gap-2 mb-0">
                                  <li
                                    className="list-inline-item"
                                    data-bs-toggle="tooltip"
                                    data-bs-trigger="hover"
                                    data-bs-placement="top"
                                    title="Consulter"
                                  >
                                    <a
                                      href="ConsulterRecetteUser"
                                      className="text-primary d-inline-block"
                                    >
                                      <i className="ri-eye-fill fs-16" />
                                    </a>
                                  </li>
                                  <li
                                    className="list-inline-item edit"
                                    data-bs-toggle="tooltip"
                                    data-bs-trigger="hover"
                                    data-bs-placement="top"
                                    title="Modifier"
                                  >
                                    <a
                                      href="ModifierRecetteAdmin"
                                      className="text-primary d-inline-block edit-item-btn"
                                    >
                                      <i className="ri-pencil-fill fs-16" />
                                    </a>
                                  </li>
                                  <li
                                    className="list-inline-item"
                                    data-bs-toggle="tooltip"
                                    data-bs-trigger="hover"
                                    data-bs-placement="top"
                                    title="Supprimer"
                                  >
                                    <a
                                      className="text-danger d-inline-block remove-item-btn"
                                      data-bs-toggle="modal"
                                      href="#deleteOrder"
                                    >
                                      <i className="ri-delete-bin-5-fill fs-16" />
                                    </a>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div
                      className="modal fade"
                      id="showModal"
                      tabIndex={-1}
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                    </div>
                    {/* Modal */}
                    <div
                      className="modal fade flip"
                      id="deleteOrder"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-body p-5 text-center">
                            <lord-icon
                              src="https://cdn.lordicon.com/gsqxdxog.json"
                              trigger="loop"
                              colors="primary:#405189,secondary:#f06548"
                              style={{ width: 90, height: 90 }}
                            />
                            <div className="mt-4 text-center">
                              <h4> Veuillez-vous supprimer vraiment cette
                              recette?</h4>
                              <p className="text-muted fs-15 mb-4">
                              </p>
                              <div className="hstack gap-2 justify-content-center remove">
                                <button
                                  className="btn btn-link link-success fw-medium text-decoration-none"
                                  id="deleteRecord-close"
                                  data-bs-dismiss="modal"
                                >
                                  <i className="ri-close-line me-1 align-middle" />{" "}
                                  Annuler
                                </button>
                                <button
                                  className="btn btn-danger"
                                  id="delete-record"
                                >
                                  Supprimer
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end modal */}
                  </div>
                </div>
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
          </div>
          {/* container-fluid */}
        </div>
        {/* End Page-content */}
        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">© Velzon.</div>
              <div className="col-sm-6">
                <div className="text-sm-end d-none d-sm-block">
                  Design &amp; Develop by Themesbrand
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

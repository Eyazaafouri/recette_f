import React from "react";
export default function GestionRecette() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* start page title */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0">Liste de recettes</h4>
                </div>
              </div>
            </div>
            {/* end page title */}
            {/* end row*/}
            <div className="row">
              <div className="col-lg-12">
                <div className="card" id="invoiceList">
                  <div className="card-body">
                    <div>
                      <div className="table-responsive table-card">
                        <table
                          className="table align-middle table-nowrap"
                          id="invoiceTable"
                        >
                          <thead className="text-muted">
                            <tr>
                              <th
                                className="sort text-uppercase"
                                data-sort="idR"
                              >
                                ID Recette
                              </th>
                              <th
                                className="sort text-uppercase"
                                data-sort="nomu"
                              >
                                Utilisateur
                              </th>
                              <th
                                className="sort text-uppercase"
                                data-sort="nomr"
                              >
                                Nom Recette
                              </th>
                              <th
                                className="sort text-uppercase"
                                data-sort="cat"
                              >
                                Catégorie
                              </th>
                              <th
                                className="sort text-uppercase"
                                data-sort="scat"
                              >
                                Sous Catégorie
                              </th>
                              <th
                                className="sort text-uppercase"
                                data-sort="date"
                              >
                                Date
                              </th>
                              <th
                                className="sort text-uppercase"
                                data-sort="status"
                              >
                                Status
                              </th>
                              <th
                                className="sort text-uppercase"
                                data-sort="action"
                              >
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody
                            className="list form-check-all"
                            id="invoice-list-data"
                          >
                            <tr>
                              <td className="id">
                                <a
                                  href="javascript:void(0);"
                                  onclick="ViewInvoice(this);"
                                  data-id={1}
                                  className="fw-medium link-primary"
                                >
                                  1
                                </a>
                              </td>
                              <td className="nomu">
                                <div className="d-flex align-items-center">
                                  eya
                                </div>
                              </td>
                              <td className="nomr">pizza</td>
                              <td className="cat">rapide</td>
                              <td className="scat">15min</td>
                              <td className="date">16/11/2024</td>
                              <td className="status">
                                <span className="badge badge-soft-success text-uppercase">
                                  en cours
                                </span>
                              </td>
                              <td>
                              <a href="ConsulterRecetteAdmin" class="link-primary">plus <i class="ri-arrow-right-line align-middle"></i></a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      
                    </div>
                    {/* Modal */}
                    <div
                      className="modal fade flip"
                      id="deleteOrder"
                      tabIndex={-1}
                      aria-labelledby="deleteOrderLabel"
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
                              <p className="text-muted fs-15 mb-4"></p>
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

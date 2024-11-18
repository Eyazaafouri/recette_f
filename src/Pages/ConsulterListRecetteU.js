import React from "react";

export default function ConsulterListRecetteU() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* start page title */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0">liste de recettes</h4>
                </div>
              </div>
            </div>
            {/* end page title */}
            <div className="row mb-3">
              <div className="col-xl-8">
                <div className="card product">
                  <div className="card-body">
                    <div className="row gy-3">
                      <div className="col-sm-auto">
                        <div className="avatar-lg bg-light rounded p-1">
                          <img
                            src="assets/images/products/img-8.png"
                            alt=""
                            className="img-fluid d-block"
                          />
                        </div>
                      </div>
                      <div className="col-sm">
                        <h5 className="fs-14 text-truncate">
                          <a href="ConsulterRecetteUser" className="text-dark">
                            Lasagnes végétariennes
                          </a>
                        </h5>
                        <ul className="list-inline text-muted">
                          <li className="list-inline-item">
                            créer par :{" "}
                            <span className="fw-medium">Aziz Mosbehi</span>
                          </li>
                        </ul>
                        <div>
                          <a
                            href="#"
                            className="d-block text-body p-1 px-2"
                            data-bs-toggle="modal"
                            data-bs-target="#NoterRE7"
                          >
                            <i className="ri-star-fill text-muted align-bottom me-1" />{" "}
                            Noter la recette
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card body */}
                  <div className="card-footer">
                    <div className="row align-items-center gy-3">
                      <div className="col-sm">
                        <div className="d-flex flex-wrap my-n1">
                          <textarea
                            class="form-control"
                            id="meassageInput"
                            rows="1"
                            placeholder="Commenter la recette "
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-sm-auto">
                        <div className="d-flex align-items-center gap-2 text-muted">
                          <button
                            type="button"
                            className="btn btn-warning"
                            onClick={() =>
                              (window.location.href = "")
                            }
                          >
                            <i className="ri-chat-forward-line align-bottom me-1" />{" "}
                            Envoyer
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end card footer */}
                </div>
              </div>
              {/* end col */}
              <div className="col-xl-4">
                <div className="sticky-side-div">
                  <div className="card">
                    <div className="card-header border-bottom-dashed">
                      <h5 className="card-title mb-0">Recette à la une</h5>
                    </div>
                    <div className="card-body pt-2">
                      <div className="table-responsive">
                        <table className="table table-borderless mb-0">
                          <tbody>
                            
                            <tr className="table-active">
                              <th>Lasagnes aux légumes grillés</th>
                              <td className="text-end">
                                <span className="fw-semibold" id="">
                                
                                </span>
                              </td>
                            </tr>
                            <tr className="table-active">
                              <th>Ratatouille provençale</th>
                              <td className="text-end">
                                <span className="fw-semibold" id="cart-total">
                                  
                                </span>
                              </td>
                            </tr>
                            <tr className="table-active">
                              <th>Burgers végétariens </th>
                              <td className="text-end">
                                <span className="fw-semibold" id="cart-total">
                                  
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/* end table-responsive */}
                    </div>
                  </div>
                  
                </div>
                {/* end stickey */}
              </div>
            </div>
            {/* end row */}
          </div>
          {/* container-fluid */}
        </div>
        <div
          className="modal fade flip"
          id="NoterRE7"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body p-5 text-center">
                <img
                  src="assets/images/icons8-star.gif"
                  style={{ width: 90, height: 90 }}
                />
                <div className="mt-4 text-center">
                  <div dir="ltr">
                    <div id="rater-onhover" className="align-middle" />
                    <span className="ratingnum badge bg-info align-middle ms-2" />
                  </div>

                  <p className="text-muted fs-15 mb-4"></p>
                  <div className="hstack gap-2 justify-content-center remove">
                    <button
                      className="btn btn-outline-success"
                      id="deleteRecord-close"
                      data-bs-dismiss="modal"
                    >
                      <i className="ri-close-line me-1 align-middle" /> Annuler
                    </button>
                    <button className="btn btn-dark" id="delete-record">
                      enregistrer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

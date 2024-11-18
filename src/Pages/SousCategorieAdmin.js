import React from "react";
export default function SousCategorieAdmin() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* start page title */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0">Sous Categorie</h4>
                  
                </div>
              </div>
            </div>
            {/* end page title */}
            <div className="row mb-3">
              {/* Main Content Column */}
              <div className="col-xl-8">
                <div className="card product">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <h5 className="fs-15 text">
                          <a href="ConsulterListRecetteA" className="text-dark">
                            Plats principaux
                          </a>
                        </h5>
                        <div className="avatar-lg bg-light rounded p-1">
                          <img
                            src="assets/images/scplat.png"
                            alt=""
                            className="img-fluid d-block"
                          />
                        </div>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="btn btn-outline-dark"
                          style={{ marginRight: "8px" }}
                          data-bs-toggle="modal"
                          data-bs-target="#showModal"
                        >
                          Modifier
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                          data-bs-toggle="modal"
                          data-bs-target="#deleteOrder"
                        >
                          Supprimer
                        </button>
                      </div>
                    </div>
                    {/* Modal pour supprimer */}
                    <div
                      className="modal fade flip"
                      id="deleteOrder"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-body p-5 text-center">
                            <lord-icon
                              src="https://cdn.lordicon.com/gsqxdxog.json"
                              trigger="loop"
                              colors="primary:#405189,secondary:#f06548"
                              style={{ width: 90, height: 90 }}
                            />
                            <div className="mt-4 text-center">
                              <h4>
                                Veuillez-vous supprimer vraiment cette
                                sous catégorie?
                              </h4>
                              <p className="text-muted fs-15 mb-4"></p>
                              <div className="hstack gap-2 justify-content-center remove">
                                <button
                                  className="btn btn-outline-success" /* Applique le style du bouton Supprimer */
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
                                  supprimer
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Modal pour Modifier */}
                    <div
                      className="modal fade"
                      id="showModal"
                      tabIndex={-1}
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-header bg-light p-3">
                            <h5 className="modal-title" id="exampleModalLabel">
                              Modifier  sous catégorie
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                              id="close-modal"
                            />
                          </div>
                          <form className="tablelist-form" autoComplete="off">
                            <div className="modal-body">
                              <input type="hidden" id="id-field" />
                              <div className="row g-3">
                                <div className="col-lg-12">
                                  <div>
                                    <label
                                      htmlFor="company_name-field"
                                      className="form-label"
                                    >
                                      nom de la sous catégorie
                                    </label>
                                    <input
                                      type="text"
                                      id="company_name-field"
                                      className="form-control"
                                      required=""
                                    />
                                  </div>
                                </div>
                                <div className="card-body pt-2">
                                  <div className="dropzone">
                                    <div className="fallback">
                                      <input
                                        name="file"
                                        type="file"
                                        multiple="multiple"
                                      />
                                    </div>
                                    <div style={{ textAlign: "center" }}>
                                      <i className="display-6 text-muted ri-upload-cloud-2-fill" />
                                      <h6>
                                        enter une nouvelle image de la sous catégorie
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                                {/* Autres champs du formulaire */}

                                {/* Autres champs */}
                              </div>
                            </div>
                            <div className="modal-footer">
                              <div className="hstack gap-2 justify-content-end">
                                <button
                                  type="button"
                                  className="btn btn-light"
                                  data-bs-dismiss="modal"
                                >
                                  Annuler
                                </button>
                                <button
                                  type="submit"
                                  className="btn btn-success"
                                  id="add-btn"
                                >
                                  Modifier
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar Column for Adding New Category */}
              <div className="col-xl-4">
                <div className="sticky-side-div">
                  <div className="card">
                    <div className="card-header border-bottom-dashed">
                      <h5 className="card-title mb-0">Ajouter  sous catégorie</h5>
                    </div>
                    <div className="card-header bg-soft-light border-bottom-dashed">
                    <div>
                                <label
                                  htmlFor="imageRecette"
                                  className="text-muted text-uppercase fw-semibold"
                                >
                                  Nom de  sous catégorie
                                </label>
                              </div>
                      <div className="hstack gap-3 px-3 mx-n3">
                        <input
                          className="form-control me-auto"
                          type="text"
                          placeholder="entrer le nom de la catégorie"
                        />
                      </div>
                    </div>
                    <div className="card-body pt-2">
                    <div>
                                <label
                                  htmlFor="imageRecette"
                                  className="text-muted text-uppercase fw-semibold"
                                >
                                  Image de sous catégorie
                                </label>
                              </div>
                      <div className="dropzone">
                        <div className="fallback">
                          <input name="file" type="file" />
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <i className="display-6 text-muted ri-upload-cloud-2-fill" />
                          <h6>entrer l'image de la sous catégorie</h6>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn btn-warning"
                        style={{ float: "right", marginTop: "10px" }} // Ajustez la valeur de "10px" selon vos besoins
                      >
                        Ajouter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* End of Sidebar */}
            </div>
            {/* end row */}
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
      {/* end main content*/}
    </>
  );
}

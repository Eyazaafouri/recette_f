import React from "react";
export default function ConsulterRecetteUser() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* start page title */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0"> recette</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="ConsulterListRecetteU">recette</a>
                      </li>
                      <li className="breadcrumb-item active">Details</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {/* end page title */}
            <div className="card">
              <div className="card-body">
                <div className="row g-4">
                  <div className="col-lg-4">
                    <div className="sticky-side-div">
                      <div className="card ribbon-box border shadow-none right">
                        <img
                          src="assets/images/nft/img-05.jpg"
                          alt=""
                          className="img-fluid rounded"
                        />
                      </div>
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-lg-8">
                    <div>
                      <div className="dropdown float-end">
                        <button
                          className="btn btn-ghost-primary btn-icon dropdown"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="ri-more-fill align-middle fs-16" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a className="dropdown-item view-item-btn" href="">
                              <i className=" ri-survey-line align-bottom me-2 text-muted" />
                              ajouter au planning
                            </a>
                          </li>
                          
                          
                        </ul>
                      </div>
                      <h4>Nom de recette</h4>
                      <div className="hstack gap-3 flex-wrap">
                        <div className="text-muted">
                          créer par :{" "}
                          <span className="text-body fw-medium">
                            Sarra Zaoui
                          </span>
                        </div>
                        <div className="vr" />
                        <div className="text-muted">
                          Catégorie:{" "}
                          <span className="text-body fw-medium">
                            végétarien
                          </span>
                        </div>
                        <div className="vr" />
                        <div className="text-muted">
                          Sous Categorie:{" "}
                          <span className="text-body fw-medium">
                            plats principaux
                          </span>
                        </div>
                      </div>
                      {/*end row*/}
                      <div className="mt-4 text-muted">
                        <h5 className="fs-14">Ingrédients :</h5>
                        <p>
                          Cultural patterns are the similar behaviors within
                          similar situations we witness due to shared beliefs,
                          values, norms and social practices that are steady
                          over time. In art, a pattern is a repetition of
                          specific visual elements. The dictionary.com
                          definition of "pattern" is: an arrangement of repeated
                          or corresponding parts, decorative motifs...
                        </p>
                      </div>
                      <div className="mt-4 text-muted">
                        <h5 className="fs-14">Méthode de préparation :</h5>
                        <p>
                          Cultural patterns are the similar behaviors within
                          similar situations we witness due to shared beliefs,
                          values, norms and social practices that are steady
                          over time. In art, a pattern is a repetition of
                          specific visual elements. The dictionary.com
                          definition of "pattern" is: an arrangement of repeated
                          or corresponding parts, decorative motifs...
                        </p>
                      </div>
                      <div className="mt-4 text-muted">
                        <h5 className="fs-14">Information Complémentaires :</h5>
                        <p>
                          Cultural patterns are the similar behaviors within
                          similar situations we witness due to shared beliefs,
                          values, norms and social practices that are steady
                          over time. In art, a pattern is a repetition of
                          specific visual elements. The dictionary.com
                          definition of "pattern" is: an arrangement of repeated
                          or corresponding parts, decorative motifs...
                        </p>
                      </div>
                     
                    </div>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>
            </div>
            {/*end card*/}
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
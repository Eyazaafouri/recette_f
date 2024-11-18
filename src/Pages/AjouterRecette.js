import React from "react";

export default function AjouterRecette() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* Start page title */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0">Créer recette</h4>
                </div>
              </div>
            </div>
            {/* End page title */}

            <div className="row justify-content-center">
              <div className="col-xxl-9">
                <div className="card">
                  <form
                    className="needs-validation"
                    noValidate
                    id="invoice_form"
                  >
                    <div className="card-body p-4 border-top border-top-dashed">
                      <div className="row mt-3">
                        <div className="col-lg-4">
                          <div className="mb-2">
                            <label
                              htmlFor="titreRecette"
                              className="form-label text-muted text-uppercase fw-semibold"
                            >
                              Titre
                            </label>
                            <input
                              type="text"
                              className="form-control bg-light border-0"
                              id="titreRecette"
                              placeholder="Entrer le nom de la recette"
                              required
                            />
                            <div className="invalid-feedback">
                              Le champ titre est obligatoire
                            </div>
                          </div>
                        </div>
                        {/* End col */}

                        <div className="col-sm-6 ms-auto">
                          <div className="row">
                            <div className="col-lg-8">
                              <div>
                                <label
                                  htmlFor="imageRecette"
                                  className="text-muted text-uppercase fw-semibold"
                                >
                                  Image
                                </label>
                              </div>
                              <input
                                className="form-control"
                                type="file"
                                id="imageRecette"
                                required
                              />
                              <div className="invalid-feedback">
                                Le champ image est obligatoire
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4">
                          <div className="mb-2">
                            <label
                              htmlFor="categorieRecette"
                              className="form-label text-muted text-uppercase fw-semibold"
                            >
                              Catégorie
                            </label>
                            <select
                              className="form-control bg-light border-0"
                              id="categorieRecette"
                              required
                            >
                              <option value="">cat1</option>
                              <option value="">cat2</option>
                              <option value="">cat3</option>
                              <option value="">cat4</option>
                              <option value="">cat5</option>
                              <option value="">cat6</option>
                              <option value="">cat7</option>
                              <option value="">cat8</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-sm-6 ms-auto">
                          <div className="row">
                            <div className="col-lg-8">
                              <label
                                htmlFor="sousCategorieRecette"
                                className="text-muted text-uppercase fw-semibold"
                              >
                                Sous Catégorie
                              </label>
                              <select
                                className="form-control bg-light border-0"
                                id="sousCategorieRecette"
                                required
                              >
                                <option value="">scat1</option>
                                <option value="">scat2</option>
                                <option value="">scat3</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        {/* Zone de texte : Ingrédients */}
                        <div className="mt-4">
                          <label
                            htmlFor="ingredientsRecette"
                            className="form-label text-muted text-uppercase fw-semibold"
                          >
                            Ingrédients
                          </label>
                          <textarea
                            className="form-control"
                            id="ingredientsRecette"
                            placeholder="Donner les ingrédients de la recette"
                            rows={2}
                            required
                          />
                        </div>

                        {/* Zone de texte : Méthode de préparation */}
                        <div className="mt-4">
                          <label
                            htmlFor="preparationRecette"
                            className="form-label text-muted text-uppercase fw-semibold"
                          >
                            Méthode de préparation
                          </label>
                          <textarea
                            className="form-control"
                            id="preparationRecette"
                            placeholder="Donner la méthode de préparation de la recette"
                            rows={2}
                            required
                          />
                        </div>

                        {/* Zone de texte : Informations Complémentaires */}
                        <div className="mt-4">
                          <label
                            htmlFor="infosRecette"
                            className="form-label text-muted text-uppercase fw-semibold"
                          >
                            Informations Complémentaires
                          </label>
                          <textarea
                            className="form-control"
                            id="infosRecette"
                            placeholder="Saisir des informations complémentaires si nécessaire"
                            rows={2}
                          />
                        </div>

                        {/* Bouton : Partager */}
                        <div className="hstack gap-2 justify-content-end d-print-none mt-4">
                        <button
                            type="button"
                            className="btn btn-dark"
                            onClick={() =>
                              (window.location.href = "MesRecetteCons")
                            }
                          >
                            <i className="ri-close-line align-bottom me-1" />{" "}
                            Annuler
                          </button>
                          <button type="submit" className="btn btn-warning">
                            <i className="ri-send-plane-fill align-bottom me-1" />
                            Partager
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
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
      </div>
    </>
  );
}

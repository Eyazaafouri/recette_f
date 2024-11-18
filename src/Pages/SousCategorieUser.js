import React from "react";
export default function CategorieUser() {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* start page title */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0">Sous Catégorie</h4>
                </div>
              </div>
            </div>
            {/* end page title */}
            <div className="card" id="demo">
              <div className="row">
                
                {/*end col*/}
                
                {/*end col*/}
                
                {/*end col*/}
                <div className="col-lg-12">
                  <div className="card-body p-4">
                  <div className="d-flex align-items-center justify-content-between">
                      <div>
                      <h5 className="fs-15 text">
                          <a href="ConsulterListRecetteU" className="text-dark">
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
                      </div>
                    </div>
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end col*/}
              </div>
              {/*end row*/}
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
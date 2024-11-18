import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import AjouterRecette from './Pages/AjouterRecette';
import CategorieAdmin from './Pages/CategorieAdmin';
import SousCategorieAdmin from './Pages/SousCategorieAdmin';
import GestionRecette from './Pages/GestionRecette';
import ConsulterRecetteAdmin from './Pages/ConsulterRecetteAdmin';
import ModifierRecetteAdmin from './Pages/ModifierRecetteAdmin';
import ConsulterListRecetteU from './Pages/ConsulterListRecetteU';
import ConsulterListRecetteA from './Pages/ConsulterListRecetteA';
import ConsulterRecetteUser from './Pages/ConsulterRecetteUser';
import MesRecetteCons from './Pages/MesRecetteCons';
import CategorieUser from './Pages/CategorieUser';
import SousCategorieUser from './Pages/SousCategorieUser';

function App() {
  // Sidebar component
  const SideBar = () => {
    const location = useLocation();

    // Don't display sidebar on Login, Register, Accueil, or ModifierMdp pages
    if (location.pathname === "/Login" || location.pathname === "/Register" || location.pathname === "/Accueil" || location.pathname === "/ModifierMdp") {
      return null;
    }

    return (
      <div className="app-menu navbar-menu">
        <div className="navbar-brand-box">
          <Link to="/Home" className="logo logo-dark">
            <span className="logo-lg">
              <img src="/assets/images/logor.png" alt="" height="75" />
            </span>
          </Link>
          <button type="button" className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover">
            <i className="ri-record-circle-line"></i>
          </button>
        </div>
        <div id="scrollbar">
          <div className="container-fluid">
            <ul className="navbar-nav" id="navbar-nav">
              <li className="menu-title"><span data-key="t-menu">Menu</span></li>
              <li className="nav-item">
                <Link to='' className="nav-link">
                  <span data-key="t-dashboards">Dashboards</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='' className="nav-link">
                  <span data-key="t-dashboards">Utilisateurs</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/CategorieAdmin' className="nav-link">
                  <span data-key="t-dashboards">Gérer Catégorie</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/GestionRecette' className="nav-link">
                  <span data-key="t-dashboards">Gérer Recette</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/MyReclamations' className="nav-link">
                  <span data-key="t-dashboards">Avis</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/CategorieUser' className="nav-link">
                  <span data-key="t-dashboards">Recette</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/MesRecetteCons' className="nav-link">
                  <span data-key="t-dashboards">Mes Recette</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebar-background"></div>
      </div>
    );
  };

  // Header component
  const Header = () => {
    const location = useLocation();

    // Don't display header on Login, Register, Accueil, or ModifierMdp pages
    if (location.pathname === "/Login" || location.pathname === "/Register" || location.pathname === "/Accueil" || location.pathname === "/ModifierMdp") {
      return null;
    }

    return (
      <header id="page-topbar">
        <div className="layout-width">
          <div className="navbar-header">
            <div className="d-flex">
              <div className="navbar-brand-box horizontal-logo"></div>
            </div>
            <div className="d-flex align-items-center">
              <div className="dropdown ms-sm-3 header-item topbar-user">
                <button type="button" className="btn" id="page-header-user-dropdown" data-bs-toggle="dropdown">
                  <i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Profil</span>
                </button>
                <div className="dropdown-menu dropdown-menu-end">
                  <span className="align-middle">Déconnexion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  };

  return (
    <div>
      <Router>
        <SideBar />
        <Header />
        <Routes>
          <Route path="/CategorieAdmin" element={<CategorieAdmin />} />
          <Route path="/SousCategorieAdmin" element={<SousCategorieAdmin />} />
          <Route path="/AjouterRecette" element={<AjouterRecette />} />
          <Route path="/GestionRecette" element={<GestionRecette />} />
          <Route path="/ConsulterRecetteAdmin" element={<ConsulterRecetteAdmin />} />
          <Route path="/ModifierRecetteAdmin" element={<ModifierRecetteAdmin />} />
          <Route path="/ConsulterListRecetteU" element={<ConsulterListRecetteU />} />
          <Route path="/ConsulterListRecetteA" element={<ConsulterListRecetteA />} />
          <Route path="*" element={<Navigate to="/CategorieAdmin" />} />
          <Route path="/ConsulterRecetteUser" element={<ConsulterRecetteUser />} />
          <Route path="/MesRecetteCons" element={<MesRecetteCons />} />
          <Route path="/CategorieUser" element={<CategorieUser />} />
          <Route path="/SousCategorieUser" element={<SousCategorieUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

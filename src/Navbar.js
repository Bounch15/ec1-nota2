import './Styles_Navbar.css'
export function Navbar_Restaurante(){


    return <div>
    <div className="superNav border-bottom py-2 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 centerOnMobile">
            <select className="me-3 border-0 bg-light">
              <option value="en-us">EN-US</option>
            </select>
            <span className="d-none d-lg-inline-block d-md-inline-block d-sm-inline-block d-xs-none me-3"><strong>localesulima@ulima.edu.pe</strong></span>
            <span className="me-3"><i className="fa-solid fa-phone me-1 text-warning" /> <strong>+51-980905072</strong></span>
          </div>
        </div>
      </div>
    </div>
    <nav className="navbar navbar-expand-lg bg-white sticky-top navbar-light p-3 shadow-sm">
      <div className="container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Universidad_de_Lima_logo.png" alt="Bootstrap" width="50" height="50"/>
        <a className="navbar-brand" href="#"><i className="fa-solid fa-shop me-2" /> <strong>Locales UL</strong></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
          <div className="input-group">
            <span className="border-warning input-group-text bg-warning text-white"><i className="fa-solid fa-magnifying-glass" /></span>
            <input type="text" className="form-control border-warning" style={{color: '#f37a27'}} />
            <button className="btn btn-warning text-white">Search</button>
          </div>
        </div>
        <div className=" collapse navbar-collapse" id="navbarNavDropdown">
          <div className="ms-auto d-none d-lg-block">
            <div className="input-group">
              <span className="border-warning input-group-text bg-warning text-white"><i className="fa-solid fa-magnifying-glass" /></span>
              <input type="text" className="form-control border-warning" style={{color: '#f37a27s'}} />
              <button className="btn btn-warning text-white">Search</button>
            </div>
          </div>
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <a className="nav-link mx-2 text-uppercase active" aria-current="page" href="#">Ofertas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2 text-uppercase" href="#">Locales</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2 text-uppercase" href="#"><i className="fa-solid fa-cart-shopping me-1" /> Carrito</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2 text-uppercase" href="#"><i className="fa-solid fa-circle-user me-1" />Cuenta</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>


}

export default Navbar_Restaurante


export function Navbar_Restaurante(){



    return <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="/index.html">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Universidad_de_Lima_logo.png" alt="Bootstrap" width={50} height={50} />
          </a>
        </div>
      </nav>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#!">
                <img src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" alt="Logo" width={35} height={35} className="d-inline-block align-text-top " />
                <h5 className="fw-bold mb-2 text-uppercase">CARRITO</h5>
              </a>
            </div>
          </nav>
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#!">
                <img src="https://uxwing.com/wp-content/themes/uxwing/download/file-and-folder-type/checklist-icon.png" alt="Logo" width={35} height={35} className="d-inline-block align-text-top" />
                <h5 className="fw-bold mb-2 text-uppercase">LISTA DE PEDIDOS</h5>
              </a>
            </div>
          </nav>
          <div className="btn-group">
            <a type="button" className="btn btn btn-light fw-bold mb-2" href="#!">CATEGORIAS</a>
            <button type="button" className="btn btn btn-light dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" data-bs-reference="parent">
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#!#">Fast Food</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#!">Cafeterias</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#!">Comida asiatica</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#!">Kiosko</a></li>
            </ul>
          </div>
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#!"><h5 className="fw-bold mb-2 text-uppercase">RECLAMOS</h5></a>
            </div>
          </nav>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Codigo de pedido" aria-label="Search" />
          <a className="btn btn-outline-success" href="#!" role="button">BUSCAR</a>           
        </form>
        <nav className="navbar bg-body-tertiary">
          <form className="container-fluid justify-content-start">
            <a className="btn btn-primary" href="#!" role="button">Log Out</a>
          </form>
        </nav>
      </div>
    </div>
    </nav>


}

export default Navbar_Restaurante

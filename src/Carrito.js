import { useNavigate } from "react-router-dom"
import './Styles_Carrito.css';
import bembos from './imagenes//logosrestaurantes/Bembos.png'
import chifaexpress from './imagenes//logosrestaurantes/chifa express.png'
import listo from './imagenes//logosrestaurantes/Listo.jpg'
import marianne from './imagenes//logosrestaurantes/Marianne.png'
import mrsushi from './imagenes//logosrestaurantes/MrSushi.png'
import neverafit from './imagenes/logosrestaurantes/nevera fit.png'
import starbucks from './imagenes//logosrestaurantes/Starbucks_Corporation_Logo_2011.svg.png'

export function Carrito(){

  const navigate = useNavigate()

  const butOnClick1 = function() {
    navigate("/ec1-nota2/CategoriasLocales_Bembos", {
    }) 
  }
  const butOnClick2 = function() {
    navigate("/ec1-nota2", {
    }) 
  }
  const butOnClick3 = function() {
    navigate("/ec1-nota2/Estadopedido", {
    }) 
  }
  const butOnClick4 = function() {
    navigate("/ec1-nota2/Carrito", {
    }) 
  }

  const butOnClick5 = function() {
    navigate("/ec1-nota2/CategoriaLocales", {
    }) 
  }


    return <div>
    <div>
      <div className="superNav border-bottom py-2 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 centerOnMobile">
              <select className="me-3 border-0 bg-light">
                <option value="en-us">EN-US</option>
              </select>
              <span className="d-none d-lg-inline-block d-md-inline-block d-sm-inline-block d-xs-none me-3">
                <strong>localesulima@ulima.edu.pe</strong>
              </span>
              <span className="me-3">
                <i className="fa-solid fa-phone me-1 text-warning" />
                <strong>+51-980905072</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-white sticky-top navbar-light p-3 shadow-sm">
        <div className="container">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Universidad_de_Lima_logo.png" alt="Bootstrap" width={50} height={50} />
          <a className="navbar-brand" href="#">
            <i className="fa-solid fa-shop me-2" />
            <strong>Locales UL</strong>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
            <div className="input-group">
              <span className="border-warning input-group-text bg-warning text-white">
                <i className="fa-solid fa-magnifying-glass" />
              </span>
              <input type="text" className="form-control border-warning" style={{color: '#f37a27'}} />
              <button className="btn btn-warning text-white">
                Search
              </button>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div className="ms-auto d-none d-lg-block">
              <div className="input-group">
                <span className="border-warning input-group-text bg-warning text-white">
                  <i className="fa-solid fa-magnifying-glass" />
                </span>
                <input type="text" className="form-control border-warning" style={{color: '#f37a27'}} placeholder="Codigo de pedido" />
                <button className="btn btn-warning text-white" onClick={ butOnClick3 }>
                  Buscar Pedido
                </button>
              </div>
            </div>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase active" aria-current="page" href="#">
                  Ofertas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" onClick={ butOnClick5 }>
                  Locales
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" onClick={ butOnClick4 }>
                  <i className="fa-solid fa-cart-shopping me-1" />
                  Carrito
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase">
                  <i className="fa-solid fa-circle-user me-1" />
                  LogOut
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <section className="h-100 h-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card">
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-lg-7">
                    <h5 className="mb-3">
                      <a href="#!" className="text-body">
                        <i className="fas fa-long-arrow-alt-left me-2" />
                        Continuar comprando
                      </a>
                    </h5>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1">Carrito</p>
                        <p className="mb-0">
                          Tienes estos items en tu carrito
                        </p>
                      </div>
                      <div>
                        <p className="mb-0">
                          <span className="text-muted">
                            Ordenar por:
                          </span>
                          <a href="#!" className="text-body">
                            precio
                            <i className="fas fa-angle-down mt-1" />
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex flex-row align-items-center">
                            <div>
                              <img src={bembos} className="img-fluid rounded-3" alt="Shopping item" style={{width: '65px'}} />
                            </div>
                            <div className="ms-3">
                              <h5>Hamburgesa cheese</h5>
                              <p className="small mb-0">
                                Grande c papas
                              </p>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center">
                            <div style={{width: '50px'}}>
                              <h5 className="fw-normal mb-0">1</h5>
                            </div>
                            <div style={{width: '80px'}}>
                              <h5 className="mb-0">S./29</h5>
                            </div>
                            <a href="#!" style={{color: '#cecece'}}>
                              <i className="fas fa-trash-alt" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex flex-row align-items-center">
                            <div>
                              <img src={chifaexpress} className="img-fluid rounded-3" alt="Shopping item" style={{width: '65px'}} />
                            </div>
                            <div className="ms-3">
                              <h5>Chaufa de pollo</h5>
                              <p className="small mb-0">
                                Meadiano con gaseosa
                              </p>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center">
                            <div style={{width: '50px'}}>
                              <h5 className="fw-normal mb-0">1</h5>
                            </div>
                            <div style={{width: '80px'}}>
                              <h5 className="mb-0">S./24</h5>
                            </div>
                            <a href="#!" style={{color: '#cecece'}}>
                              <i className="fas fa-trash-alt" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex flex-row align-items-center">
                            <div>
                              <img src={listo} className="img-fluid rounded-3" alt="Shopping item" style={{width: '65px'}} />
                            </div>
                            <div className="ms-3">
                              <h5>Gaseosa Inka Cola</h5>
                              <p className="small mb-0">750ml</p>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center">
                            <div style={{width: '50px'}}>
                              <h5 className="fw-normal mb-0">1</h5>
                            </div>
                            <div style={{width: '80px'}}>
                              <h5 className="mb-0">S./3</h5>
                            </div>
                            <a href="#!" style={{color: '#cecece'}}>
                              <i className="fas fa-trash-alt" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card mb-3 mb-lg-0">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex flex-row align-items-center">
                            <div>
                              <img src={neverafit} className="img-fluid rounded-3" alt="Shopping item" style={{width: '65px'}} />
                            </div>
                            <div className="ms-3">
                              <h5>Tres leches</h5>
                              <p className="small mb-0">
                                Tamaño standart
                              </p>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center">
                            <div style={{width: '50px'}}>
                              <h5 className="fw-normal mb-0">1</h5>
                            </div>
                            <div style={{width: '80px'}}>
                              <h5 className="mb-0">S./12</h5>
                            </div>
                            <a href="#!" style={{color: '#cecece'}}>
                              <i className="fas fa-trash-alt" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="card bg-primary text-white rounded-3">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <h5 className="mb-0">
                            Detalles de tarjeta
                          </h5>
                        </div>
                        <p className="small mb-2">
                          Tipo de tarjeta
                        </p>
                        <a href="#!" type="submit" className="text-white">
                          <i className="fab fa-cc-mastercard fa-2x me-2" />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <i className="fab fa-cc-visa fa-2x me-2" />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <i className="fab fa-cc-amex fa-2x me-2" />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <i className="fab fa-cc-paypal fa-2x" />
                        </a>
                        <form className="mt-4">
                          <div className="form-outline form-white mb-4">
                            <input type="text" id="typeName" className="form-control form-control-lg" siez={17} placeholder="Cardholder's Name" />
                            <label className="form-label" htmlFor="typeName">
                              Cardholder's Name
                            </label>
                          </div>
                          <div className="form-outline form-white mb-4">
                            <input type="text" id="typeText" className="form-control form-control-lg" siez={17} placeholder="1234 5678 9012 3457" minLength={19} maxLength={19} />
                            <label className="form-label" htmlFor="typeText">
                              Card Number
                            </label>
                          </div>
                          <div className="row mb-4">
                            <div className="col-md-6">
                              <div className="form-outline form-white">
                                <input type="text" id="typeExp" className="form-control form-control-lg" placeholder="MM/YYYY" size={7} minLength={7} maxLength={7} />
                                <label className="form-label" htmlFor="typeExp">
                                  Expiration
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-outline form-white">
                                <input type="password" id="typeText" className="form-control form-control-lg" placeholder="●●●" size={1} minLength={3} maxLength={3} />
                                <label className="form-label" htmlFor="typeText">
                                  Cvv
                                </label>
                              </div>
                            </div>
                          </div>
                        </form>
                        <hr className="my-4" />
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Subtotal</p>
                          <p className="mb-2">S./62</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Shipping</p>
                          <p className="mb-2">S./6</p>
                        </div>
                        <div className="d-flex justify-content-between mb-4">
                          <p className="mb-2">Total(Incl. taxes)</p>
                          <p className="mb-2">S./68</p>
                        </div>
                        <a href="/pedido.html">
                          <button type="button" className="btn btn-info btn-block btn-lg">
                            <div className="d-flex justify-content-between">
                              <span>S/.68 Checkout</span>
                              <span>
                                <i className="fas fa-long-arrow-alt-right ms-2" />
                              </span>
                            </div>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

}

export default Carrito

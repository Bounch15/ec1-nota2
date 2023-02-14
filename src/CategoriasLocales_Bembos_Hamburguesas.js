import './Styles_Categoriaslocales.css'
import { useNavigate } from "react-router-dom"
import quesotocino from './imagenes/platos/quesotocino.png'
import gaseosa from './imagenes/platos/gaseosa.jpg'
import hamburguesa from './imagenes/platos/hamburguesa.jpg'
import hamburguesaparrila from './imagenes/platos/hamburguesaparrila.jpg'
import hamburguesafrancesa from './imagenes/platos/hamburguesafrancesa.jpg'
import hamburguesachuevo from './imagenes/platos/hamburguesachuevo.jpg'
import papas from './imagenes/platos/papasjfif.jfif'
import nugguets from './imagenes/platos/nuggets.jpg'
import inkachips from './imagenes/platos/inkachips.PNG'
import cheesefingers from './imagenes/platos/cheesefingers.PNG'
import CategoriasLocales from "./CategoriasLocales";

export function CategoriasLocales_Bembos_Hamburguesas(){

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
      navigate("/ec1-nota2/CategoriasLocales", {
      }) 
    }
    const butOnClick6 = function() {
      navigate("/ec1-nota2/CategoriasLocales_Bembos_Hamburguesas", {
      }) 
    }
    const butOnClick7 = function() {
      navigate("/ec1-nota2/CategoriasLocales_Bembos_Complementos", {
      }) 
    }
    const butOnClick8 = function() {
      navigate("/ec1-nota2/CategoriasLocales_Bembos_Bebidas", {
      }) 
    }
    const butOnClick9 = function() {
      navigate("/ec1-nota2/Soporte", {
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
                <input type="text" className="form-control border-warning" style={{color: '#f37a27s'}} placeholder="Codigo de pedido" />
                <button className="btn btn-warning text-white" onClick={ butOnClick3 }>
                  Buscar Pedido
                </button>
              </div>
            </div>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase active" aria-current="page" onClick={ butOnClick5 }>
                  Soporte
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
                <a className="nav-link mx-2 text-uppercase" onClick={ butOnClick2 }>
                  <i className="fa-solid fa-circle-user me-1" />
                  LogOut
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Hamburguesas
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" onClick={ butOnClick1 }>Todas las categorias</a></li>
          <li><a className="dropdown-item" onClick={ butOnClick6 }>Hamburguesas</a></li>
          <li><a className="dropdown-item" onClick={ butOnClick7 }>Complementos</a></li>
          <li><a className="dropdown-item" onClick={ butOnClick8 }>Bebidas</a></li>
        </ul>
      </div>

    <div className="container mt-100">
      <div className="row">
        <div className="col-md-4 col-sm-6">
          <div className="card mb-30">
            <a className="card-img-tiles" href="#" data-abc="true">
              <div className="inner">
                <div className="main-img">
                  <img src={hamburguesa} alt="Category" />
                </div>
              </div>
            </a>
            <div className="card-body text-center">
              <h4 className="card-title">Hamburquesa clasica</h4>
              <p className="text-muted">S/14.9</p>
              <a className="btn btn-outline-primary btn-sm" href="#" data-abc="true">
                Agregar al carrito
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="card mb-30">
            <a className="card-img-tiles" href="#" data-abc="true">
              <div className="inner">
                <div className="main-img">
                  <img src={hamburguesaparrila} alt="Category" />
                </div>
              </div>
            </a>
            <div className="card-body text-center">
              <h4 className="card-title">Hamburquesa parrillera</h4>
              <p className="text-muted">S/16.9</p>
              <a className="btn btn-outline-primary btn-sm" href="#" data-abc="true">
                Agregar al carrito
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="card mb-30">
            <a className="card-img-tiles" href="#" data-abc="true">
              <div className="inner">
                <div className="main-img">
                  <img src={hamburguesachuevo} alt="Category" />
                </div>
              </div>
            </a>
            <div className="card-body text-center">
              <h4 className="card-title">Hamburguesa con huevo</h4>
              <p className="text-muted">S/.20</p>
              <a className="btn btn-outline-primary btn-sm" href="#" data-abc="true">
                Agregar al carrito
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="card mb-30">
            <a className="card-img-tiles" href="#" data-abc="true">
              <div className="inner">
                <div className="main-img">
                  <img src={hamburguesafrancesa} alt="Category" />
                </div>
              </div>
            </a>
            <div className="card-body text-center">
              <h4 className="card-title">Hamburguesa francesa</h4>
              <p className="text-muted">S/16.9</p>
              <a className="btn btn-outline-primary btn-sm" href="#" data-abc="true">
                Agregar al carrito
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default CategoriasLocales_Bembos_Hamburguesas
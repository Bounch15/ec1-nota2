import React from "react";
import { useState } from "react"
import { Root } from "react-dom/client"
import { useNavigate } from "react-router-dom"
import './Styles_Categoriaslocales.css'
import bembos from './imagenes//logosrestaurantes/Bembos.png'
import chifaexpress from './imagenes//logosrestaurantes/chifa express.png'
import listo from './imagenes//logosrestaurantes/Listo.jpg'
import marianne from './imagenes//logosrestaurantes/Marianne.png'
import mrsushi from './imagenes//logosrestaurantes/MrSushi.png'
import neverafit from './imagenes/logosrestaurantes/nevera fit.png'
import starbucks from './imagenes//logosrestaurantes/Starbucks_Corporation_Logo_2011.svg.png'
import Estadopedido from "./Estadopedido";


export function CategoriasLocales(props) {

  const navigate = useNavigate()

  const butOnClick1 = function() {
    navigate("/ec1-nota2/CategoriasLocales_Bembos", {
    }) 
  }
  const butOnClick2 = function() {
    navigate("/ec1-nota2", {
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
    navigate("/ec1-nota2/Soporte", {
    }) 
  }


  const codigopedidoHttp = async function(codigopedido) {

    const response = await fetch(
        "http://localhost:8000/endpoints/codigopedido",
        {
            method : "POST",
            body : JSON.stringify(
                { 
                    codigopedido : codigopedido
                }
            )
        }
    )
    const data = await response.json()

    return data.error
}

const onCodigoPedidoOk = async function(
    codigopedido
) {
    const error = await codigopedidoHttp(codigopedido)
    if (error === "") {

        const dataCodigoPedido = {
            codigopedido : codigopedido,
        }

        const dataUsuarioJSON = JSON.stringify(dataCodigoPedido)

        sessionStorage.setItem("DATA_USUARIO", dataUsuarioJSON)

        navigate("/ec1-nota2/Estadopedido", {
            state : {
                codigopedido : codigopedido
            }
        })
    }else {
        console.error(error)
        navigate("/ec1-nota2/Estadopedido_Error", {
          state : {
              codigopedido : codigopedido
          }
        })
        
    }
}


const [codigopedido, setCodigoPedido] = useState("")

const butOnClickCodigoPedido = function(props) {
    console.log("codigopedido:", codigopedido)
    onCodigoPedidoOk(codigopedido)        
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
              <input type="text" className="form-control border-warning"  style={{color: '#f37a27s'}} placeholder="Codigo de pedido" value={ codigopedido }
                            onChange={ function(evt) { setCodigoPedido(evt.target.value) } }/>
              <button className="btn btn-warning text-white" onClick={ butOnClickCodigoPedido}>
                Buscar Pedido
              </button>
            </div>
          </div>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link mx-2 text-uppercase active" aria-current="page" onClick={ butOnClick6}>
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
  <div className="container mt-100">
    <div className="row">
      <div className="col-md-4 col-sm-6">
        <div className="card mb-30">
          <a className="card-img-tiles" href="#" data-abc="true">
            <div className="inner">
              <div className="main-img">
                <img src={bembos} alt="Category" />
              </div>
            </div>
          </a>
          <div className="card-body text-center">
            <h4 className="card-title fw-bold mb-2">Bembos</h4>
            <p className="text-muted">Hamburguesas</p>
            <a className="btn btn-outline-primary btn-sm" data-abc="true" onClick={ butOnClick1 }>
              Ver platos
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="card mb-30">
          <a className="card-img-tiles" href="#" data-abc="true">
            <div className="inner">
              <div className="main-img">
                <img src={neverafit} alt="Category" />
              </div>
            </div>
          </a>
          <div className="card-body text-center">
            <h4 className="card-title fw-bold mb-2">
              La nevera fit
            </h4>
            <p className="text-muted">Comida saludable</p>
            <a className="btn btn-outline-primary btn-sm" href="#" data-abc="true">
              Ver platos
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="card mb-30">
          <a className="card-img-tiles" href="#" data-abc="true">
            <div className="inner">
              <div className="main-img">
                <img src={mrsushi} alt="Category" />
              </div>
            </div>
          </a>
          <div className="card-body text-center">
            <h4 className="card-title fw-bold mb-2">Mr. Sushi</h4>
            <p className="text-muted">Comida fusion</p>
            <a className="btn btn-outline-primary btn-sm" href="#" data-abc="true">
              Ver platos
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="card mb-30">
          <a className="card-img-tiles" href="#" data-abc="true">
            <div className="inner">
              <div className="main-img">
                <img src={marianne} alt="Category" />
              </div>
            </div>
          </a>
          <div className="card-body text-center">
            <h4 className="card-title fw-bold mb-2">Marianne</h4>
            <p className="text-muted">Cafe-restaurant</p>
            <a className="btn btn-outline-primary btn-sm" href="#" data-abc="true">
              Ver platos
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="card mb-30">
          <a className="card-img-tiles" href="#" data-abc="true">
            <div className="inner">
              <div className="main-img">
                <img src={chifaexpress} alt="Category" />
              </div>
            </div>
          </a>
          <div className="card-body text-center">
            <h4 className="card-title fw-bold mb-2">
              Chifa Express
            </h4>
            <p className="text-muted">Comida china</p>
            <a className="btn btn-outline-primary btn-sm" href="#" data-abc="true">
              Ver platos
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="card mb-30">
          <a className="card-img-tiles" href="#" data-abc="true">
            <div className="inner">
              <div className="main-img">
                <img src={starbucks} alt="Category" />
              </div>
            </div>
          </a>
          <div className="card-body text-center">
            <h4 className="card-title fw-bold mb-2 text-uppercases">
              Starbucks
            </h4>
            <p className="text-muted">Cafe</p>
            <a className="btn btn-outline-primary btn-sm" href="#" data-abc="true">
              Ver platos
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

}

export default CategoriasLocales



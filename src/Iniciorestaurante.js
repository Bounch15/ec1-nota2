import React from "react";
import { useState } from "react"
import { Root } from "react-dom/client"
import { useNavigate } from "react-router-dom"
import './Styles_Categoriaslocales.css'



export function Iniciorestaurante(props) {

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
  const butOnClick9 = function() {
    navigate("/ec1-nota2/ListaPlato", {
    }) 
  }
  const butOnClick6 = function() {
    navigate("/g5/Soporte", {
    }) 
  }


  const codigopedidoHttp = async function(codigopedido) {

    const response = await fetch(
        "https://djangoentrega4.azurewebsites.net/endpoints/buscarcodigopedido",
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
              <a className="nav-link mx-2 text-uppercase" onClick={ butOnClick9 }>
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
</div>

}

export default Iniciorestaurante



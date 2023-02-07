import React from "react";
import { Root } from "react-dom/client"
import { useNavigate } from "react-router-dom"
import bembos from './imagenes//logosrestaurantes/Bembos.png'
import chifaexpress from './imagenes//logosrestaurantes/chifa express.png'
import listo from './imagenes//logosrestaurantes/Listo.jpg'
import marianne from './imagenes//logosrestaurantes/Marianne.png'
import mrsushi from './imagenes//logosrestaurantes/MrSushi.png'
import neverafit from './imagenes/logosrestaurantes/nevera fit.png'
import starbucks from './imagenes//logosrestaurantes/Starbucks_Corporation_Logo_2011.svg.png'

export function Soporte() {

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

  return <section className="mb-4">
  {/*Section heading*/}
  <h2 className="h1-responsive font-weight-bold text-center my-4">Soporte</h2>
  {/*Section description*/}
  <p className="text-center w-responsive mx-auto mb-5">Tiene algun problema o solicitud? Llene el formulario aquí debajo para poder ponerse en contacto con nosotros.</p>
  <div className="row">
    {/*Grid column*/}
    <div className="col-md-9 mb-md-0 mb-5">
      <form id="contact-form" name="contact-form" action="mail.php" method="POST">
        {/*Grid row*/}
        <div className="row">
          {/*Grid column*/}
          <div className="col-md-6">
            <div className="md-form mb-0">
              <input type="text" id="name" name="name" className="form-control" />
              <label htmlFor="name" className>Su nombre</label>
            </div>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-md-6">
            <div className="md-form mb-0">
              <input type="text" id="email" name="email" className="form-control" />
              <label htmlFor="email" className>Su correo</label>
            </div>
          </div>
          {/*Grid column*/}
        </div>
        {/*Grid row*/}
        {/*Grid row*/}
        <div className="row">
          <div className="col-md-12">
            <div className="md-form mb-0">
              <input type="text" id="subject" name="subject" className="form-control" />
              <label htmlFor="subject" className>Tipo de problema</label>
            </div>
          </div>
        </div>
        {/*Grid row*/}
        {/*Grid row*/}
        <div className="row">
          {/*Grid column*/}
          <div className="col-md-12">
            <div className="md-form">
              <textarea type="text" id="message" name="message" rows={2} className="form-control md-textarea" defaultValue={""} />
              <label htmlFor="message">Elabore su tipo de problema o solicitud</label>
            </div>
          </div>
        </div>
        {/*Grid row*/}
      </form>
      <div className="text-center text-md-left">
        <a className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Enviar</a>
      </div>
      <div className="status" />
    </div>
    {/*Grid column*/}
    {/*Grid column*/}
    <div className="col-md-3 text-center">
      <ul className="list-unstyled mb-0">
        <li><i className="fas fa-map-marker-alt fa-2x" />
          <p>Av. Javier Prado Este 4600, Santiago de Surco 15023</p>
        </li>
        <li><i className="fas fa-phone mt-4 fa-2x" />
          <p>+51 981905069</p>
        </li>
        <li><i className="fas fa-envelope mt-4 fa-2x" />
          <p>localesulima@ulima.edu.pe</p>
        </li>
      </ul>
    </div>
    {/*Grid column*/}
  </div>
</section>

}

export default Soporte
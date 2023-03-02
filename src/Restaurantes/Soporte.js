import React from "react";
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './Styles_Login.css';


export function Soporte(props) {


  const sopConfirmation = async (nombre, correo, tipoproblema, problema) => {
    if (nombre !== "") {
      const response = await fetch(
        `http://localhost:8000/endpoints/soporte`,
        {
            method : "POST",
            body : JSON.stringify(
                { 
                    nombre: nombre, 
                    correo : correo,
                    tipoproblema : tipoproblema,
                    problema : problema 
                }
            )
        }
      )
      const data = await response.json()
      if (data.error === ""){
        console.log("SOPORTE SOLICITADO")
      } else {
          console.error(data.error  )
      }
    } else {
      console.log("Faltan rellenar datos")
    }
    
  }

  const [nombre, setNombre] = useState("")
  const [correo, setCorreo] = useState("")
  const [tipoproblema, setTipoproblema] = useState("")
  const [problema, setProblema] = useState("")

  const butOnClick = function(props) {
      console.log("nombre:", nombre)
      console.log("correo:", correo)
      console.log("tipoproblema:", tipoproblema)
      console.log("problema:", problema) 
      sopConfirmation(nombre, correo, tipoproblema, problema)
  }

  const navigate = useNavigate()


  return <section className="mb-4" >
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
              <input type="text" id="name" name="name" className="form-control" value={ nombre }
                            onChange={ function(evt) { setNombre(evt.target.value) } }/>
              <label htmlFor="name" className>Su nombre</label>
            </div>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-md-6">
            <div className="md-form mb-0">
              <input type="text" id="email" name="email" className="form-control" value={ correo }
                            onChange={ function(evt) { setCorreo(evt.target.value) } } />
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
              <input type="text" id="subject" name="subject" className="form-control" value={ tipoproblema }
                            onChange={ function(evt) { setTipoproblema(evt.target.value) } }/>
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
              <textarea type="text" id="message" name="message" rows={2} className="form-control md-textarea" defaultValue={""} value={ problema }
                            onChange={ function(evt) { setProblema(evt.target.value) } }/>
              <label htmlFor="message">Elabore su tipo de problema o solicitud</label>
            </div>
          </div>
        </div>
        {/*Grid row*/}
      </form>
      <div className="text-center text-md-left">
        <a className="btn btn-primary" onClick={butOnClick}>Enviar</a>
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
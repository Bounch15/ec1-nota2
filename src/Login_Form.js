import { useState } from "react"
import './Styles_Login.css';

export function Login_Form_Restaurante(props){

    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")

    const butOnClick = function() {
        console.log("USuario:", usuario)
        console.log("Password:", password)
        props.onLoginOk(usuario, password)        
    }

    return (
        <section className="gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase"> LOGIN DE RESTAURANTE</h2>
                    <p className="text-white-50 mb-5">Por favor introducce tu correo y contraseña de restaurante</p>
                    <div className="form-outline form-white mb-4">
                      <input type="email" id="typeEmailX" className="form-control form-control-lg" value={ usuario }
                            onChange={ function(evt) { setUsuario(evt.target.value) } }/>
                      <label className="form-label" htmlFor="typeEmailX">Correo</label>
                    </div>
                    <div className="form-outline form-white mb-4">
                      <input type="password" id="typePasswordX" className="form-control form-control-lg" value={ password }
                            onChange={ function(evt) { setPassword(evt.target.value) } }/>
                      <label className="form-label" htmlFor="typePasswordX">Contraseña</label>
                    </div>
                    <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Olvidaste tu contraseña?</a></p>
                    <button className="btn btn-primary" role="button" onClick={ butOnClick }>Login</button>
                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg" /></a>
                      <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2" /></a>
                      <a href="#!" className="text-white"><i className="fab fa-google fa-lg" /></a>
                    </div>
                    <p className="mb-0">Para cuenta de cliente haz click <a href="#!" className="text-white-50 fw-bold">Aquí</a>
                    </p>
                    <div>
                      <p className="mb-0">No tienes una cuenta? <a href="#!" className="text-white-50 fw-bold">Registrate</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>

    );
}



export default Login_Form_Restaurante

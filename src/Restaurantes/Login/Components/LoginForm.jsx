import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../Clientes/Login/Components/LoginForm.css"

function LoginForm(props){
    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const butOnClick = function(){
        console.log("Usuario: ", usuario)
        console.log("Password: ", password)
        props.onLoginOk(usuario, password)
    }

    const butOnClick2 = function(){
        navigate("/")
    }

    return <form>
        <div className="login">
            
        <div>
                <label className="form-label">Usuario:</label>
                <input className="form-control" type="text"  
                value={ usuario }
                onChange={ function(evt) { setUsuario(evt.target.value) } }/>
        </div>
        <div>
                <label className="form-label">Contraseña:</label>
                <input className="form-control" type="password"  
                value={ password }
                onChange={ function(evt) { setPassword(evt.target.value) } }/>
        </div>
        <div className="form-group form-check">
                <input className="form-check-input" type="checkbox" id="check"/>
                <label className="form-check-label" for="check">Recordarme</label>
            </div>
        <button className="btn btn-success mt-2" type="button"
            onClick= { butOnClick }>
            Iniciar Sesión            
            </button>
        <button className="btn btn-primary" type="button"
            onClick= { butOnClick2 }>
            Iniciar Sesión con cuenta de Cliente
            </button>
        </div>        
    </form>
}

export default LoginForm
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './LoginForm';

function LoginForm(props) {
    const [username, setUsuario] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const handleLogin = async (e) => {
        e.preventDefault()
        
        const response = await fetch('/api/accounts/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username : username,
                password : password
            })
        })
        if(response.ok){
            window.location.href = '/g5/main'
        }else {
            const data = await response.json()
            setError(data.error)
        }
    }
    const navigate = useNavigate()

    const butOnClick = function(){
        console.log("Usuario: ", username)
        console.log("Password: ", password)
        props.onLoginOk(username, password)
    }

    const butOnClick2 = function(){
        navigate("/")
    }

    return <form>
        <div className="login">
            
        <div>
                <label className="form-label label-color">Usuario:</label>
                <input className="form-control" type="text"  
                value={ username }
                onChange={ function(evt) { setUsuario(evt.target.value) } }/>
        </div>
        <div>
                <label className="form-label label-color">Contraseña:</label>
                <input className="form-control" type="password"  
                value={ password }
                onChange={ function(evt) { setPassword(evt.target.value) } }/>
        </div>
        <div className="form-group form-check">
                <input className="form-check-input" type="checkbox" id="check"/>
                <label className="form-check-label check-color" for="check">Recordarme</label>
            </div>
        <button className="btn btn-success mt-2" type="button"
            onClick= { butOnClick }>
            Iniciar Sesión            
            </button>
        <button className="btn btn-primary" type="button"
            onClick= { butOnClick2 }>
            Iniciar Sesión con cuenta de Restaurante
            </button>
        </div>        
    </form>

}

export default LoginForm
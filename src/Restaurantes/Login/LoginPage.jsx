import { useNavigate} from 'react-router-dom'
import LoginForm from './Components/LoginForm'

function LoginPage(){
    const navigate = useNavigate()
    const loginHttp = async function(usuario,password){
        const response = await fetch(
            "http://localhost:8000/endpoints/loginR",
            {
                method : "POST",
                body : JSON.stringify(
                    {
                        usuario : usuario,
                        password: password
                    }
                )
            }
        )
        const data = await response.json()

        return data.error
    }
    const onLoginOk =async function(
        usuario, password
    ) {
        const error = await loginHttp(usuario,password)
            if(error ===""){
                const dataUsuario ={
                username : usuario,
                password: password
            }

            const dataUsuarioJSON = JSON.stringify(dataUsuario)
            console.log(dataUsuario)
            console.log(dataUsuarioJSON)

            sessionStorage.setItem("DATA_USUARIO", dataUsuarioJSON)


            navigate("/principal", {
                state: {
                    username: usuario
                }
            })
        }else {
            console.error(error)
        }
    }
    
        return <div className="row">
                <div className="col"></div>
                <div className="col">
                    <LoginForm
                    onLoginOk= { onLoginOk}/>
                </div>
                <div className="col"></div>
        </div>             
}

export default LoginPage
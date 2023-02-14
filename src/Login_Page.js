import { Root } from "react-dom/client"
import { useNavigate } from "react-router-dom"
import Login_Form_Restaurante from "./Login_Form"


function Login_Page() {

    const navigate = useNavigate()

    const loginHttp = async function(usuario, password) {
        // 1. Peticion HTTP POST -> /endpoints/login
        const response = await fetch(
            "http://localhost:8000/endpoints/login",
            {
                method : "POST",
                body : JSON.stringify(
                    { 
                        usuario : usuario, 
                        password : password 
                    }
                )
            }
        )
        const data = await response.json()

        return data.error
    }

    const onLoginOk = async function(
        usuario, password
    ) {
        const error = await loginHttp(usuario, password)
        if (error === "") {

            const dataUsuario = {
                username : usuario,
                password : password
            }

            const dataUsuarioJSON = JSON.stringify(dataUsuario)

            sessionStorage.setItem("DATA_USUARIO", dataUsuarioJSON)

            navigate("/ec1-nota2/CategoriasLocales", {
                state : {
                    username : usuario
                }
            })
        }else {
            console.error(error)
        }
    }

    return <Login_Form_Restaurante onLoginOk={ onLoginOk } />    

}


export default Login_Page
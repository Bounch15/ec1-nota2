import { Root } from "react-dom/client"
import Login_Restaurante from "./Login"

function Login_Form() {

    const onLoginOk = function(
        usuario, password
    ) {
        if (usuario === "pw" 
            && password === "123") {

            const dataUsuario = {
                username : usuario,
                password : password
            }
            const dataUsuarioJSON = JSON.stringify(dataUsuario)
            console.log(dataUsuario)
            console.log(dataUsuarioJSON)
            sessionStorage.setItem("DATA_USUARIO", dataUsuarioJSON)

        }
    }

    return <Login_Restaurante onLoginOk={ onLoginOk } />     

}

export default Login_Form
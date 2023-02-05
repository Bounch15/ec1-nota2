import { Root } from "react-dom/client"
import Login_Form_Restaurante from "./Login_Form"

function Login_Page() {

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

    return <Login_Form_Restaurante onLoginOk={ onLoginOk } />     

}

export default Login_Page
import { Root } from "react-dom/client"
import { useNavigate } from "react-router-dom"
import Login_Form_Restaurante from "./Login_Form"


function Login_Page() {

    const navigate = useNavigate()

    const loginConfirmation = async function(usuario, password) {
        if (usuario !== "" && password !=="") {
            const response = await fetch(
              `https://djangoentrega4.azurewebsites.net/endpoints/login`,
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
            if (data.error == ""){
              const dataUsuario = {
                userID : data.userid
              }
              navigate("/ec1-nota2/Iniciorestaurante")

      
              const dataUsuarioJSON = JSON.stringify(dataUsuario)
              sessionStorage.setItem("DATA_USUARIO", dataUsuarioJSON)
              console.log(`USUARIO LOGEADO: ${data.userid}`)
            } else {
              console.error(data.error)
            }
          }
          
        }
 
    return <Login_Form_Restaurante loginConfirmation={ loginConfirmation } />    

}


export default Login_Page
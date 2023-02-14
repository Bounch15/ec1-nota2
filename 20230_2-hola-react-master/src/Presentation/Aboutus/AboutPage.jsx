function AboutPage() {
    const dataUsuarioJSON = sessionStorage.getItem("DATA_USUARIO")
    // JSON.parse transforma de JSON (string) -> objeto JS
    const dataUsuario = JSON.parse(dataUsuarioJSON)
    return <div>About Page { dataUsuario.username }</div>
}

export default AboutPage
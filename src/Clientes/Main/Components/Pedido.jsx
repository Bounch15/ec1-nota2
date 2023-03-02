import {useState} from "react"

function Pedido(){
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [restaurante, setRestaurante] = useState("")
    const [fechaPedido, setFechaPedido] = useState("")


    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
        const response = await fetch("http://localhost:8000/endpoints/pedido/crear", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre,
                email,
                telefono,
                restaurante,
                fecha_pedido: fechaPedido,
            }),
        })
        if (response.ok){
            console.log("Pedido enviado con exito")
        }else{
            console.log("Error al enviar el pedido")
        }
    }catch (error){
        console.error("error enviar", error)
    }
}



    return <body className="bg-light">
    <div className="container">
        <div className="py-5 text-center">
            <img className="mb-4 d-block mx-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Universidad_de_Lima_logo.png" alt="Bootstrap"
                width="50" height="50"/>
            
            <h2>Pedido</h2>
            <p className="lead">Complete la información para realizar su pedido</p>
        </div>
    </div>
    <div className="container">
        <h4 className="mb-3">Nombre</h4>
        <form onSubmit={handleSubmit}>
            <div className="row g-3">
                <div className="col-sm-6">
                    <label for="firstName" className="form-label">Nombre</label>
                    <input id="firstName" type="text" className="form-control" required value={nombre} onChange={(event) => setNombre(event.target.value)}/>
                    <div className="invalid-feedback">
                        Nombre es necesario.
                    </div>
                </div>
                <div className="col-sm-6">
                    <label for="tel" className="form-label">Telefono</label>
                    <input id="tel" type="tel" className="form-control" required value={telefono} onChange={(event) => setTelefono(event.target.value)} />
                    <div className="invalid-feedback">
                        Numero telefono es necesario.
                    </div>
                </div>
            </div>
            <div className="col-md-4">
            <label for="email"
                    className="form-label">Email</label>
                    <input id="email" type="email" className="form-control" required value={email} onChange= {(event) => setEmail(event.target.value)}/>
                    <div className="invalid-feedback">
                        Email es necesario
                    </div>
                </div>
                <div className="col-md-4">
            <label for="restaurante"
                    className="form-label">Restaurante 1-8</label>
                    <input id="restaurante" type="number" className="form-control" required value={restaurante} onChange= {(event) => setRestaurante(event.target.value)}/>
                    <div className="invalid-feedback">
                        Email es necesario
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
                </div>
                </body>
        
    
        
    
}

export default Pedido
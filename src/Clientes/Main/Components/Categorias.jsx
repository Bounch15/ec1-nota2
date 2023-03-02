import { useNavigate } from "react-router-dom"

function Categorias(props){
    console.log(props.plato)
    const navigate = useNavigate()

    const butOnClick2 = function(){
        //navigate(`/platos1/${props.restaurante.id}`)
        navigate(`/platos1/${props.restaurante.id}`, {state: {restaurante: props.restaurante}})
    }
    const isRestaurantOpen = props.restaurante.abierto

    console.log("isRestaurantOpen:", isRestaurantOpen)

    let imageUrl = props.restaurante.url

    return <div className="card mb-3">
        <img src= { imageUrl }
        className="card-img-top img-fluid"
        alt="..."/>
        <div className="card-body">
        <button className="btn btn-primary" type="button"
            onClick= { butOnClick2 }><h5 className="card-title"> { props.restaurante.nombre }</h5></button> 
            <p className="card-text">Lorem Ipsum</p>
            <p className="card-text"><small className="text-muted">Lorem Ipsum </small></p>
        </div>
    </div>
}

export default Categorias

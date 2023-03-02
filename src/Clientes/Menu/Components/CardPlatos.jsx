function CardPlatos(props) {
    return (
    <div>
        <h2> {props.restaurante.nombre} </h2> 
    <div className="card mb-3">
        <img src={ props.plato.url } 
            className="card-img-top img-fluid" 
            alt="..." />
        <div className="card-body">
            <h5 className="card-title">{ props.plato.nombre }</h5>
            <p className="card-text">S/. { props.plato.precio }</p>
            <p className="card-text"><small className="text-muted">.</small></p>
        </div>
        </div>
    </div>)
}

export default CardPlatos
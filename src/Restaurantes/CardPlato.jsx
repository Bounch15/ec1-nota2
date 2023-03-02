import React from "react"
function CardPlato(props){

    return  <div className="card mb-3">
                <img src={props.plato.imagen} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.plato.nombre}</h5>
                        <p className="card-text">{props.plato.texto}</p>
                        <p className="card-foot">{props.plato.precio}</p>
                    </div>
            </div>

}
    
export default CardPlato
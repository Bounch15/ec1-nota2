import React from "react";
import Carta from './Carta';
import imagen1 from '../Imagenes/listaPedidos.jpeg'
import imagen2 from '../Imagenes/listaPlatos.jpeg'
import imagen3 from '../Imagenes/entregaPedido.jpeg'

const cartas = [
    {
        id : 1,
        titulo : "Lista de Pedidos",
        imagen : imagen1,
        texto : "Ingresa aqui para revisar la lista completa de los pedidos!!",
        url : '/pedidos'
    },
    {
        id : 2,
        titulo : "Lista de Platos",
        imagen :  imagen2,
        texto : "Ingresa aqui para revisar la lista completa de los platos registrados!!",
        url : "/platos"
    },
    {
        id : 3,
        titulo : "Registrar Entrega Pedido",
        imagen : imagen3,
        texto : "Ingresa aqui para registrar que el pedido se entrego correctamente!!",
        url :"/entrega"
    }

]
function Cartas(){
    return  (<div className="container d-flex justify-content-center align-items-center h-100">
                <div className="row">
                    {
                        cartas.map((carta) => (
                            <div className="col-md-4" key={carta.id}>
                            <Carta titulo={carta.titulo} imagen={carta.imagen} texto={carta.texto} url={carta.url}/>
                        </div>
                        ))
                    }
                </div>
            </div>
    )
}
export default Cartas
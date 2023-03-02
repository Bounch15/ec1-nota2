import React from "react"
import ListaPlatos from "./ListaPlatos"
import imagen1 from './Imagenes/cafe.png'
import imagen2 from './Imagenes/chocolate.png'
import imagen3 from './Imagenes/frapuccino.png'
import imagen4 from './Imagenes/icetea.png'
import imagen5 from './Imagenes/empanada.png'
import imagen6 from './Imagenes/galleta.png'
const listaPlatos = [
    {
        id : 1,
        categoria : "bebida caliente",
        texto : "disfruta de un delicioso cafe!",
        nombre : "Cafe",
        precio : 11,
        imagen : imagen1
    },
    {
        id : 1,
        categoria : "bebida caliente",
        texto : "disfruta de un delicioso chocolate!",
        nombre : "Chocolate",
        precio : 13,
        imagen : imagen2
    },
    {
        id : 2,
        categoria : "bebida fria",
        nombre : "Frapuccino",
        precio : 18,
        imagen : imagen3
    },
    {
        id : 2,
        categoria : "bebida fria",
        nombre : "Ice Tea",
        precio : 15,
        imagen : imagen4
    },
    {
        id : 3,
        categoria : "alimento",
        nombre : "Empanada",
        precio : 8,
        imagen : imagen5
    },
    {
        id : 3,
        categoria : "alimento",
        nombre : "Galleta",
        precio : 5,
        imagen : imagen6
    }
]
function ListaPlatosRegistrados(){
    return <div className="container">
        <label className="label-form">Categorias: </label>
        <select className="select-form">u
            <option className="option-form"></option>
            <option>Todos</option>
            <option>Bebida fria</option>
            <option>Bebida Caliente</option>
            <option>Alimento</option>
        </select>
        <ListaPlatos platos={listaPlatos}/>
        <a href="/principal" className="btn btn-outline-dark">Regresar</a>
    </div>
}
export default ListaPlatosRegistrados

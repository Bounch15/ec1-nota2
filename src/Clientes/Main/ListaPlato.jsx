import { useEffect, useState } from "react"
import { useLocation, useNavigate } from 'react-router-dom'
import Filtro from "./Components/Filtro"
import ListaRestaurantes from "./Components/ListaRestaurantes"


//pagina de categorias
// 1 es bebidas, 2 es Comida rapida, 3 es Snacks, 4 es saludable, 5 es Menu
function ListaPlato(){
    const [listaRestaurantes, setListaRestaurantes] = useState([])
    const [listaCategorias, setListaCategorias] = useState([])

    const obtenerCategoriasAsyncAwait = async function(){
        try{
            const response = await fetch(
                "http://localhost:8000/endpoints/categorias/listar")
            const data = await response.json()
            if(data.error ===""){
                setListaCategorias(data.categorias)
            }else {
                console.error(data.error)
            }
            
        }catch(error){
            console.error("Error obteniendo categorias")
        }
    }

    const filtrarRestaurante = async function (categoriaId){
        try {
            const response = await fetch(
                `http://localhost:8000/endpoints/restaurantes/listar?categoria=${ categoriaId }`
            )
            const data = await response.json()

            if (data.error === ""){
                setListaRestaurantes(data.restaurantes)
            }else {
                console.error(data.error)
            }

            
        }catch(error){
            console.error("Error de comunicacion")
        }
    }

    const location = useLocation()

    const navigate = useNavigate()

    useEffect(function(){
        if(location.state == null){
            navigate("/")
        }else{
            obtenerCategoriasAsyncAwait()
            filtrarRestaurante(-1)
        }
    }, [])

    return location.state !== null
    ?<div className="container">
        <Filtro 
            categorias={ listaCategorias }
            onFiltrar= { filtrarRestaurante }/> 
        <ListaRestaurantes
            restaurantes={ listaRestaurantes }/>
    </div>
    :<div></div>    


    
}

export default ListaPlato
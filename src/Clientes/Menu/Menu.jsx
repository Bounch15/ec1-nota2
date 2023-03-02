import { useEffect, useState } from "react"
import { useParams} from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import Filtro from "./Components/Filtro"
import ListaPlatos from "./Components/ListaPlatos"

function Menu(){
    const { id } = useParams()
    const [restaurante, setRestaurante] = useState(null)
    const [listaPlatos, setListaPlatos] = useState([])
    const [listaCategorias, setListaCategorias] = useState([])

    const butOnClick = function(){
        navigate(`/g5/pedido/`)
    }

    const obtenerCategoriasAsyncAwait = async function(){
        try{
            const response = await fetch(
                "https://djangoentrega4.azurewebsites.net/endpoints/platos/categorias"
            )
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

    const filtrarPlatos = async function (categoriaId){
        try {
            const response = await fetch(
                `http://localhost:8000/endpoints/platos/listar?categoria=${ categoriaId }&restaurante=${restaurante.id}`
            )
            const data = await response.json()

            if (data.error === ""){
                setListaPlatos(data.restaurantes)
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
            console.log({location})
            navigate("/")
        }else{
            obtenerCategoriasAsyncAwait()
            fetch(`http://localhost:8000/endpoints/platos/listar/`)
            .then(response => response.json())
            .then(data => setRestaurante(data.restaurante))
        }
    }, [])

    useEffect(() => {
        if (restaurante) {
            filtrarPlatos(-1);
        }
    }, [restaurante]);

    return restaurante !== null && listaCategorias.length > 0
    ?<div className="container">
        <Filtro 
            categorias={ listaCategorias }
            onFiltrar= { filtrarPlatos }/> 
        <ListaPlatos
            platos={ listaPlatos }/>
    </div>
    :<div>Loading ...<button type="button" onClick= { butOnClick}>P</button></div>    
    
}

export default Menu
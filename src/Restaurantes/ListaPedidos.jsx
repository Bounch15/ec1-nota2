import ListaPedidosTable from "./Components/ListaPedidosTable";
import './ListaPedido.css'
import image1 from './Imagenes/starbucks.png'
import { useLocation,useNavigate } from "react-router-dom";

const pedidos = [
    { codigo : 1,
      cliente : "Angelo",
      Pedido : "Cafe",
      Estado : "En Proceso",
      Monto : "S/13"
    },
    { codigo : 2,
      cliente : "Sebastian",
      Pedido : "Chocolate",
      Estado : "En Proceso",
      Monto : "S/12"
    },
    { codigo : 3,
      cliente : "Gabriel",
      Pedido : "Frapuccino",
      Estado : "En Proceso",
      Monto : "S/18"
    }
  ]

function ListaPedidos(){
const location = useLocation()
const navigate = useNavigate()
return <div className="general">
    
    <img src={image1} className="container d-flex justify-content-center col-md-1" />
            <div className="container">
                        {
                            pedidos.map(pedido =>(
                              <ListaPedidosTable codigo={pedido.codigo} cliente={pedido.cliente} Pedido={pedido.Pedido} Estado={pedido.Estado} Monto={pedido.Monto} />
                            ))
                            
                        }
            </div>
            <div className="botones">
              <button className="btn btn-outline-warning">Cambiar estado</button>
            </div>
            <div className="botonesb">
              <a href="/principal" className='btn btn-outline-light'>Regresar</a>
            </div>

        </div>
}
export default ListaPedidos

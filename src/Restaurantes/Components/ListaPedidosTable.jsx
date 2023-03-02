import React from "react"

function ListaPedidosTable({codigo,cliente,Pedido,Estado,Monto}){
  return <table className="table table-hover">
    <thead>
      <tr className="table-dark text-center">
        <th>Codigo</th>
        <th>Cliente</th>
        <th>Pedido</th>
        <th>Estado</th>
        <th>Monto</th>
      </tr>
    </thead>
    <tbody>
          <td className="table-light text-center">{codigo}</td>
          <td className="table-light text-center">{cliente}</td>
          <td className="table-light text-center">{Pedido}</td>
          <td className="table-light text-center">{Estado}</td>
          <td className="table-light text-center">{Monto}</td>
    </tbody>
  </table>


    
}
export default ListaPedidosTable
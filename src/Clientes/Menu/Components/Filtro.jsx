import React from 'react';

function Filtro(props) {
  console.log("Filtro categories:", props.categorias);
  return <div className="mt-4 mb-4">
    <label className="form-label">Categoría</label>
    <select className="form-select"
    onChange={ function(evt) {
      props.onFiltrar(evt.target.value)
    }}>
    <option value={ -1}>Todas</option>
    {
      Array.isArray(props.categorias) ? props.categorias.map(function(cat){
        console.log(cat); // log the category object
        return <option value={ cat.id}>{ cat.nombre }</option>;
      }) : null
      
      }
  </select>
</div>
}

export default Filtro;
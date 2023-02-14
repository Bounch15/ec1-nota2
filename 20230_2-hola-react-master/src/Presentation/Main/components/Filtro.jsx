function Filtro(props) {
    return <div className="mt-4 mb-4">
        <label className="form-label">Categoría</label>
        <select className="form-select"
            onChange={ function(evt) { 
                props.onFiltrar(evt.target.value)
            }}>
            <option value={-1}>Todas</option>
            {
                props.categorias.map(function(cat){
                    return <option value={ cat.id }>
                        { cat.nombre }
                    </option>
                })
            }
        </select>
    </div>
}

export default Filtro
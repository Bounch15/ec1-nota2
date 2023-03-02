import Categorias from "./Categorias"

function ListaRestaurantes(props){
    const listaRows = []
    let listaCols = []

    props.restaurantes.forEach(function(restaurante, index){
        if(index % 2 === 0){
            listaCols.push(
                <div className="col-md-6">
                    <Categorias key= { restaurante.id } restaurante={ restaurante }/>
                </div>
            )
        }else{
            listaCols.push(
                <div className="col-md-6">
                    <Categorias key= { restaurante.id } restaurante={ restaurante }/>
                </div>
            )
            listaRows.push(
                <div className="row">
                    { listaCols }
                </div>
            )
            listaCols = []
        }
    })

    if (props.restaurantes.length % 2 !== 0){
        listaCols = []
        listaCols.push(
            <div className="col-md-6">
                <Categorias key={ props.restaurantes[props.restaurantes.length - 1].id }
                    restaurante={ props.restaurantes[props.restaurantes.length - 1] }/>
            </div>
        )
        listaRows.push(
            <div className="row">
                { listaCols }
            </div>
        )
    }
return <div>
    {
        listaRows
    }
</div>
}
export default ListaRestaurantes

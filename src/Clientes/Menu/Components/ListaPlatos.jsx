import CardPlatos from "./CardPlatos"


function ListaPlatos(props){
    const listaRows = []
    let listaCols = []

    props.platos.forEach(function(plato, index){
        if(index % 2 === 0){
            listaCols.push(
                <div className="col-md-6">
                    <CardPlatos key= { plato.id } plato={ plato }/>
                </div>
            )
        }else{
            listaCols.push(
                <div className="col-md-6">
                    <CardPlatos key= { plato.id } restaurante={ plato }/>
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
                <CardPlatos key={ props.platos[props.platos.length - 1].id }
                    restaurante={ props.platos[props.platos.length - 1] }/>
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
export default ListaPlatos
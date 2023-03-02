import React from 'react'
function carta({titulo,imagen,texto,url}){
    return <div className="card text-center bg-dark">
        <img src={imagen} alt="" />
        <div className="card-body text-light">
            <h4 className="card-title">{titulo}</h4>
            <p className="card-text text-light">{texto}</p>
            <a href={url} className="btn btn-outline-secondary">Ingresar!</a> 
        </div>
        
    </div>

}

export default carta
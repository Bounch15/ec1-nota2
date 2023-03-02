import imagen1 from "../../Imagenes/platos/Molten_frapp_v1.png";
import imagen2 from "../../Imagenes/platos/quesotocino.png";
import imagen3 from "../../Imagenes/platos/Makis.png";
import imagen4 from "../../Imagenes/platos/arroz chaufa.png";
import imagen5 from "../../Imagenes/platos/postre.png";
import imagen6 from "../../Imagenes/platos/doritos.png";
import imagen7 from "../../Imagenes/platos/lomo-saltado.png";
import "./Plato.css";
import { useNavigate } from "react-router-dom";

function Plato(){
    const navigate = useNavigate()

    const butOnClick2 = function(){
        navigate('/carrito')
    }

    return <section className="container">
        <button className="btn btn-dark" onClick= { butOnClick2 }> Carrito </button>
          <div className="item">
              <img width= "300px" height="186px" src={ imagen1 }/>
              <p margin="5px">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <h6>$345.89</h6>
              <span></span>
              <button>Añadir al carrito</button>
          </div>
          <div className="item">
              <img width= "300px" height="186px" src={ imagen2 }/>
              <p margin="5px">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <h6>$345.89</h6>
              <span></span>
              <button>Añadir al carrito</button>
          </div>
          <div className="item">
              <img width= "300px" height="186px" src={ imagen3 }/>
              <p margin="5px">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <h6>$345.89</h6>
              <span></span>
              <button>Añadir al carrito</button>
          </div>
          <div className="item">
              <img width= "300px" height="186px" src={ imagen4 }/>
              <p margin="5px">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <h6>$345.89</h6>
              <span></span>
              <button>Añadir al carrito</button>
          </div> 
          <div className="item">
            <img width= "300px" height="186px" src={ imagen5 }/>
            <p margin="5px">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <h6>$345.89</h6>
            <span></span>
            <button>Añadir al carrito</button>
        </div>
        <div className="item">
            <img width= "300px" height="186px" src={ imagen6 }/>
            <p margin="5px">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            <h6>$345.89</h6>
            <span></span>
            <button>Añadir al carrito</button>
        </div>
        <div className="item">
            <img width= "300px" height="186px" src={ imagen7 }/>
            <p margin="5px">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            <h6>$345.89</h6>
            <span></span>
            <button>Añadir al carrito</button>
        </div>
        
      </section>
}

export default Plato
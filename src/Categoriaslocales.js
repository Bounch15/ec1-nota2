import './Styles_Categoriaslocales.css'
import bembos from './imagenes//logosrestaurantes/Bembos.png'
import chifaexpress from './imagenes//logosrestaurantes/chifa express.png'
import listo from './imagenes//logosrestaurantes/Listo.jpg'
import marianne from './imagenes//logosrestaurantes/Marianne.png'
import mrsushi from './imagenes//logosrestaurantes/MrSushi.png'
import neverafit from './imagenes/logosrestaurantes/nevera fit.png'
import starbucks from './imagenes//logosrestaurantes/Starbucks_Corporation_Logo_2011.svg.png'




export function CategoriasLocales() {
  return <div className="container mt-100">                                                    
    <div className="row">
      <div className="col-md-4 col-sm-6">
        <div className="card mb-30"><a className="card-img-tiles" href="#" data-abc="true">
            <div className="inner">
              <div className="main-img"><img src={bembos} alt="Category" /></div>
            </div></a>
          <div className="card-body text-center">
            <h4 className="card-title fw-bold mb-2">Bembos</h4>
            <p className="text-muted " >Hamburguesas</p><a className="btn btn-outline-primary btn-sm" href="/Bembos.html" data-abc="true">Ver platos</a>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="card mb-30"><a className="card-img-tiles" href="#" data-abc="true">
            <div className="inner">
              <div className="main-img"><img src={neverafit} alt="Category" /></div>
            </div></a>
          <div className="card-body text-center">
            <h4 className="card-title fw-bold mb-2">La nevera fit</h4>
            <p className="text-muted">Comida saludable</p><a className="btn btn-outline-primary btn-sm" href="#" data-abc="true">Ver platos</a>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="card mb-30"><a className="card-img-tiles" href="#" data-abc="true">
            <div className="inner">
              <div className="main-img"><img src={mrsushi} alt="Category" /></div>
            </div></a>
          <div className="card-body text-center">
            <h4 className="card-title fw-bold mb-2">Mr. SUSHI</h4>
            <p className="text-muted">Comida fusion</p><a className="btn btn-outline-primary btn-sm" href="#" data-abc="true">Ver platos</a>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="card mb-30"><a className="card-img-tiles" href="#" data-abc="true">
            <div className="inner">
              <div className="main-img"><img src={marianne} alt="Category" /></div>
            </div></a>
          <div className="card-body text-center">
            <h4 className="card-title fw-bold mb-2">Marianne</h4>
            <p className="text-muted">Cafe-restaurant</p><a className="btn btn-outline-primary btn-sm" href="#" data-abc="true">Ver platos</a>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="card mb-30"><a className="card-img-tiles" href="#" data-abc="true">
            <div className="inner">
              <div className="main-img"><img src={chifaexpress} alt="Category" /></div>
            </div></a>
          <div className="card-body text-center">
            <h4 className="card-title fw-bold mb-2">Chifa Express</h4>
            <p className="text-muted">Comida china</p><a className="btn btn-outline-primary btn-sm" href="#" data-abc="true">Ver platos</a>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="card mb-30"><a className="card-img-tiles" href="#" data-abc="true">
            <div className="inner">
              <div className="main-img"><img src={starbucks} alt="Category" /></div>
            </div></a>
          <div className="card-body text-center">
            <h4 className="card-title fw-bold mb-2 text-uppercases">Starbucks</h4>
            <p className="text-muted">Cafe</p><a className="btn btn-outline-primary btn-sm" href="#" data-abc="true">Ver platos</a>
          </div>
        </div>
      </div>
    </div>
  </div>

}

export default CategoriasLocales
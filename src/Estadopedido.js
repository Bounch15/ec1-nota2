import './Styles_Estadopedido.css';
export function Estadopedido(){

    return <div>

    <section className="h-100 h-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-8 col-xl-6">
            <div className="card border-top border-bottom border-3" style={{borderColor: '#f37a27 !important'}}>
              <div className="card-body p-5">
                <p className="lead fw-bold mb-5" style={{color: '#f37a27'}}>Estado de pedido</p>
                <div className="row">
                  <div className="col mb-3">
                    <p className="small text-muted mb-1">Fecha</p>
                    <p>10 Abril 2021</p>
                  </div>
                  <div className="col mb-3">
                    <p className="small text-muted mb-1">Orden Cdg.</p>
                    <p>012j1gvs356c</p>
                  </div>
                </div>
                <div className="mx-n5 px-5 py-4" style={{backgroundColor: '#f2f2f2'}}>
                  <div className="row">
                    <div className="col-md-8 col-lg-9">
                      <p>Hamburgesa cheese c papas fritas</p>
                    </div>
                    <div className="col-md-4 col-lg-3">
                      <p>S/.29</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-8 col-lg-9">
                      <p className="mb-0">Costo de envío</p>
                    </div>
                    <div className="col-md-4 col-lg-3">
                      <p className="mb-0">S/.5</p>
                    </div>
                  </div>
                </div>
                <div className="row my-4">
                  <div className="col-md-4 offset-md-8 col-lg-3 offset-lg-9">
                    <p className="lead fw-bold mb-0" style={{color: '#f37a27'}}>S/.34</p>
                  </div>
                </div>
                <p className="lead fw-bold mb-4 pb-2" style={{color: '#f37a27'}}>Estado de pedido</p>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="horizontal-timeline">
                      <ul className="list-inline items d-flex justify-content-between">
                        <li className="list-inline-item items-list">
                          <p className="py-1 px-2 rounded text-white" style={{backgroundColor: '#f37a27'}}>Recibido</p>
                        </li>
                        <li className="list-inline-item items-list">
                          <p className="py-1 px-2 rounded text-white" style={{backgroundColor: '#f37a27'}}>Con el repartidor</p>
                        </li>
                        <li className="list-inline-item items-list">
                          <p className="py-1 px-2 rounded text-white" style={{backgroundColor: '#f37a27'}}>En camino
                          </p>
                        </li>
                        <li className="list-inline-item items-list text-end" style={{marginRight: '8px'}}>
                          <p style={{marginRight: '-8px'}}>Entregado</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="mt-4 pt-2 mb-0">Necesitas ayuda? <a href="#!" style={{color: '#f37a27'}}>Contactanos</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

}

export default Estadopedido
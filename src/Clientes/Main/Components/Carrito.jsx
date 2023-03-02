import "./Carrito.css"
function Carrito(){
    return <section className="h-100 h-custom" style={{background_color: "#cd853f"}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">
      
                  <div className="row">
      
                    <div className="col-lg-7">
                      <h5 className="mb-3"><i
                            className="fas fa-long-arrow-alt-left me-2"></i>Continuar comprando</h5>
                      <hr></hr>
      
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1">Carrito</p>
                          <p className="mb-0">Tienes estos items en tu carrito</p>
                        </div>
                        <div>
                          <p className="mb-0"><span className="text-muted">Ordenar por:</span> <a href="#!"
                              className="text-body">precio <i className="fas fa-angle-down mt-1"></i></a></p>
                        </div>
                      </div>
      
                      <div className="card mb-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src="/logos restaurantes/Bembos.png"
                                  className="img-fluid rounded-3" alt="Shopping item" style={{width: "160px"}}/>
                              </div>
                              <div className="ms-3">
                                <h5>Hamburgesa cheese</h5>
                                <p className="small mb-0">Grande c papas</p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div style={{width: "50px"}}>
                                <h5 className="fw-normal mb-0">1</h5>
                              </div>
                              <div style={{width: "80px"}}>
                                <h5 className="mb-0">S./29</h5>
                              </div>
                              <a href="#!" style={{color: "#cecece"}}><i className="fas fa-trash-alt"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
      
                      <div className="card mb-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src="logos restaurantes/chifa express.png"
                                  className="img-fluid rounded-3" alt="Shopping item" style={{width: "65px"}}/>
                              </div>
                              <div className="ms-3">
                                <h5>Chaufa de pollo </h5>
                                <p className="small mb-0">Meadiano con gaseosa</p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div style={{width: "50px"}}>
                                <h5 className="fw-normal mb-0">1</h5>
                              </div>
                              <div style={{width: "80px"}}>
                                <h5 className="mb-0">S./24</h5>
                              </div>
                              <a href="#!" style={{color: "#cecece"}}><i className="fas fa-trash-alt"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
      
                      <div className="card mb-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src="logos restaurantes/Listo.jpg"
                                  className="img-fluid rounded-3" alt="Shopping item" style={{width: "65px"}}/>
                              </div>
                              <div className="ms-3">
                                <h5>Gaseosa Inka Cola</h5>
                                <p className="small mb-0">750ml</p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div style={{width: "50px"}}>
                                <h5 className="fw-normal mb-0">1</h5>
                              </div>
                              <div style={{width: "80px"}}>
                                <h5 className="mb-0">S./3</h5>
                              </div>
                              <a href="#!" style={{color: "#cecece"}}><i className="fas fa-trash-alt"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
      
                      <div className="card mb-3 mb-lg-0">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src="logos restaurantes/nevera fit.png"
                                  className="img-fluid rounded-3" alt="Shopping item" style={{width: "65px"}}/>
                              </div>
                              <div className="ms-3">
                                <h5>Tres leches</h5>
                                <p className="small mb-0">Tamaño standard</p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div style={{width: "50px"}}>
                                <h5 className="fw-normal mb-0">1</h5>
                              </div>
                              <div style={{width: "80px"}}>
                                <h5 className="mb-0">S./12</h5>
                              </div>
                              <a href="#!" style={{color: "#cecece"}}><i className="fas fa-trash-alt"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
      
                    </div>
                    <div className="col-lg-5">
      
                      <div className="card bg-primary text-white rounded-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <h5 className="mb-0">Detalles de tarjeta</h5>
 
                          </div>
      
                          <p className="small mb-2">Tipo de tarjeta</p>
                          <a href="#!" type="submit" className="text-white"><i
                              className="fab fa-cc-mastercard fa-2x me-2"></i></a>
                          <a href="#!" type="submit" className="text-white"><i
                              className="fab fa-cc-visa fa-2x me-2"></i></a>
                          <a href="#!" type="submit" className="text-white"><i
                              className="fab fa-cc-amex fa-2x me-2"></i></a>
                          <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-paypal fa-2x"></i></a>
      
                          <form className="mt-4">
                            <div className="form-outline form-white mb-4">
                              <input type="text" id="typeName" className="form-control form-control-lg" siez="17"
                                placeholder="Cardholder's Name" />
                              <label className="form-label" >Cardholder's Name</label>
                            </div>
      
                            <div className="form-outline form-white mb-4">
                              <input type="text" id="typeText" className="form-control form-control-lg" siez="17"
                                placeholder="1234 5678 9012 3457" minLength="19" maxLength="19" />
                              <label className="form-label" >Card Number</label>
                            </div>
      
                            <div className="row mb-4">
                              <div className="col-md-6">
                                <div className="form-outline form-white">
                                  <input type="text" id="typeExp" className="form-control form-control-lg"
                                    placeholder="MM/YYYY" size="7"  minLength="7" maxLength="7" />
                                  <label className="form-label" >Expiration</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-outline form-white">
                                  <input type="password"  className="form-control form-control-lg"
                                    placeholder="&#9679;&#9679;&#9679;" size="1" minLength="3" maxLength="3" />
                                  <label className="form-label" >Cvv</label>
                                </div>
                              </div>
                            </div>
      
                          </form>
      
                          <hr className="my-4"></hr>
      
                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Subtotal</p>
                            <p className="mb-2">S./62</p>
                          </div>
      
                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Shipping</p>
                            <p className="mb-2">S./6</p>
                          </div>
      
                          <div className="d-flex justify-content-between mb-4">
                            <p className="mb-2">Total(Incl. taxes)</p>
                            <p className="mb-2">S./68</p>
                          </div>
      
                          <a href="g5/pedido"><button type="button" className="btn btn-info btn-block btn-lg">
                            <div className="d-flex justify-content-between">
                              <span>S/.68</span>
                              <span>Checkout <i className="fas fa-long-arrow-alt-right ms-2"></i></span>
                            </div>
                          </button></a>
      
                        </div>
                      </div>
      
                    </div>
      
                  </div>
      
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
}

export default Carrito
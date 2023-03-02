import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import './Styles_Estadopedido.css';






const RestaurantCard = ({ data }) => (

  <div>
    <div>
      <div className="superNav border-bottom py-2 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 centerOnMobile">
              <select className="me-3 border-0 bg-light">
                <option value="en-us">EN-US</option>
              </select>
              <span className="d-none d-lg-inline-block d-md-inline-block d-sm-inline-block d-xs-none me-3">
                <strong>soporte@aloe.ulima.ed</strong>
              </span>
              <span className="me-3">
                <i className="fa-solid fa-phone me-1 text-warning" />
                <strong>+51-980905072</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-white sticky-top navbar-light p-3 shadow-sm">
        <div className="container">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Universidad_de_Lima_logo.png" alt="Bootstrap" width={50} height={50} />
          <a className="navbar-brand" href="#">
            <i className="fa-solid fa-shop me-2" />
            <strong>Locales UL</strong>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
            <div className="input-group">
              <span className="border-warning input-group-text bg-warning text-white">
                <i className="fa-solid fa-magnifying-glass" />
              </span>
              <input type="text" className="form-control border-warning" style={{color: '#f37a27'}} />
              <button className="btn btn-warning text-white">
                Search
              </button>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div className="ms-auto d-none d-lg-block">
              <div className="input-group">
                <span className="border-warning input-group-text bg-warning text-white">
                  <i className="fa-solid fa-magnifying-glass" />
                </span>
                <input type="text" className="form-control border-warning" style={{color: '#f37a27s'}} placeholder="Codigo de pedido" />
                <button className="btn btn-warning text-white" >
                  Buscar Pedido
                </button>
              </div>
            </div>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase active" aria-current="page" >
                  Soporte
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" >
                  Locales
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" >
                  <i className="fa-solid fa-cart-shopping me-1" />
                  Carrito
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" >
                  <i className="fa-solid fa-circle-user me-1" />
                  LogOut
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div>
      <section className="h-100 h-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
              <div className="card border-top border-bottom border-3" style={{borderColor: '#f37a27 !important'}}>
                <div className="card-body p-5">
                  <p className="lead fw-bold mb-5" style={{color: '#f37a27'}}>
                    Estado de pedido
                  </p>
                  <div className="row">
                    <div className="col mb-3">
                      <p className="small text-mutsed mb-1">Fecha</p>
                      <p>29 Feb 2023</p>
                    </div>
                    <div className="col mb-3">
                      <p className="small text-muted mb-1">
                        Orden Cdg.
                      </p>
                      <p>{data.codigopedido}</p>
                    </div>
                  </div>
                  <div className="mx-n5 px-5 py-4" style={{backgroundColor: '#f2f2f2'}}>
                    <div className="row">
                      <div className="col-md-8 col-lg-9">
                        <p>{data.plato}</p>
                      </div>
                      <div className="col-md-4 col-lg-3">
                        <p> S/.{data.valor}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-8 col-lg-9">
                        <p className="mb-0 ">COSTO DE ENVIO GRATIS</p>
                      </div>
                    </div>
                  </div>
                  <div className="row my-4">
                    <div className="col-md-4 offset-md-8 col-lg-3 offset-lg-9">
                      <p className="lead fw-bold mb-0" style={{color: '#f37a27'}}>
                        S/.{data.valor}
                      </p>
                    </div>
                  </div>
                  <p className="lead fw-bold mb-4 pb-2 text-center" style={{color: '#f37a27'}}>
                    Estado de pedido
                  </p>
                  <div className="row">
                    <div className="col-lg-12 align-self-center">
                      <div className="horizontal-timeline">
                        <ul className="list-inline items d-flex justify-content-center">
                          <li className="list-inline-item items-list">
                            <p className="py-1 px-2 rounded text-white " style={{backgroundColor: '#f37a27'}}>
                              {data.estado}
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 pt-2 mb-0">
                    Necesitas ayuda?
                    <a href="#!" style={{color: '#f37a27'}}>
                      Contactanos
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>  
);

const Estadopedido = () => {


  
  

  const [pedidoDatos, setPedidoDatos] = useState({});

  useEffect(() => {
    const getData = async () => {
      const rawResponse = await fetch("https://djangoentrega4.azurewebsites.net/endpoints/codigopedido");
      await rawResponse.json().then((data) => {
        setPedidoDatos(data);
        console.log(data);
      });
    };

    getData();
  }, []);


  return (
    <div>

      <div className="catalogo">
        {pedidoDatos.codigopedido == null ? (
          <div>No hay ofertas.</div>
        ) : (
          pedidoDatos.codigopedido.map((pedido) => {
            return <RestaurantCard data={pedido} />;
            return <div>{pedido.nombre}</div>;
          })
        )}
      </div>

      <br/>
    </div>
  );
}

export default Estadopedido;


// export function Estadopedido(props){

//   const params = useParams()

//   const [listaPedidos, setListaPedidos] = useState([])

//   const navigate = useNavigate()

//   const butOnClick1 = function() {
//     navigate("/ec1-nota2/CategoriasLocales_Bembos", {
//     }) 
//   }
//   const butOnClick2 = function() {
//     navigate("/ec1-nota2", {
//     }) 
//   }
//   const butOnClick3 = function() {
//     navigate("/ec1-nota2/Estadopedido", {
//     }) 
//   }
//   const butOnClick4 = function() {
//     navigate("/ec1-nota2/Carrito", {
//     }) 
//   }
//   const butOnClick5 = function() {
//     navigate("/ec1-nota2/CategoriasLocales", {
//     }) 
//   }
//   const butOnClick6 = function() {
//     navigate("/ec1-nota2/Soporte", {
//     }) 
//   }


//   const obtenerPedido = async (plato, valor, cogido) => {
//     try {
//         const response = await fetch(`http://localhost:8000/endpoints/codigopedido`)
//         const data = await response.json()
//         setListaPedidos(data.pedidos)
//         console.log(data.pedidos)
//     }catch(error) {
//         console.error("Error obteniendo pedidos")
//     }
//   }

//   useEffect(() => {

//     obtenerPedido(params.resId)
// }, )



//     return <div>
//     <div>
//       <div className="superNav border-bottom py-2 bg-light">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 centerOnMobile">
//               <select className="me-3 border-0 bg-light">
//                 <option value="en-us">EN-US</option>
//               </select>
//               <span className="d-none d-lg-inline-block d-md-inline-block d-sm-inline-block d-xs-none me-3">
//                 <strong>soporte@aloe.ulima.ed</strong>
//               </span>
//               <span className="me-3">
//                 <i className="fa-solid fa-phone me-1 text-warning" />
//                 <strong>+51-980905072</strong>
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <nav className="navbar navbar-expand-lg bg-white sticky-top navbar-light p-3 shadow-sm">
//         <div className="container">
//           <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Universidad_de_Lima_logo.png" alt="Bootstrap" width={50} height={50} />
//           <a className="navbar-brand" href="#">
//             <i className="fa-solid fa-shop me-2" />
//             <strong>Locales UL</strong>
//           </a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon" />
//           </button>
//           <div className="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
//             <div className="input-group">
//               <span className="border-warning input-group-text bg-warning text-white">
//                 <i className="fa-solid fa-magnifying-glass" />
//               </span>
//               <input type="text" className="form-control border-warning" style={{color: '#f37a27'}} />
//               <button className="btn btn-warning text-white">
//                 Search
//               </button>
//             </div>
//           </div>
//           <div className="collapse navbar-collapse" id="navbarNavDropdown">
//             <div className="ms-auto d-none d-lg-block">
//               <div className="input-group">
//                 <span className="border-warning input-group-text bg-warning text-white">
//                   <i className="fa-solid fa-magnifying-glass" />
//                 </span>
//                 <input type="text" className="form-control border-warning" style={{color: '#f37a27s'}} placeholder="Codigo de pedido" />
//                 <button className="btn btn-warning text-white" onClick={ butOnClick3 }>
//                   Buscar Pedido
//                 </button>
//               </div>
//             </div>
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <a className="nav-link mx-2 text-uppercase active" aria-current="page" onClick={ butOnClick5 }>
//                   Soporte
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link mx-2 text-uppercase" onClick={ butOnClick5 }>
//                   Locales
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link mx-2 text-uppercase" onClick={ butOnClick4 }>
//                   <i className="fa-solid fa-cart-shopping me-1" />
//                   Carrito
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link mx-2 text-uppercase" onClick={ butOnClick2 }>
//                   <i className="fa-solid fa-circle-user me-1" />
//                   LogOut
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//     <div>
//       <section className="h-100 h-custom">
//         <div className="container py-5 h-100">
//           <div className="row d-flex justify-content-center align-items-center h-100">
//             <div className="col-lg-8 col-xl-6">
//               <div className="card border-top border-bottom border-3" style={{borderColor: '#f37a27 !important'}}>
//                 <div className="card-body p-5">
//                   <p className="lead fw-bold mb-5" style={{color: '#f37a27'}}>
//                     Estado de pedido
//                   </p>
//                   <div className="row">
//                     <div className="col mb-3">
//                       <p className="small text-muted mb-1">Fecha</p>
//                       <p>10 Abril 2021</p>
//                     </div>
//                     <div className="col mb-3">
//                       <p className="small text-muted mb-1">
//                         Orden Cdg.
//                       </p>
//                       <p>{codigopedido}</p>
//                     </div>
//                   </div>
//                   <div className="mx-n5 px-5 py-4" style={{backgroundColor: '#f2f2f2'}}>
//                     <div className="row">
//                       <div className="col-md-8 col-lg-9">
//                         <p>Hamburgesa cheese c papas fritas</p>
//                       </div>
//                       <div className="col-md-4 col-lg-3">
//                         <p>S/.29</p>
//                       </div>
//                     </div>
//                     <div className="row">
//                       <div className="col-md-8 col-lg-9">
//                         <p className="mb-0">Costo de envío</p>
//                       </div>
//                       <div className="col-md-4 col-lg-3">
//                         <p className="mb-0">S/.5</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="row my-4">
//                     <div className="col-md-4 offset-md-8 col-lg-3 offset-lg-9">
//                       <p className="lead fw-bold mb-0" style={{color: '#f37a27'}}>
//                         S/.34
//                       </p>
//                     </div>
//                   </div>
//                   <p className="lead fw-bold mb-4 pb-2" style={{color: '#f37a27'}}>
//                     Estado de pedido
//                   </p>
//                   <div className="row">
//                     <div className="col-lg-12">
//                       <div className="horizontal-timeline">
//                         <ul className="list-inline items d-flex justify-content-between">
//                           <li className="list-inline-item items-list">
//                             <p className="py-1 px-2 rounded text-white" style={{backgroundColor: '#f37a27'}}>
//                               Recibido
//                             </p>
//                           </li>
//                           <li className="list-inline-item items-list">
//                             <p style={{marginRight: '-8px'}}>
//                               Con el repartidor
//                             </p>
//                           </li>
//                           <li className="list-inline-item items-list">
//                             <p style={{marginRight: '-8px'}}>
//                               En camino
//                             </p>
//                           </li>
//                           <li className="list-inline-item items-list text-end" style={{marginRight: '8px'}}>
//                             <p style={{marginRight: '-8px'}}>
//                               Entregado
//                             </p>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                   <p className="mt-4 pt-2 mb-0">
//                     Necesitas ayuda?
//                     <a href="#!" style={{color: '#f37a27'}}>
//                       Contactanos
//                     </a>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   </div>

// }

// export default Estadopedido
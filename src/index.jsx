import { findAllByTestId } from '@testing-library/react'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Estadopedido from "./Estadopedido";
import Estadopedido_Error from "./Estadopedido_Error";
import Iniciorestaurante from "./Iniciorestaurante";
import Login_Page from './Restaurantes/Login_Page';
import Soporte from './Restaurantes/Soporte';
import LoginPage from './Clientes/Login/LoginPage';
import MainPage from './Clientes/Main/MainPage';
import ListaPlato from './Clientes/Main/ListaPlato';
import Platos from './Clientes/Main/MainPage';
import LoginPageR from './Restaurantes/Login/LoginPage';
import ListaPedidos from './Restaurantes/ListaPedidos';
import EntregaPedido from './Restaurantes/EntregaPedido';
import Pedido from './Clientes/Main/Components/Pedido';
import Carrito from './Clientes/Main/Components/Carrito';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/ec1-nota2' element={ <Login_Page/> }/>
        <Route path='/g5/Login' element={ <LoginPage/> }/>
        <Route path='/ec1-nota2/Iniciorestaurante' element={ <Iniciorestaurante/> } />
        <Route path='/ec1-nota2/Estadopedido' element={ <Estadopedido/> } />
        <Route path='/ec1-nota2/Carrito' element={ <Carrito/> } />
        <Route path='/ec1-nota2/ListaPlato' element={ <ListaPlato/> } />
        <Route path='/ec1-nota2/Estadopedido_Error' element={ <Estadopedido_Error/> } />        
        <Route path='/g5/Restaurantes' element={ <Login_Page/> }/>
        <Route path='/g5/Soporte' element={ <Soporte/> }/>
        <Route path='/g5/Platos' element={ <Platos/> }/>
        <Route path='/g5/main' element={ <MainPage/> }/>
        <Route path='g5/R' element={ <LoginPageR/> }/>
        <Route path='g5/pedido' element = { <Pedido/>}/>
        <Route path='/pedidos' element={<ListaPedidos/>}/>
        <Route path='/estado' element={<ListaPedidos/>}/>
        <Route path='/entrega' element={<EntregaPedido/>}/>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
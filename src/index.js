import { findAllByTestId } from '@testing-library/react'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Greeting,UserCard} from "./Greeting";
import Login_Page from "./Login_Page";
import Navbar_Restaurante from "./Navbar";
import Estadopedido from "./Estadopedido";
import Carrito from "./Carrito";
import CategoriasLocales from "./CategoriasLocales";
import { NavbarBrand } from 'react-bootstrap';
import CategoriasLocales_Bembos from './CategoriasLocales_Bembos';
import CategoriasLocales_Bembos_Hamburguesas from './CategoriasLocales_Bembos_Hamburguesas';
import CategoriasLocales_Bembos_Complementos from './CategoriasLocales_Bembos_Complementos';
import CategoriasLocales_Bembos_Bebidas from './CategoriasLocales_Bembos_Bebidas';


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/ec1-nota2/' element={ <Login_Page/> } />
        <Route path='/ec1-nota2/CategoriaLocales' element={ <CategoriasLocales/> } />
        <Route path='/ec1-nota2/CategoriasLocales_Bembos' element={ <CategoriasLocales_Bembos/> } />
        <Route path='/ec1-nota2/CategoriasLocales_Bembos_Hamburguesas' element={ <CategoriasLocales_Bembos_Hamburguesas/> } />
        <Route path='/ec1-nota2/CategoriasLocales_Bembos_Complementos' element={ <CategoriasLocales_Bembos_Complementos/> } />
        <Route path='/ec1-nota2/CategoriasLocales_Bembos_Bebidas' element={ <CategoriasLocales_Bembos_Bebidas/> } />
        <Route path='/ec1-nota2/Estadopedido' element={ <Estadopedido/> } />
        <Route path='/ec1-nota2/Carrito' element={ <Carrito/> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

//<><Carrito/></>
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
import CategoriasLocales_Bembos from './Categorialocales_Bembos';


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/ec1-nota2/' element={ <Login_Page/> } />
        <Route path='/ec1-nota2/CategoriaLocales' element={ <CategoriasLocales/> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
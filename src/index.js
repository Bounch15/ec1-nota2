import { findAllByTestId } from '@testing-library/react'
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Greeting,UserCard} from "./Greeting";
import Login_Page from "./Login_Page";
import Navbar_Restaurante from "./Navbar";
import Estadopedido from "./Estadopedido";
import Carrito from "./Carrito";
import {Saludar} from "./Categorias"
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <>
    
    <Carrito/>
</>);
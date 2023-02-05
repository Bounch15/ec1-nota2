import { findAllByTestId } from '@testing-library/react'
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Greeting,UserCard} from "./Greeting";
import Login_Form from "./Login_Form";
import Navbar_Restaurante from "./Navbar";
import {Saludar} from "./Categorias"
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<>
    <Login_Form/>
</>);
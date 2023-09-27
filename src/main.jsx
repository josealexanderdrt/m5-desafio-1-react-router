import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
     </BrowserRouter>
  </React.StrictMode>
);
{/* 


OJo en App, es la manera de decirle al proyecto que trabajara con router, es por eso que App debe estar entre BrowserRouter 

import "bootstrap/dist/css/bootstrap.min.css"; se puede importar en main.jsx o app.jsx no importa.

 BrowserRouter es el componente encargado de mantener actualizado eñ Interfaz de Usuario  en funcion de la URL. Todos los componentes se agregan dentro del BrowserRouter.

*/}
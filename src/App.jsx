import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Contacto from "./views/Contacto";
import NotFound from "./views/NotFound";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/contacto" element={<Contacto />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;


{/* 
NOTAS EN TUTORIA
Laa carpeta components  va fuera de assets 

import { Routes, Route } from "react-router-dom";, en algunos proyectos se utiliza "as" como para apodar a la propiedad y se vería asi: { Routes as cosito1, Route as cotito2 } 

<Route path="/" element={<Home />} /> iempre hay que estar pendiente de las actualizaciones porque puede cambiar 



NOTAS EN CLASE 

 /* NOTAS 
Porque debemos creear rutas? 
Organizacion de la aplicacion: cada ruta puede represntar una entidad logica de la aplicacion.
Navegacion Eficiente

Reat Router 
Es una libreria de enrutamiento para aplicacidnes web 

Enrutamiento Declarativo:
nos permite adosar el componente que se va a adosar  a esa ruta 

Rutas anidadas:
Podemos tener una jerarquia de rutas en la app, sirve para colocar una ruta y dentro rutas hijos y todo puede ser una entidad
Historial de navegacion:
permite al usuario retroceder y avanzar  sin recargar la pagina 

Integracion con React:

Manejo de Redirecciones:

¿Por qué crear una ruta "Not Found"?
Mejora la experiencia del usuario y sirve para darle retroalimentacion del error 


*/}
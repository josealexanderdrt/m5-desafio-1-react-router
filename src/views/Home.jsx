import { Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PhotoCake1 from "../assets/imgs/a.jpg";
import PhotoCake2 from "../assets/imgs/b.jpg";
import PhotoCake3 from "../assets/imgs/c.jpg";

export const Home = () => {
  return (
    <Carousel variant="dark" className="mx-5 my-1 p-1 carousel">
      <Carousel.Item>
        <img
          src={PhotoCake1}
          alt="Foto de Pastel"
          className="d-block centered-image mx-auto"
          width="350"
        />
        <Carousel.Caption className="carouselCaption">
          <h3>Bienvenido a Happy Cake </h3>
          <h5>El Lugar de los Pasteles Felices </h5>
          <Link
            to="/contacto"
            className="text-dark text-center text-decoration-none ms-2 me-2  "
          >
            Contactanos
          </Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          src={PhotoCake2}
          alt="Foto de Pastel 2"
          className="d-block centered-image mx-auto"
          width="350"
        />
        <Carousel.Caption className="carouselCaption">
          <h3>Bienvenido a Happy Cake </h3>
          <h5>El Lugar de los Postres Felices </h5>
          <Link
            to="/contacto"
            className="text-dark text-center text-decoration-none ms-2 me-2  "
          >
            Contactanos
          </Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          src={PhotoCake3}
          alt="Foto de Pastel 3"
          className="d-block centered-image mx-auto"
          width="350"
        />
        <Carousel.Caption className="carouselCaption">
          <h3>¡Bienvenido a Happy Cake! </h3>
          <h5>El Lugar de los Ingredientes Felices </h5>
          <Link
            to="/contacto"
            className="text-dark text-center text-decoration-none ms-2 me-2  "
          >
            Contactanos
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;

{/* 
NOTAS 


*/}
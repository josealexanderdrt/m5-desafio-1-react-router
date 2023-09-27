import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="">
        <Container className="ms-2">
          <Nav className="align-items-center">
            <Link
              to="/"
              className="text-white text-center text-decoration-none ms-2 me-2"
            >
              Home
            </Link>

            <Link
              to="/contacto"
              className="text-white text-center text-decoration-none"
            >
              Contacto
            </Link>
          </Nav>
        </Container>
        <Link
          to="/"
          className=" align-items-center text-white text-center text-decoration-none me-5"
        >
          Happy Cake
        </Link>
      </Navbar>
    </>
  );
};

export default NavBar;

import React from "react";
import { Card } from "react-bootstrap";

export const NotFound = () => {
  return (
    <>
      <Card className="card">
        <Card.Header>¡Ocurrio un error!</Card.Header>
        <Card.Body>
          <Card.Title>Error en el Link de Navegación </Card.Title>
          <Card.Text>
            Estas tratando de ingresar a una dirección web que no existe en
            nuestra plataforma. Te recomendamos Regresar al Home
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default NotFound;

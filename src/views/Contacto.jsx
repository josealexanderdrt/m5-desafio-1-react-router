import React from "react";
import { Form, Container, Button } from "react-bootstrap";

export const Contacto = () => {
  return (
    <>
      <Container>
        <div className="headerTitle">
          <h2>Cuéntanos ¿En qué te podemos Ayudar? </h2>
        </div>
        <Form className="formClass">
          <Form.Group className="mb-3">
            <Form.Label>Correo</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Descripción </Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="dark">Enviar</Button>
        </Form>
      </Container>
    </>
  );
};

export default Contacto;

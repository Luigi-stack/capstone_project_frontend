import React, { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import cestini from "../assets/immagini/cestini.png"

const LoginRegister = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <Container className="mt-5">
        <Row>
            <Col >
            <h1 className="titolo_home">IMADI</h1>
            </Col>
        </Row>

      <Row className="align-items-center">
        <Col lg={6} className="d-flex justify-content-center">
        <img src={cestini} alt="" width={350} />
        </Col>
        <Col  lg={4}>
          {showLoginForm ? <LoginForm/> : <RegisterForm />}
          <Button className="rounded-0 px-0 text-white" variant="link" onClick={toggleForm}>
            {showLoginForm ? "Register" : "Login"}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginRegister;
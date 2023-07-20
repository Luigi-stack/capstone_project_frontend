import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      username,
      email,
      password,
      roles: [],
    };

    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log("Registrazione avvenuta con successo");
        alert("Registrazione avvenuta con successo");
      } else {
        throw new Error("Errore durante la registrazione");
      }
    } catch (error) {
      console.error("Errore durante la registrazione:", error.message);
      alert("Errore durante la registrazione: " + error.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mt-5">
       
        <Form.Label>Name</Form.Label>
        <Form.Control
          className="rounded-0"
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mt-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
          className="rounded-0"
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mt-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          className="rounded-0"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mt-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          className="rounded-0"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button className="rounded-0 mt-3" variant="primary" onClick={handleSubmit}>
        Register
      </Button>
    </Form>
  );
};

export default RegisterForm;

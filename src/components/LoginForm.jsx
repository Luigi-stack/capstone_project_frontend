import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            username,
            password,
        };

        try {
            const response = await fetch("http://localhost:8080/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                console.log("Accesso effettuato con successo");
                alert("Accesso effettuato con successo");
                navigate("/shop");
            } else {
                throw new Error("Errore durante l'accesso");
            }
        } catch (error) {
            console.error("Errore durante l'accesso:", error.message);
            alert("Errore durante l'accesso: " + error.message);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mt-5">
                <Form.Label>Username</Form.Label>
                <Form.Control 
                    className="rounded-0"
                    type="username"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Form.Text className="text-muted"></Form.Text>
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

            <Button className="rounded-0 mt-3" variant="primary" type="submit">
                Accedi
            </Button>
        </Form>

    );
};

export default LoginForm;
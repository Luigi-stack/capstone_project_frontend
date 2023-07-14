import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Basket() {
  const [baskets, setBaskets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/basket", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore durante il recupero dei giochi");
        }
      })
      .then((data) => setBaskets(data))
      .catch((error) =>
        console.error("Errore durante il recupero dei giochi:", error)
      );
  }, []);

  return (
    <div className="game-list d-flex flex-wrap justify-content-center mt-5">
      {baskets.map((basket) => (
        <Card key={basket.id} style={{ width: "18rem", margin: "10px" }}>
          <Card.Body>
            <Card.Img
              src={basket.image}
            />
            <Card.Title>{basket.name}</Card.Title>
            <Card.Text>
              Description: {basket.description}
              <br />
              Basket Price: {basket.price}€           
            </Card.Text>
            <Button variant="primary">Add to Cart</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Basket;

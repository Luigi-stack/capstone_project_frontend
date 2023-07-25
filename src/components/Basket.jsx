import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


function Basket() {
  const [baskets, setBaskets] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [favoriteItems, setFavoriteItems] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/basket", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setBaskets(data);
        } else {
          throw new Error("Errore durante il recupero degli oggetti");
        }
      } catch (error) {
        console.error("Errore durante il recupero degli oggetti:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    const savedTotalPrice = JSON.parse(localStorage.getItem("totalPrice"));
    const savedFavoriteItems = JSON.parse(localStorage.getItem("favoriteItems"));


    if (savedCartItems && savedTotalPrice) {
      setCartItems(savedCartItems);
      setTotalPrice(savedTotalPrice);
    }

    if (savedFavoriteItems) {
      setFavoriteItems(savedFavoriteItems);
    }

  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));

  }, [cartItems, totalPrice, favoriteItems]);

  const addToCart = (basket) => {
    const existingItem = cartItems.find((item) => item.id === basket.id);

    if (existingItem) {
      const updatedItems = cartItems.map((item) => {
        if (item.id === basket.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      setCartItems(updatedItems);
    } else {
      setCartItems((prevItems) => [
        ...prevItems,
        { ...basket, quantity: 1 },
      ]);
    }

    setTotalPrice((prevPrice) => prevPrice + basket.price);
  };

  const removeFromCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem && existingItem.quantity > 1) {
      const updatedItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      });

      setCartItems(updatedItems);
      setTotalPrice((prevPrice) => prevPrice - item.price);
    } else {
      const updatedItems = cartItems.filter(
        (cartItem) => cartItem.id !== item.id
      );
      setCartItems(updatedItems);
      setTotalPrice((prevPrice) => prevPrice - item.price * item.quantity);
    }
  };

  const handleCheckout = () => {
    // Implement the logic for order checkout here
    console.log("Proceed to checkout!");
  };

  const toggleFavorite = (basket) => {
    if (favoriteItems.some((item) => item.id === basket.id)) {
      setFavoriteItems(favoriteItems.filter((item) => item.id !== basket.id));
    } else {
      setFavoriteItems([...favoriteItems, basket]);
    }
  };

  const removeFromFavorites = (item) => {
    setFavoriteItems((prevFavorites) =>
      prevFavorites.filter((favItem) => favItem.id !== item.id)
    );
  };



  return (
    <Container>
      <Row>
        {baskets.map((basket) => (
          <Col
            md={4}
            xl={3}
            className="d-flex justify-content-center mt-3"
            key={basket.id}
          >
            <Card className="rounded-0" style={{ width: "18rem", margin: "10px" }}>
              <Card.Body>
                <Card.Img src={basket.image} />
                <Card.Title>{basket.name}</Card.Title>
                <Card.Text>
                  {basket.description}
                  <br />
                  Price: {basket.price}€
                </Card.Text>
              </Card.Body>
              <div className="d-flex align-items-center justify-content-between">
                <Button
                  className="btn btn-light rounded-0 flex-grow-1"
                  onClick={() => addToCart(basket)}
                >
                  Add to Cart
                </Button>
                {/* Bottone per gestire l'aggiunta e la rimozione dai preferiti */}
                <Button
                  className="btn btn-light rounded-0"
                  onClick={() => toggleFavorite(basket)}
                >
                  {favoriteItems.some((item) => item.id === basket.id) ? (
                    <i className="bi bi-heart-fill text-danger"></i>
                  ) : (
                    <i className="bi bi-heart"></i>
                  )}
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <Row id="cart" className="bg-white mt-5">
        <h3 className="mt-2">Cart</h3>
        {cartItems.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <Container
                className="d-flex align-items-center justify-content-between"
                key={item.id}
              >
                <p>
                  {item.name} ({item.quantity}x) {item.price}€
                  {/* Controllo per verificare se l'elemento è nei preferiti */}
                  {favoriteItems.some((favItem) => favItem.id === item.id) ? (
                    <span
                      className="ms-2 text-danger"
                      title="Remove from Favorites"
                      onClick={() => removeFromFavorites(item)}
                      style={{ cursor: "pointer" }}
                    >
                      <i className="bi bi-heart-fill text-danger"></i>
                    </span>
                  ) : (
                    <span
                      className="ms-2 text-primary"
                      title="Add to Favorites"
                      onClick={() => toggleFavorite(item)}
                      style={{ cursor: "pointer" }}
                    >
                      <i className="bi bi-heart text-dark"></i>
                    </span>
                  )}
                </p>
                <img src={item.image} alt="" width={50} />
                <Button
                  className="btn btn-danger rounded-0"
                  onClick={() => removeFromCart(item)}
                >
                  Remove from Cart
                </Button>
              </Container>
            ))}
            <p className="fs-4">Total Price: {totalPrice}€</p>
            <Button
              className="rounded-0"
              variant="primary"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </Button>
          </>
        )}
      </Row>
    </Container>

  );
}

export default Basket;
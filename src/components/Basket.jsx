// import React, { useEffect, useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

// function Basket() {
//   const [baskets, setBaskets] = useState([]);
//   const [cartItems, setCartItems] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0)

//   useEffect(() => {
//     fetch("http://localhost:8080/api/basket", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           throw new Error("Errore durante il recupero degli oggetti");
//         }
//       })
//       .then((data) => setBaskets(data))
//       .catch((error) =>
//         console.error("Errore durante il recupero degli oggetti:", error)
//       );
//   }, []);

//   const addToCart = (basket) => {
//     const existingItem = cartItems.find((item) => item.id === basket.id);
  
//     if (existingItem) {
//       const updatedItems = cartItems.map((item) => {
//         if (item.id === basket.id) {
//           return { ...item, quantity: item.quantity + 1 };
//         }
//         return item;
//       });
  
//       setCartItems(updatedItems);
//     } else {
//       setCartItems((prevItems) => [
//         ...prevItems,
//         { ...basket, quantity: 1 },
//       ]);
//     }
  
//     setTotalPrice((prevPrice) => prevPrice + basket.price);
//   };

//   const removeFromCart = (item) => {
//     const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
  
//     if (existingItem && existingItem.quantity > 1) {
//       const updatedItems = cartItems.map((cartItem) => {
//         if (cartItem.id === item.id) {
//           return { ...cartItem, quantity: cartItem.quantity - 1 };
//         }
//         return cartItem;
//       });
  
//       setCartItems(updatedItems);
//       setTotalPrice((prevPrice) => prevPrice - item.price);
//     } else {
//       const updatedItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
//       setCartItems(updatedItems);
//       setTotalPrice((prevPrice) => prevPrice - (item.price * item.quantity));
//     }
//   };
  
  
//   const handleCheckout = () => {
//     // Implementa la logica per il checkout dell'ordine qui
//     console.log("Procedi all'ordine!");
//   };


//   return (
//     <Container>  
//       <Row>
//         {baskets.map((basket) => (
//           <Col md={4} xl={3} className="d-flex justify-content-center mt-3">
//             <Card className="rounded-0" key={basket.id} style={{ width: "18rem", margin: "10px" }}>
//               <Card.Body>
//                 <Card.Img
//                   src={basket.image}
//                 />
//                 <Card.Title>{basket.name}</Card.Title>
//                 <Card.Text>
//                   {basket.description}
//                   <br />
//                   Price: {basket.price}€
//                 </Card.Text>
//               </Card.Body>
//               <Button className='btn btn-light rounded-0' onClick={() => addToCart(basket)}>Add to Cart</Button>
//             </Card>
//           </Col>
//         ))}
//       </Row>

//       <Row id="cart" className="bg-white mt-5">
//       <h3 className="mt-2">Cart</h3>
//           {cartItems.length === 0 ? (
//             <p>No items in the cart</p>
//           ) : (
//             <>
//               {cartItems.map((item) => (
//                 <>
                
//                 <Container className="d-flex align-items-center justify-content-between" key={item.id}>
//                   <p>
//                     {item.name} ({item.quantity}x) {item.price}€
//                   </p>
//                   <img src={item.image} alt="" width={50} />
//                   <Button
//                     className="btn btn-danger rounded-0"
//                     onClick={() => removeFromCart(item)}
//                   >
//                     Remove
//                   </Button>
//                 </Container>
//                   <hr />
//                 </>
//               ))}
//               <p className="fs-4">Total Price: {totalPrice}€</p>
//               <Button className="rounded-0" variant="primary" onClick={handleCheckout}>
//             Procedi all'ordine
//           </Button>

//             </>
//           )}
//       </Row>

//     </Container>


//   );
// }

// export default Basket;

// import React, { useEffect, useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

// function Basket() {
//   const [baskets, setBaskets] = useState([]);
//   const [cartItems, setCartItems] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0)

//   useEffect(() => {
//     fetch("http://localhost:8080/api/basket", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           throw new Error("Errore durante il recupero degli oggetti");
//         }
//       })
//       .then((data) => setBaskets(data))
//       .catch((error) =>
//         console.error("Errore durante il recupero degli oggetti:", error)
//       );
//   }, []);

//   const addToCart = (basket) => {
//     const existingItem = cartItems.find((item) => item.id === basket.id);
  
//     if (existingItem) {
//       const updatedItems = cartItems.map((item) => {
//         if (item.id === basket.id) {
//           return { ...item, quantity: item.quantity + 1 };
//         }
//         return item;
//       });
  
//       setCartItems(updatedItems);
//     } else {
//       setCartItems((prevItems) => [
//         ...prevItems,
//         { ...basket, quantity: 1 },
//       ]);
//     }
  
//     setTotalPrice((prevPrice) => prevPrice + basket.price);
//   };

//   const removeFromCart = (item) => {
//     const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
  
//     if (existingItem && existingItem.quantity > 1) {
//       const updatedItems = cartItems.map((cartItem) => {
//         if (cartItem.id === item.id) {
//           return { ...cartItem, quantity: cartItem.quantity - 1 };
//         }
//         return cartItem;
//       });
  
//       setCartItems(updatedItems);
//       setTotalPrice((prevPrice) => prevPrice - item.price);
//     } else {
//       const updatedItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
//       setCartItems(updatedItems);
//       setTotalPrice((prevPrice) => prevPrice - (item.price * item.quantity));
//     }
//   };
  
  
//   const handleCheckout = () => {
//     // Implementa la logica per il checkout dell'ordine qui
//     console.log("Procedi all'ordine!");
//   };


//   return (
//     <Container>  
//       <Row>
//         {baskets.map((basket) => (
//           <Col md={4} xl={3} className="d-flex justify-content-center mt-3">
//             <Card className="rounded-0" key={basket.id} style={{ width: "18rem", margin: "10px" }}>
//               <Card.Body>
//                 <Card.Img
//                   src={basket.image}
//                 />
//                 <Card.Title>{basket.name}</Card.Title>
//                 <Card.Text>
//                   {basket.description}
//                   <br />
//                   Price: {basket.price}€
//                 </Card.Text>
//               </Card.Body>
//               <Button className='btn btn-light rounded-0' onClick={() => addToCart(basket)}>Add to Cart</Button>
//             </Card>
//           </Col>
//         ))}
//       </Row>

//       <Row id="cart" className="bg-white mt-5">
//         <h3 className="mt-2">Cart</h3>
//         {cartItems.length === 0 ? (
//           <p>No items in the cart</p>
//         ) : (
//           <>
//             {cartItems.map((item) => (
//               <Container className="d-flex align-items-end justify-content-between" key={item.id}>
//                 <p>
//                   {item.name} ({item.quantity}x) {item.price}€
//                 </p>
//                 <img src={item.image} alt="" width={50} />
//                 <Button
//                   className="btn btn-danger"
//                   onClick={() => removeFromCart(item)}
//                 >
//                   Remove
//                 </Button>
//               </Container>
//             ))}
//             <p className="fs-4">Total Price: {totalPrice}€</p>
//             <Button
//               className="rounded-0"
//               variant="primary"
//               href="#checkout-section"
//             >
//               Procedi all'ordine
//             </Button>
//           </>
//         )}
//       </Row>

//       <div id="checkout-section"></div>
//     </Container>
//   );
// }

// export default Basket;

import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Basket() {
  const [baskets, setBaskets] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

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

    if (savedCartItems && savedTotalPrice) {
      setCartItems(savedCartItems);
      setTotalPrice(savedTotalPrice);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
  }, [cartItems, totalPrice]);

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
            <Card
              className="rounded-0"
              style={{ width: "18rem", margin: "10px" }}
            >
              <Card.Body>
                <Card.Img src={basket.image} />
                <Card.Title>{basket.name}</Card.Title>
                <Card.Text>
                  {basket.description}
                  <br />
                  Price: {basket.price}€
                </Card.Text>
              </Card.Body>
              <Button
                className="btn btn-light rounded-0"
                onClick={() => addToCart(basket)}
              >
                Add to Cart
              </Button>
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
              <>
                <Container
                  className="d-flex align-items-center justify-content-between"
                  key={item.id}
                >
                  <p>
                    {item.name} ({item.quantity}x) {item.price}€
                  </p>
                  <img src={item.image} alt="" width={50} />
                  <Button
                    className="btn btn-danger rounded-0"
                    onClick={() => removeFromCart(item)}
                  >
                    Remove
                  </Button>
                </Container>
                <hr />
              </>
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

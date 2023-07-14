import { Button, Card, Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';

import ImgCarousel from "../assets/immagini/1.png"
import ImgCarousel2 from "../assets/immagini/2.png"
import ImgCarousel3 from "../assets/immagini/3.png"


function CarouselHome() {
  return (
    <>
    <Container className="mt-3 d-flex justify-content-center">

   
    
        <Carousel className="w-75">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ImgCarousel}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3><mark>Art & Décor Basket</mark></h3>
              <p><mark>Not only decorations, it is Art!</mark></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ImgCarousel2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3><mark>A story of traditions</mark></h3>
              <p><mark>The weaving tradition passed down from mother to daughter.</mark></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ImgCarousel3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3><mark>Hand Made in Senegal</mark></h3>
              <p><mark>We use traditional materials.
              </mark></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      
      </Container>

    </>
  );
}

export default CarouselHome;
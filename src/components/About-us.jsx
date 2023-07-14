import { Container, Row, Col } from "react-bootstrap";
import basket from "../assets/immagini/sen11b_1 copia.png"

function AboutUs() {
    return (
        <>
            <Container className="mt-3 text-light">
                <Row>
                    <Col xs={12} className="d-flex flex-column align-items-center">
                        <h1 className="titolo_home">IMADI</h1>
                        <h3>Beautifully Handcrafted</h3>
                    </Col>
                    <Col xs={12} className="mt-2">
                        <p className="fs-5 mt-3">IMADI uses traditional materials and know how to create beautiful and on-trend modern bags, baskets and rugs. The main products from our workshop are the beautifully finished Senegal baskets, trimmed with leather. The weaving tradition passed down from mother to daughter, and from grandmother to granddaughter is given new flavour in the choice of our colours, shapes and textures.</p>
                    </Col>

                </Row>
                <Row className="mt-5 mb-5 w-100">
                    <Col className="mt-3">
                        <h3 className="fs-2">
                            Baskets with the Fair Trade Difference
                        </h3>
                        <p className="fs-5 mt-5">
                            When we started working with Wolof weavers in Senegal (pictured) in 2007, via a project with the Peace Corps, the women were vocal about what they needed: reliable orders so they could earn a reliable incoming weaving in their villages, without losing a day hauling their goods to the markets.
                            As a fair trade business, our goal is to form respectful, long-term partnerships with artisans. They can count on us for pay that is reliable, fair, and prompt (including deposits up front). Your orders are an indispensable part of this cycle, making it possible for us to order time and time again from these artisans.
                        </p>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <img src="https://cdn.shopify.com/s/files/1/0251/2462/t/36/assets/senartisan-1647027289459.jpg?v=1647027291" alt="" width={450}/>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col className="d-flex justify-content-center">
                        <img src="https://cdn.shopify.com/s/files/1/0251/2462/t/36/assets/handmadeafricanbaskets01-1652290050020.jpg?v=1652290052" alt="" width={450} />
                    </Col>

                    <Col className="mt-3">
                        <h3 className="fs-2">
                            Weaving Woman
                        </h3>
                        <p className="fs-5 mt-5">
                            Since 2008, we've partnered with a talented group of Wolof weavers in rural Senegal, West Africa. The weavers craft baskets ranging from tiny and cute tabletop baskets up to extra-large hampers. Their beautiful baskets are a long-time favorite of our customers!
                            The weavers work in the traditional coil method, using thick stalks of natural, fast growing cattail to form the body of the basket. Designs are formed as they interweave colorful strips of plastic, which are upcycled off-cuts from a Dakar mat factory. Wolof women take pride in their craftsmanship and ability to help provide for their families using this traditional skill.
                        </p>
                    </Col>
                </Row>

            </Container>
        </>
    );

}

export default AboutUs;
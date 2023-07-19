import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <Container fluid className="mt-5 py-2 d-flex flex-column align-items-center footer">
                <Row>
                    <Col>
                        <p className="fs-2 footer-title">IMADI</p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Link to='https://www.facebook.com/imadiworld?_rdc=1&_rdr'><i class="bi bi-facebook fs-5"></i></Link>
                        <Link to='https://www.instagram.com/imadiworld/'><i class="bi bi-instagram mx-4 fs-5"></i></Link>
                        <Link to='https://github.com//luigi-stack'><i class="bi bi-github fs-5"></i></Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <span>&copy; Luigi Iossa {new Date().getFullYear()}</span>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer;
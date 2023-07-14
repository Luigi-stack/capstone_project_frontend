import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col, Row, Container } from 'react-bootstrap';

function ContactUs() {
    return (
        <>
            <Container className='mt-5'>

                <Row>
                    <Col>
                        <h2 className='contactUs text-white mb-5'>Contact Us!</h2>
                        <Form>
                            <Form.Group className="mb-4 text-white square ">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control className='rounded-0' placeholder="Full name" />
                            </Form.Group>

                            <Form.Group className="mb-4 text-white " controlId="exampleForm.ControlInput1">

                                <Form.Label>Email</Form.Label>
                                <Form.Control className='rounded-0' type="email" placeholder="name@example.com" />
                            </Form.Group>

                            <Form.Group className="mb-4 text-white " controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Text</Form.Label>
                                <Form.Control className='rounded-0' as="textarea" rows={3} />
                            </Form.Group>

                            <Button className='btn btn-light rounded-0' type="submit">
                                Submit
                            </Button>

                        </Form>
                    </Col>

                    <Col>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15436.851222937337!2d-17.4734276!3d14.7005543!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec1729eb52e6bc3%3A0xae17625922ca2fd2!2sLulu%20Cafe!5e0!3m2!1sit!2sit!4v1689179048404!5m2!1sit!2sit"
                            width="100%"
                            height="538"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        />
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default ContactUs;
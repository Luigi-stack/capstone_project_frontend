import { useLocation } from 'react-router-dom'; // Assuming you are using react-router-dom for routing
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {


  const location = useLocation();


  return (
    <>
      <Navbar expand="lg" className="nav_bar p-0">
        <Container>
          <Navbar.Brand className='imadi m-0' href="/">IMADI</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className='text-light' href="shop">Shop</Nav.Link>
              <Nav.Link className='text-light' href="gallery">Gallery</Nav.Link>
              <Nav.Link className='text-light' href="contact-us">Contact Us</Nav.Link>
              {location.pathname === '/shop' && (
                <Nav.Link className='text-light' href="#cart">My Cart <i class="bi bi-basket"></i>
                </Nav.Link>
              )}
              <Nav.Link className='text-light' href="registration">registration</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;



import { Navbar, Container, Nav, Button } from 'react-bootstrap'

const NavbarComponent = () => {
    return (
        <header>
            <Navbar
                bg="dark"
                variant="dark"
                expand="lg"
                fixed="top"
                className="py-3"
            >
                <Container>

                    <Navbar.Brand href="#">
                        AIFlow
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="ms-auto">

                            <Nav.Link href="#features">
                                Features
                            </Nav.Link>

                            <Nav.Link href="#pricing">
                                Pricing
                            </Nav.Link>

                            <Nav.Link href="#testimonials">
                                Reviews
                            </Nav.Link>

                            <Button variant="primary">
                                Get Started
                            </Button>

                        </Nav>

                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </header>
    )
}

export default NavbarComponent
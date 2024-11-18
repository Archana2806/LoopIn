import { useNavigate } from "react-router-dom"; // Add this import
import { Navbar, Container, Row, Col, Form, Button } from "react-bootstrap";
import logo from "../assets/img/logo.png";

export const SRegister = () => {
  const navigate = useNavigate();

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Redirect to the GST page after registration
    navigate("/GSTPage");
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
        </Container>
      </Navbar>

      <section className="register-page" id="register">
        <Container>
          <div className="register-form-bx">
            <h2>Create a New Account</h2>
            <Form onSubmit={handleRegisterSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="register-button">
                Register
              </Button>
            </Form>

            <Row className="mt-3">
              <Col xs={12}>
                <p className="text-center" style={{ color: 'black' }}>
                  Already have an account?{" "}
                  <a href="/sellerlogin" className="login-link">
                    Log In Here
                  </a>
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

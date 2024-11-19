import { useNavigate } from "react-router-dom"; // Add this import
import { Navbar, Container, Row, Col, Form, Button } from "react-bootstrap";
import logo from "../assets/img/logo.png";

export const SellerLogin = () => {
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Redirect to the GST page after login
    navigate("/Gstverification");
  };

  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Seller logo" />
          </Navbar.Brand>
        </Container>
      </Navbar>
      
      <section className="seller-login" id="login">
        <Container>
          <div className="login-form-bx">
            <h2>Login to Your Account</h2>
            <Form onSubmit={handleLoginSubmit}>
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

              <div className="d-flex justify-content-between mb-3">
                <Form.Check
                  type="checkbox"
                  label="Remember Me"
                  id="rememberMe"
                />
                <a href="/forgot-password" className="forgot-password-link">
                  Forgot Password?
                </a>
              </div>

              <Button variant="primary" type="submit" className="login-button">
                Log In
              </Button>
            </Form>

            <Row className="mt-3 justify-content-center">
              <Col xs={12} className="d-flex justify-content-center">
                <p className="text-center" style={{ color: 'black' }}>
                  Don’t have an account?{" "}
                  <a href="/sregister" className="register-link">
                    Register Here
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

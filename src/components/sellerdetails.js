import { useState } from "react";
import { Navbar, Container, Form, Button, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import { useNavigate } from "react-router-dom";

export const SellerDetails = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    contactPhone: "",
    contactEmail: "",
    businessAddress: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any validation and submit the data
    console.log(formData);
    navigate("/ship_pref"); 
  };

  return (
    <>

    <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="loopIn" />
          </Navbar.Brand>
        </Container>
    </Navbar>

      <section className="seller-details" id="seller-details">
        <Container>
          <div className="details-form-bx">
            <h2>Enter Your Business Details</h2>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBusinessName">
                <Form.Label>Business Name</Form.Label>
                <Form.Control
                  type="text"
                  name="businessName"
                  placeholder="Enter your business name"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBusinessType">
                <Form.Label>Business Type</Form.Label>
                <Form.Control
                  as="select"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Business Type</option>
                  <option value="Manufacturer">Manufacturer</option>
                  <option value="Wholesaler">Wholesaler</option>
                  <option value="Retailer">Retailer</option>
                  <option value="Distributor">Distributor</option>
                  <option value="Service Provider">Service Provider</option>
                  <option value="Other">Other</option>
                </Form.Control>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formContactPhone">
                <Form.Label>Contact Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  name="contactPhone"
                  placeholder="Enter your phone number"
                  value={formData.contactPhone}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formContactEmail">
                <Form.Label>Contact Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="contactEmail"
                  placeholder="Enter your email address"
                  value={formData.contactEmail}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBusinessAddress">
                <Form.Label>Business Address</Form.Label>
                <Form.Control
                  type="text"
                  name="businessAddress"
                  placeholder="Enter your business address"
                  value={formData.businessAddress}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="details-submit-button">
                Save Details
              </Button>
            </Form>
          </div>
        </Container>
      </section>
    </>
  );
};

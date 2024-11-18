import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const ShipPreference = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    shippingMethod: "",
    shippingTime: "",
    pickupAddress: "",
    deliveryPartner: "",
    isPickupAvailable: false,
    specialInstructions: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any validation and submit the data
    console.log(formData);
    navigate("/bankdetails"); 
  };

  return (
    <>
      <section className="shipping-preferences" id="shipping-preferences">
        <Container>
          <div className="preferences-form-bx">
            <h2>Set Your Shipping Preferences</h2>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formShippingMethod">
                <Form.Label>Preferred Shipping Method</Form.Label>
                <Form.Control
                  as="select"
                  name="shippingMethod"
                  value={formData.shippingMethod}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Shipping Method</option>
                  <option value="Standard">Standard</option>
                  <option value="Express">Express</option>
                  <option value="Overnight">Overnight</option>
                </Form.Control>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formShippingTime">
                <Form.Label>Preferred Shipping Time</Form.Label>
                <Form.Control
                  as="select"
                  name="shippingTime"
                  value={formData.shippingTime}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Shipping Time</option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                </Form.Control>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formIsPickupAvailable">
                <Form.Check
                  type="checkbox"
                  label="Pickup Available"
                  name="isPickupAvailable"
                  checked={formData.isPickupAvailable}
                  onChange={handleInputChange}
                />
              </Form.Group>

              {formData.isPickupAvailable && (
                <Form.Group className="mb-3" controlId="formPickupAddress">
                  <Form.Label>Pickup Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="pickupAddress"
                    placeholder="Enter your pickup address"
                    value={formData.pickupAddress}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
              )}

              <Form.Group className="mb-3" controlId="formDeliveryPartner">
                <Form.Label>Preferred Delivery Partner</Form.Label>
                <Form.Control
                  type="text"
                  name="deliveryPartner"
                  placeholder="Enter your preferred delivery partner"
                  value={formData.deliveryPartner}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formSpecialInstructions">
                <Form.Label>Special Shipping Instructions</Form.Label>
                <Form.Control
                  as="textarea"
                  name="specialInstructions"
                  placeholder="Any special instructions for shipping"
                  value={formData.specialInstructions}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="preferences-submit-button">
                Save Shipping Preferences
              </Button>
            </Form>
          </div>
        </Container>
      </section>
    </>
  );
};

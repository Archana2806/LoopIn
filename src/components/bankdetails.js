import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const BankDetails = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    bankName: "",
    accountNumber: "",
    accountType: "",
    ifscCode: "",
    accountHolderName: "",
    branchName: "",
    isAccountVerified: false,
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
    navigate("/productupload"); // Redirect to the next page (dashboard or confirmation page)
  };

  return (
    <>
      <section className="bank-details" id="bank-details">
        <Container>
          <div className="bank-form-bx">
            <h2>Add Your Bank Details</h2>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBankName">
                <Form.Label>Bank Name</Form.Label>
                <Form.Control
                  type="text"
                  name="bankName"
                  placeholder="Enter your bank name"
                  value={formData.bankName}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formAccountNumber">
                <Form.Label>Account Number</Form.Label>
                <Form.Control
                  type="text"
                  name="accountNumber"
                  placeholder="Enter your bank account number"
                  value={formData.accountNumber}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formAccountType">
                <Form.Label>Account Type</Form.Label>
                <Form.Control
                  as="select"
                  name="accountType"
                  value={formData.accountType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Account Type</option>
                  <option value="Savings">Savings</option>
                  <option value="Current">Current</option>
                  <option value="Business">Business</option>
                </Form.Control>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formIfscCode">
                <Form.Label>IFSC Code</Form.Label>
                <Form.Control
                  type="text"
                  name="ifscCode"
                  placeholder="Enter IFSC code"
                  value={formData.ifscCode}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formAccountHolderName">
                <Form.Label>Account Holder Name</Form.Label>
                <Form.Control
                  type="text"
                  name="accountHolderName"
                  placeholder="Enter account holder's name"
                  value={formData.accountHolderName}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBranchName">
                <Form.Label>Branch Name</Form.Label>
                <Form.Control
                  type="text"
                  name="branchName"
                  placeholder="Enter branch name"
                  value={formData.branchName}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formIsAccountVerified">
                <Form.Check
                  type="checkbox"
                  label="I verify that the above bank details are correct."
                  name="isAccountVerified"
                  checked={formData.isAccountVerified}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="bank-submit-button">
                Save Bank Details
              </Button>
            </Form>
          </div>
        </Container>
      </section>
    </>
  );
};

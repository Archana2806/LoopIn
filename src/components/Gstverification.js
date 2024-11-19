import React, { useState } from "react";
import { Navbar, Container, Form, Button } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import { useNavigate } from "react-router-dom";

export const GstVerification = () => {
   const navigate = useNavigate();
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    setFiles(Array.from(selectedFiles));
  };

  const handleGstSubmit = (e) => {
    e.preventDefault();
    // Perform any validation or save GST number
    console.log("GST Number Submitted");
    console.log("Files Uploaded:", files);

    navigate("/sellerdetails");
  };

  const triggerFileInput = () => {
    document.getElementById("fileInput").click();
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
      <section className="gst-page" id="gst">
        <Container>
          <div className="gst-form-bx">
            <h2>Enter GST Number</h2>
            <p>GST number is mandatory to sell online.</p>
            <Form onSubmit={handleGstSubmit}>
              <Form.Group className="mb-3" controlId="formGstNumber">
                <Form.Label>15-digit GST Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your GST number"
                  maxLength="15"
                  required
                />
              </Form.Group>

              {/* File Upload Section */}
              <div className="file-upload-box">
                <Form.Label>Upload GST certificate (Reg-06 with Annexure A & B)</Form.Label>
                <div
                  className="file-drop-box"
                  onClick={triggerFileInput}
                  style={{ cursor: "pointer" }}
                >
                  <p>Drag and Drop your files here or click to browse</p>
                  <input
                    type="file"
                    id="fileInput"
                    accept=".pdf,.jpg,.png,.doc"
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                    multiple
                  />
                </div>
              </div>

              {/* Display uploaded files */}
              {files.length > 0 && (
                <div className="uploaded-files">
                  <ul>
                    {files.map((file, index) => (
                      <li key={index}>
                        {file.name}
                        <span
                          className="clear-file"
                          onClick={() => {
                            setFiles(files.filter((_, i) => i !== index));
                          }}
                        >
                          Clear
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <p className="file-info">
                Allowed extensions: pdf, jpg, png, doc.
              </p>
              <p className="file-info">
                Maximum file size: 10 MB.
              </p>

              <Button variant="primary" type="submit" className="gst-submit-button">
                Verify GST Details
              </Button>
            </Form>
          </div>
        </Container>
      </section>
    </>
  );
};

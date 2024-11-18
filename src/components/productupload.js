import React, { useState } from 'react';
import { Modal, Button, Form, Container, Row, Col, InputGroup } from 'react-bootstrap';
import { PlusCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import headerImg from "../assets/img/head.svg"; // Ensure you have the header image in the path

export const ProductUpload = () => {
  const [showModal, setShowModal] = useState(false);
  const [productDetails, setProductDetails] = useState({
    title: '',
    description: '',
    price: '',
  });
  const [files, setFiles] = useState([]);

  const triggerFileInput = () => {
    document.getElementById('fileInput').click();
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      const uploadedFiles = Array.from(e.target.files);
      setFiles(uploadedFiles);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleProductSubmit = () => {
    alert('Product submitted and is pending verification!');
    setShowModal(false);
    setFiles([]); // Clear files after submission
  };

  return (
    <div>
      <section className="product-upload-banner" id="product-upload-home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                    <h1 className="product-upload-title">Upload Your Product to Start Selling</h1>
                    <p className="product-upload-description">
                      Get your products online and start reaching customers worldwide. Follow the simple steps below to upload your product information.
                    </p>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? 'animate__animated animate__zoomIn' : ''}>
                    <img src={headerImg} alt="Product Upload" className="product-upload-header-img" />
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Add Product Section */}
      <div className="product-upload-footer">
        <div className="add-product-box" onClick={() => setShowModal(true)}>
          <PlusCircle size={40}  style={{ color: '#DC651E' }}/>
          <span className="add-product-text">Add Product Here</span>
        </div>
      </div>

      {/* Modal for Uploading Product */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Upload Your Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Styled File Upload Box */}
          <div className="file-upload-box">
            <Form.Label>Upload Product Images</Form.Label>
            <div
              className="file-drop-box"
              onClick={triggerFileInput}
              style={{ cursor: 'pointer' }}
            >
              <p>Drag and Drop your files here or click to browse</p>
              <input
                type="file"
                id="fileInput"
                accept=".jpg,.png,.jpeg"
                onChange={handleFileChange}
                style={{ display: 'none' }}
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

          <p className="file-info">Maximum file size: 10 MB per file.</p>

          {/* Product Details Section */}
          <Form.Group className="mb-3">
            <Form.Label>Product Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={productDetails.title}
              onChange={handleInputChange}
              placeholder="Enter product title"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={productDetails.description}
              onChange={handleInputChange}
              rows={3}
              placeholder="Enter product description"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Product Price</Form.Label>
            <InputGroup>
              <InputGroup.Text>₹</InputGroup.Text>
              <Form.Control
                type="number"
                name="price"
                value={productDetails.price}
                onChange={handleInputChange}
                placeholder="Enter product price"
                required
              />
            </InputGroup>
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleProductSubmit} style={{ backgroundColor: '#DC651E', borderColor: '#DC651E' }}>
            Submit Product
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

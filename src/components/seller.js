import { Container, Row, Col, Button } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import headerImg from "../assets/img/seller.svg";
import analyticsImg from "../assets/img/analytics.svg";
import manageProductsImg from "../assets/img/product.svg";
import growBusinessImg from "../assets/img/business.svg";
import registerImg from "../assets/img/register.svg";
import storageImg from "../assets/img/storage.svg";
import listProductImg from "../assets/img/list-product.svg";
import ordersImg from "../assets/img/orders.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { SellerNavBar } from "./seller_navbar";

export const Seller = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <SellerNavBar />

      {/* Main Seller Section */}
      <section className="seller-head" id="seller">
        <Container>
          {/* Header Section */}
          <Row className="align-items-center mb-5 seller-page content-row">
            <Col xs={12} md={6}>
              <h1>Start Selling on Our Platform</h1>
              <p>
                Join thousands of sellers growing their businesses with our platform. List your products, track your sales, and access powerful tools to boost your success.
              </p>
              <a href="/sellerlogin">
                <Button variant="primary" className="mt-3">
                  Start Selling
                </Button>
              </a>
            </Col>
            <Col xs={12} md={6}>
              <img src={headerImg} alt="Seller Header" className="header-img img-fluid" />
            </Col>
          </Row>

          {/* Why Sell With Us Section */}
          <div className="seller-bx">
            <h2>Why Sell With Us?</h2>
            <p>
              Explore the tools and resources available to sellers, helping you grow and manage your business with ease.
            </p>
            <Carousel responsive={responsive} infinite={true} className="seller-slider">
              <div className="item">
                <img src={analyticsImg} alt="Analytics" />
                <h5>Powerful Analytics</h5>
              </div>
              <div className="item">
                <img src={manageProductsImg} alt="Manage Products" />
                <h5>Easy Product Management</h5>
              </div>
              <div className="item">
                <img src={growBusinessImg} alt="Grow Business" />
                <h5>Grow Your Business</h5>
              </div>
            </Carousel>
          </div>

          {/* How to Register Section */}
          <div className="register-bx mt-5">
            <h2>How to Register a Seller Account</h2>
            <Row className="text-center steps-box">
              <Col xs={12} md={3}>
                <img src={registerImg} alt="Register" className="step-img img-fluid mb-3" />
                <h5>1. Register Your Account</h5>
                <p>Create your seller account with basic details and start your journey.</p>
              </Col>
              <Col xs={12} md={3}>
                <img src={storageImg} alt="Storage & Shipping" className="step-img img-fluid mb-3" />
                <h5>2. Choose Storage & Shipping</h5>
                <p>Select how you want to store and ship your products to customers.</p>
              </Col>
              <Col xs={12} md={3}>
                <img src={listProductImg} alt="List Products" className="step-img img-fluid mb-3" />
                <h5>3. List Your Products</h5>
                <p>Add your products with details like price, description, and images.</p>
              </Col>
              <Col xs={12} md={3}>
                <img src={ordersImg} alt="Complete Orders" className="step-img img-fluid mb-3" />
                <h5>4. Complete Orders & Get Paid</h5>
                <p>Fulfill orders, delight customers, and receive your earnings directly.</p>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col xs={12}>
                <p className="text-center">
                  Selling on our platform is easy and profitable. Start today to unlock endless possibilities for your business.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
        <img className="background-image-left" src={colorSharp} alt="Background" />
      </section>
    </>
  );
};

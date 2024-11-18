import { Navbar, Nav, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import logo from "../assets/img/logo.png";

export const SellerNavBar = () => {
    const [activeLink, setActiveLink] = useState("dashboard");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Navbar expand="md" className={`seller-navbar ${scrolled ? "scrolled" : ""}`}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="Seller logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="seller-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="seller-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/" className={activeLink === "home" ? "active seller-navbar-link" : "seller-navbar-link"} onClick={() => onUpdateActiveLink("home")}> Home </Nav.Link>
                        <Nav.Link href="/seller/grow" className={activeLink === "seller_login" ? "active seller-navbar-link" : "seller-navbar-link"} onClick={() => onUpdateActiveLink("grow")}> Grow </Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <a href="/sellerlogin">
                            <button className="seller-button">
                                <span>Start Selling</span>
                            </button>
                        </a>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

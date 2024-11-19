import { Navbar, Nav, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import logo from '../assets/img/logo.png';
import profile from '../assets/img/profile.svg';
import wishlist from '../assets/img/wishlist.svg';
import cart from '../assets/img/cart.svg';
import { HashLink } from 'react-router-hash-link';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="loop logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#workout" className={activeLink === 'workout' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('workout')}>Workout</Nav.Link>
                        <Nav.Link href="#fithart" className={activeLink === 'fithart' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('fithart')}>FitHart</Nav.Link>
                        <Nav.Link href="#shop" className={activeLink === 'shop' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('shop')}>Shop</Nav.Link>
                        <Nav.Link href="#magazine" className={activeLink === 'magazine' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('magazine')}>Magazine</Nav.Link>
                        <Nav.Link href="/selleracc" className={activeLink === 'seller' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('seller')}>Seller</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="profile.js"><img src={profile} alt="profile" /></a>
                            <a href="wishlist.js"><img src={wishlist} alt="wishlist" /></a>
                            <a href="cart.js"><img src={cart} alt="cart" /></a>
                        </div>
                        <HashLink to="#connect">
                            <button className="vvd"><span>Sign Up</span></button>
                        </HashLink>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Navbar, Nav, NavLink } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

const Menu = () => {
    return (
        <Navbar expand="lg" className="menu fixed-top" id="mainNav" collapseOnSelect={true}>
            <Container fluid>
                <LinkContainer to="/">
                    <Navbar.Brand >
                        <img src="../../img/logos/logo.png" style={{ width: '100%', marginLeft: '10%' }} />
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle className="ms-auto" />
                <Navbar.Collapse id="navbarResponsive" className="mx-auto justify-content-end">
                    <Nav className="align-items-center">
                        <LinkContainer to="/Products">
                            <NavLink className="nav-item me-lg-3"><span className="nav-link">ÜRÜNLERİMİZ</span></NavLink>
                        </LinkContainer>
                        <LinkContainer to="/OurWork">
                            <NavLink className="nav-item me-lg-3"><span className="nav-link">ÇALIŞMALARIMIZ</span></NavLink>
                        </LinkContainer>
                        <LinkContainer to="/AboutUs">
                            <NavLink className="nav-item me-lg-3"><span className="nav-link">HAKKIMIZDA</span></NavLink>
                        </LinkContainer>
                        <LinkContainer to="/Contact">
                            <NavLink className="nav-item"><span className="nav-link">İLETİŞİM</span></NavLink>
                        </LinkContainer>
                        <div className="nav-item me-lg-3">
                            <NavLink active={false} className="btn btn-dark btn-social nav-item" target="_blank" href="https://api.whatsapp.com/send?phone=905318822031">
                                <FontAwesomeIcon icon={['fab', 'whatsapp']} /></NavLink>
                            <span style={{ color: 'white', paddingLeft: '5px' }}>+90 531 882 20 31</span><br />
                            <NavLink active={false} className="btn btn-dark btn-social nav-item" style={{ marginLeft: '1rem' }} target="_blank" href="https://www.instagram.com/bilgi_extra">
                                <FontAwesomeIcon icon={['fab', 'instagram']} /></NavLink>
                            <span style={{ color: 'white', paddingLeft: '5px' }}>bilgi_extra</span><br />
                            <NavLink active={false} className="btn btn-dark btn-social nav-item" href="mailto:info@bilgiextra.com">
                                <FontAwesomeIcon icon={['far', 'envelope']} /></NavLink>
                            <span style={{ color: 'white', paddingLeft: '5px' }}>info@bilgiextra.com</span>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default Menu;
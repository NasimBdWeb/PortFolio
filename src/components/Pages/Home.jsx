import React from 'react';
import logo2 from '../data/images/Frame2.gif'
import { Container, Row, Col } from "react-bootstrap";
import Type from './Type';
import Services from './Services';
import Skills from './Skills';
import Projects from './Projects';
import Email from './Email';
import { Link, NavLink } from 'react-router-dom';




const Home = () => {
    return (
        <div>
            <section>
                <Container fluid className="home-section" id="home">

                    <Container className="home-content">
                        <Row>
                            <Col md={7} className="home-header">
                                <h1 style={{ paddingBottom: 15 }} className="heading">
                                    Hi There!{" "}
                                    <span className="wave" role="img" aria-labelledby="wave">
                                        👋🏻
                                    </span>
                                </h1>

                                <h1 className="heading-name">
                                    I'M
                                    <strong className="main-name"> NASIM AHMAD</strong>
                                </h1>

                                <div style={{ padding: 50, textAlign: "left" }}>
                                    <Type />
                                </div>

                             
                            </Col>

                            <Col md={5} style={{ paddingBottom: 20 }}>
                                <img
                                    src={logo2}
                                    alt="home pic"
                                    className="img-fluid"
                                    style={{ maxHeight: "450px" }}
                                />
                            </Col>
                        </Row>
                    </Container>
                </Container>

            </section>
            <Services />
            <Skills />
            <Projects />
            <Email />
        </div>
    );
};

export default Home;
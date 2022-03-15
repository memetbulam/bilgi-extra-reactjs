import React, { useContext, useState } from "react";
import ProductImage from "./Products/ProductImage";
import { ProductListContext } from "../contexts/ProductListContext";
import ProductsModal from "./Products/ProductsModal";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
    const { Products } = useContext(ProductListContext);
    const [modalShow, setModalShow] = useState(false);
    const [modalProduct, setModalProduct] = useState(false);


    return (
        <div style={{ marginTop: '125px' }}>
            <Container>
                <Row>
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1"></button>
                            {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>  */}
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="999999999">
                                <img src="../../img/intro/Y-1.png" className="w-100" alt="Fotoğraf" />
                            </div>
                            {/* <div className="carousel-item" data-bs-interval="999999999">
                            <img src="assets/img/carousel/csl2.jpg" className="w-100" alt="Fotoğraf">
                        </div>
                        <div className="carousel-item" data-bs-interval="999999999">
                            <img src="assets/img/carousel/csl3.jpg" className="w-100" alt="Fotoğraf">
                        </div>  */}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </Row>
                <Row style={{ marginTop: 50 }}>
                    <Col md={6} className="border-right" id="intro-promotion">
                        <h4 className="text-center">
                            Biz kimiz?
                        </h4>
                        <p>
                            Biz fuarlarda ve düzenlenen organizasyonlarda “extra malzeme” ürünlerimiz ile standınızdaki
                            eksiklikleri tamamlıyoruz.
                        </p>
                        <p>
                            Standlarınızda ihtiyacınız olan yeni, sıfır ve ambalajlı ürünlerimizi
                            sizler için temin ediyoruz.
                        </p>
                        <p>
                            Sizin memnuniyetiniz için burada, sizlere güvenilir ve hızlı bir
                            hizmet sağlamak için bulunuyoruz.
                        </p>
                        <p>
                            Daha fazla bilgi için
                            <a href="/Contact">tıklayınız.</a>
                        </p>
                    </Col>
                    <Col md={6} className="text-center">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188.19201562829946!2d28.803717635928805!3d41.00179179661674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa3e99a1a5e25%3A0xbeca76f8ba8271c1!2sBilgi%20Extra!5e0!3m2!1str!2str!4v1637176225724!5m2!1str!2str"
                            style={{ width: '100%', height: '100%', border: '0' }} loading="lazy"></iframe>
                    </Col>
                </Row>
            </Container>
            <Container className="product" style={{ marginTop: 200 }}>
                <div className="text-center">
                    <h1 className="text-uppercase my-5">ÜRÜNLERİMİZ</h1>
                </div>
                <Row className="justify-content-center">
                    {
                        modalProduct ?
                            <ProductsModal show={modalShow} mproduct={modalProduct} onHide={() => setModalShow(false)} />
                            : ""
                    }
                    <Col lg={4} sm={6}>
                        <div className="product-item">
                            <div className="hover-overlay-container" onClick={() => { setModalShow(true); setModalProduct(Products[0]) }}>
                                <ProductImage pImage={Products[0].images} />
                                <div className="overlay-text-container">
                                    <div className="overlay-text">DETAY İÇİN TIKLAYINIZ</div>
                                </div>
                            </div>
                            <div className="product-caption">
                                <div className="product-caption-heading text-uppercase">{Products[0].name}</div>
                                <div className="product-caption-subheading text-muted">
                                    <b>TÜR:</b> {Products[0].type}<br />
                                    <b>KOD:</b> {Products[0].code}
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={6}>
                        <div className="product-item">
                            <div className="hover-overlay-container" onClick={() => { setModalShow(true); setModalProduct(Products[1]) }}>
                                <ProductImage pImage={Products[1].images} />
                                <div className="overlay-text-container">
                                    <div className="overlay-text">DETAY İÇİN TIKLAYINIZ</div>
                                </div>
                            </div>
                            <div className="product-caption">
                                <div className="product-caption-heading text-uppercase">{Products[1].name}</div>
                                <div className="product-caption-subheading text-muted">
                                    <b>TÜR:</b> {Products[1].type}<br />
                                    <b>KOD:</b> {Products[1].code}
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={6}>
                        <div className="product-item">
                            <div className="hover-overlay-container" onClick={() => { setModalShow(true); setModalProduct(Products[2]) }}>
                                <ProductImage pImage={Products[2].images} />
                                <div className="overlay-text-container">
                                    <div className="overlay-text">DETAY İÇİN TIKLAYINIZ</div>
                                </div>
                            </div>
                            <div className="product-caption">
                                <div className="product-caption-heading text-uppercase">{Products[2].name}</div>
                                <div className="product-caption-subheading text-muted">
                                    <b>TÜR:</b> {Products[2].type}<br />
                                    <b>KOD:</b> {Products[2].code}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <span className="d-flex justify-content-end"><a href="/Products">Daha fazla göster</a></span>
            </Container>
        </div>
    );
}

export default Home;
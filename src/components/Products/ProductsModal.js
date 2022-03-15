import React from 'react';
import { Modal, Button, Carousel, Container, Row, Col } from 'react-bootstrap';

const ProductsModal = (props) => {

    return (
        <div>
            <Modal {...props} size="md" centered>
                <Modal.Header closeButton>
                    <Modal.Title>{props.mproduct.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            {
                                props.mproduct.images.length <= 1 ?
                                    <Col xs={12}>
                                        <img src={"../../../img/product/" + props.mproduct.images[0].image}
                                            className="overlay-image d-block w-100" alt={props.mproduct.images[0].alt} />
                                    </Col>
                                    :
                                    <Carousel variant="dark" interval={4000}>
                                        <Carousel.Item >
                                            <Col xs={12}>
                                                <img src={"../../../img/product/" + props.mproduct.images[0].image}
                                                    className="overlay-image d-block w-100" alt={props.mproduct.images[0].alt} />
                                            </Col>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img src={"../../../img/product/" + props.mproduct.images[1].image}
                                                className="overlay-image d-block w-100" alt={props.mproduct.images[1].alt} />
                                        </Carousel.Item>
                                    </Carousel>
                            }
                        </Row>
                        <Row>
                            <Col xs={6} style={{ textAlign: 'end' }}><b>TÜR:</b></Col>
                            <Col xs={6} style={{ textAlign: 'start' }}>{props.mproduct.type}</Col>
                        </Row>
                        <Row>
                            <Col xs={6} style={{ textAlign: 'end' }}><b>RENK:</b></Col>
                            <Col xs={6} style={{ textAlign: 'start' }}>{props.mproduct.color}</Col>
                        </Row>
                        <Row>
                            <Col xs={6} style={{ textAlign: 'end' }}><b>BOYUT:</b></Col>
                            <Col xs={6} style={{ textAlign: 'start' }}>{props.mproduct.dimension}</Col>
                        </Row>
                        <Row>
                            <Col xs={6} style={{ textAlign: 'end' }}><b>KOD:</b></Col>
                            <Col xs={6} style={{ textAlign: 'start' }}>{props.mproduct.code}</Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onHide}>
                        KAPAT
                    </Button>
                </Modal.Footer>
            </Modal>






            {/* <Modal {...props} size="md" centered>
                <Modal.Header closeButton>
                    <Modal.Title>AHŞAP MASA</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Carousel variant="dark" interval={4000}>
                                <Carousel.Item >
                                    <Col xs={12}>
                                        <img src={"../../../img/product/16.jpeg"}
                                            className="overlay-image d-block w-100" alt="Ahşap Masa" />
                                    </Col>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={"../../../img/product/ahsap-masa-beyaz.jpeg"}
                                        className="overlay-image d-block w-100" alt="Ahşap Masa" />
                                </Carousel.Item>
                            </Carousel>
                        </Row>
                        <Row>
                            <Col xs={6} style={{ textAlign: 'end' }}><b>TÜR:</b></Col>
                            <Col xs={6} style={{ textAlign: 'start' }}>Kiralık</Col>
                        </Row>
                        <Row>
                            <Col xs={6} style={{ textAlign: 'end' }}><b>RENK:</b></Col>
                            <Col xs={6} style={{ textAlign: 'start' }}>Beyaz</Col>
                        </Row>
                        <Row>
                            <Col xs={6} style={{ textAlign: 'end' }}><b>BOYUT:</b></Col>
                            <Col xs={6} style={{ textAlign: 'start' }}>-</Col>
                        </Row>
                        <Row>
                            <Col xs={6} style={{ textAlign: 'end' }}><b>KOD:</b></Col>
                            <Col xs={6} style={{ textAlign: 'start' }}>-</Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onHide}>
                        KAPAT
                    </Button>
                </Modal.Footer>
            </Modal> */}
        </div>
    )
}

export default ProductsModal;
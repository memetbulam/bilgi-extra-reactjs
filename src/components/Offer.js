import React, { useState, useContext } from "react";
import { ProductListContext } from '../contexts/ProductListContext';
import { Button, Container, Row, Col, Form, FormControl, FloatingLabel, Popover, OverlayTrigger } from "react-bootstrap";

const Offer = () => {
    const [showing, setShowing] = useState(false);
    const [nameValidate, setNameValidate] = useState(false);
    const [productValidate, setProductValidate] = useState(false);
    const { Products } = useContext(ProductListContext);

    const pCheckName = (
        <Popover id="popover-basic">
            <Popover.Header as="h6" className="text-center">HATA</Popover.Header>
            <Popover.Body>Lütfen isim giriniz!</Popover.Body>
        </Popover>
    );
    const pCheckProduct = (
        <Popover id="popover-basic">
            <Popover.Header as="h6" className="text-center">HATA</Popover.Header>
            <Popover.Body>Lütfen Ürün Seçiniz!</Popover.Body>
        </Popover>
    );


    const handleFormSubmit = e => {
        const offerName = e.target.elements.offerName.value;
        const offerProduct = e.target.elements.offerProduct.value;
        const offerText = e.target.elements.offerText.value;

        const index = document.getElementById("offerProduct").selectedIndex;
        const option = document.getElementById("offerProduct").options;

        if (offerName.trim() == "" || offerName == Number(offerName)) {
            setNameValidate(true);
            setTimeout(() => {
                setNameValidate(false);
            }, 3000);
        } else if (option[index].index == "0") {
            setProductValidate(true);
            setTimeout(() => {
                setProductValidate(false);
            }, 3000);
        } else {
            const url = new URL('https://api.whatsapp.com/send');
            url.searchParams.set('phone', '905318822031');
            url.searchParams.set('text', `${"İsim: " + offerName + "\nÜrün: " + offerProduct + "\nNot: " + offerText}`);
            window.location.href = window.open(url.href, '_blank');
        }
        e.preventDefault();
    }

    return (
        <div className={showing ? "offerMainContainer open" : "offerMainContainer"}>
            <div className="offerMainInner">
                {
                    showing === false ?
                        <div className="offerBtn">
                            <Button variant="dark" className="btn-default" onClick={() => setShowing(!showing)}>TEKLİF AL</Button>
                        </div> :
                        null
                }
                <Container className="offerContent">
                    <Row>
                        {
                            showing === true ?
                                <Col xs={1} className="d-flex justify-content-center align-items-center">
                                    <div className="offerBtn">
                                        <Button variant="dark" className="btn-default" onClick={() => setShowing(!showing)}>KAPAT</Button>
                                    </div>
                                </Col> :
                                null
                        }
                        <Col xs={11}>
                            {
                                showing ?
                                    <div>
                                        <Form noValidate onSubmit={handleFormSubmit}>

                                            <OverlayTrigger show={nameValidate} overlay={pCheckName}>
                                                <FloatingLabel label="İsim Giriniz" className="my-2">
                                                    <FormControl type="text" id="offerName" name="offerName"
                                                        placeholder="İsim" required />
                                                </FloatingLabel>
                                            </OverlayTrigger>

                                            <OverlayTrigger show={productValidate} overlay={pCheckProduct}>
                                                <FloatingLabel label="Ürün Seçiniz" className="mb-2">
                                                    <Form.Select id="offerProduct" name="offerProduct">
                                                        <option>Seçiniz</option>
                                                        {
                                                            Products.map(product => {
                                                                return <option key={product.id}>{product.name}</option>
                                                            })
                                                        }
                                                    </Form.Select>
                                                </FloatingLabel>
                                            </OverlayTrigger>


                                            <FloatingLabel label="İletişim Aracı Seçiniz" className="mb-2">
                                                <Form.Select disabled id="offerContact" name="offerContact">
                                                    <option>Whatsapp</option>
                                                </Form.Select>
                                            </FloatingLabel>

                                            <FloatingLabel label="Not Giriniz (İsteğe Bağlı)" className="mb-2">
                                                <FormControl as="textarea" id="offerText" name="offerText" placeholder="Not"
                                                    style={{ maxHeight: 250, minHeight: 100 }} />
                                            </FloatingLabel>

                                            <Button type="submit" variant="dark" className="btn-default w-100">TEKLİF AL</Button>
                                        </Form>
                                    </div>
                                    :
                                    null
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Offer;
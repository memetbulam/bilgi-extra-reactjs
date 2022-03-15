import React, { useContext, useState } from "react";
import { ProductListContext } from "../../contexts/ProductListContext";
import ProductsModal from './ProductsModal';
import { Container, Col, Row } from 'react-bootstrap';
import ProductImage from "./ProductImage";
import Offer from "../Offer";

const Products = () => {
    const { Products } = useContext(ProductListContext);
    const [modalShow, setModalShow] = useState(false);
    const [modalProduct, setModalProduct] = useState(false);

    return (
        <div style={{ marginTop: '150px' }}>
            <Container className="product">
                <div className="text-center">
                    <h1 className="text-uppercase my-5">ÜRÜNLER</h1>
                </div>
                <Row className="justify-content-center">
                    {
                        modalProduct ?
                            <ProductsModal show={modalShow} mproduct={modalProduct} onHide={() => setModalShow(false)} />
                            : ""
                    }
                    {
                        Products.map(product => {
                            return <Col key={product.id} lg={4} sm={6}>
                                <div className="product-item">
                                    <div className="hover-overlay-container" onClick={() => { setModalShow(true); setModalProduct(product) }}>
                                        <ProductImage pImage={product.images} />
                                        <div className="overlay-text-container">
                                            <div className="overlay-text">DETAY İÇİN TIKLAYINIZ</div>
                                        </div>
                                    </div>
                                    <div className="product-caption">
                                        <div className="product-caption-heading text-uppercase">{product.name}</div>
                                        <div className="product-caption-subheading text-muted">
                                            <b>TÜR:</b> {product.type}<br />
                                            <b>KOD:</b> {product.code}
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        })
                    }
                </Row>
            </Container >
            <Offer />
        </div >
    );
}

export default Products;
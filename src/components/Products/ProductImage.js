import React from 'react';
import { Carousel } from 'react-bootstrap';

const ProductImage = (props) => {
    return (
        <div>
            {
                props.pImage.length <= 1 ?
                    <img src={"../../../img/product/" + props.pImage[0].image} className="overlay-image d-block w-100"
                        alt={props.pImage[0].alt} />
                    :
                    <Carousel fade variant="dark"
                        controls={false} indicators={false} interval={2500} keyboard={false} pause={false} touch={false}>
                        <Carousel.Item >
                            <img src={"../../../img/product/" + props.pImage[0].image}
                                className="overlay-image d-block w-100" alt={props.pImage[0].alt} />
                            <div className="overlay-text-container">
                                <div className="overlay-text">DETAY İÇİN TIKLAYINIZ</div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={"../../../img/product/" + props.pImage[1].image}
                                className="overlay-image d-block w-100" alt={props.pImage[1].alt} />
                            <div className="overlay-text-container">
                                <div className="overlay-text">DETAY İÇİN TIKLAYINIZ</div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
            }
        </div>
    )
}

export default ProductImage;
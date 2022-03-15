import React from "react";
import { Container, Carousel, CarouselItem } from 'react-bootstrap';

const OurWork = () => {
    return (
        <div style={{ marginTop: '150px' }}>
            <Container className="our-work">
                <div className="text-center">
                    <h1 className="text-uppercase my-5">ÇALIŞMALARIMIZ</h1>
                </div>
                <Carousel interval={3000}>
                    <Carousel.Item >
                        <img src="../../img/our-work/D-1-2.png" className="w-100" alt="Fotoğraf" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="../../img/our-work/D-3-4.png" className="w-100" alt="Fotoğraf" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="../../img/our-work/D-5-6.png" className="w-100" alt="Fotoğraf" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="../../img/our-work/D-7-8.png" className="w-100" alt="Fotoğraf" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="../../img/our-work/D-9-10.png" className="w-100" alt="Fotoğraf" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="../../img/our-work/D-11-12.png" className="w-100" alt="Fotoğraf" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="../../img/our-work/Y-1.png" className="w-100" alt="Fotoğraf" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="../../img/our-work/Y-2.png" className="w-100" alt="Fotoğraf" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="../../img/our-work/Y-3.png" className="w-100" alt="Fotoğraf" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="../../img/our-work/Y-4.png" className="w-100" alt="Fotoğraf" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="../../img/our-work/Y-5.png" className="w-100" alt="Fotoğraf" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="../../img/our-work/Y-6.png" className="w-100" alt="Fotoğraf" />
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
}

export default OurWork;
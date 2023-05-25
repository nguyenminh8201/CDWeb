import React, {useState} from 'react';
import {Carousel} from 'react-bootstrap';

import "../css/slider.css"
function Slider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <section className="slider_section">
        <Carousel activeIndex={index} onSelect={handleSelect} interval={2800}>
            <Carousel.Item>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="detail-box">
                                <h1>Smart Watches</h1>
                                <p>
                                    Aenean scelerisque felis ut orci condimentum laoreet. Integer nisi nisl, convallis
                                    et augue sit amet,
                                    lobortis semper quam.
                                </p>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="img-box">
                                <img src="../images/slider-img.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="detail-box">
                                <h1>Smart Watches</h1>
                                <p>
                                    Aenean scelerisque felis ut orci condimentum laoreet. Integer nisi nisl, convallis
                                    et augue sit amet,
                                    lobortis semper quam.
                                </p>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="img-box">
                                <img src="../images/slider-img.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="detail-box">
                                <h1>Smart Watches</h1>
                                <p>
                                    Aenean scelerisque felis ut orci condimentum laoreet. Integer nisi nisl, convallis
                                    et augue sit amet,
                                    lobortis semper quam.
                                </p>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="img-box">
                                <img src="../images/slider-img.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
        </section>
    );
}

export default Slider;
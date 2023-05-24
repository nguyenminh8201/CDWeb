import React from 'react';
import {Link} from "react-router-dom";

const Product = () => {
    return (
        <section className="shop_section layout_padding">
            <div className="container">
                <div className="heading_container heading_center">
                    <h2>
                        Latest Watches
                    </h2>
                </div>
                <div className="row">
                    <div className="col-md-6 ">
                        <div className="box">
                            <Link to="/product-detail">
                                <div className="img-box">
                                    <img src="../images/w1.png" alt=""/>
                                </div>
                                <div className="detail-box">
                                    <h6>
                                        Smartwatch
                                    </h6>
                                    <h6>
                                        Price:
                                        <span>
                    $300
                  </span>
                                    </h6>
                                </div>
                                <div className="new">
                <span>
                  Featured
                </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="box">
                            <a href="">
                                <div className="img-box">
                                    <img src="../images/w2.png" alt=""/>
                                </div>
                                <div className="detail-box">
                                    <h6>
                                        Smartwatch
                                    </h6>
                                    <h6>
                                        Price:
                                        <span>
                    $125
                  </span>
                                    </h6>
                                </div>
                                <div className="new">
                <span>
                  New
                </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="box">
                            <a href="">
                                <div className="img-box">
                                    <img src="../images/w3.png" alt=""/>
                                </div>
                                <div className="detail-box">
                                    <h6>
                                        Smartwatch
                                    </h6>
                                    <h6>
                                        Price:
                                        <span>
                    $110
                  </span>
                                    </h6>
                                </div>
                                <div className="new">
                <span>
                  New
                </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="box">
                            <a href="">
                                <div className="img-box">
                                    <img src="../images/w4.png" alt=""/>
                                </div>
                                <div className="detail-box">
                                    <h6>
                                        Smartwatch
                                    </h6>
                                    <h6>
                                        Price:
                                        <span>
                    $145
                  </span>
                                    </h6>
                                </div>
                                <div className="new">
                <span>
                  New
                </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="box">
                            <a href="">
                                <div className="img-box">
                                    <img src="../images/w5.png" alt=""/>
                                </div>
                                <div className="detail-box">
                                    <h6>
                                        Smartwatch
                                    </h6>
                                    <h6>
                                        Price:
                                        <span>
                    $195
                  </span>
                                    </h6>
                                </div>
                                <div className="new">
                <span>
                  New
                </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-6  col-xl-3">
                        <div className="box">
                            <a href="">
                                <div className="img-box">
                                    <img src="../images/w6.png" alt=""/>
                                </div>
                                <div className="detail-box">
                                    <h6>
                                        Smartwatch
                                    </h6>
                                    <h6>
                                        Price:
                                        <span>
                    $170
                  </span>
                                    </h6>
                                </div>
                                <div className="new">
                <span>
                  New
                </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="box">
                            <a href="">
                                <div className="img-box">
                                    <img src="../images/w1.png" alt=""/>
                                </div>
                                <div className="detail-box">
                                    <h6>
                                        Smartwatch
                                    </h6>
                                    <h6>
                                        Price:
                                        <span>
                    $230
                  </span>
                                    </h6>
                                </div>
                                <div className="new">
                <span>
                  New
                </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="btn-box">
                    <a href="">
                        View All
                    </a>
                </div>
            </div>
        </section>

    );
};

export default Product;
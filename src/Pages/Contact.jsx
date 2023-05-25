import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
const Contact = () => {
    return (
        <div>
            <Header />
            <section className="contact_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form_container">
                                <div className="heading_container">
                                    <h2>
                                        Contact Us
                                    </h2>
                                </div>
                                <form action="src/Pages/Contact">
                                    <div>
                                        <input type="text" placeholder="Full Name " />
                                    </div>
                                    <div>
                                        <input type="email" placeholder="Email" />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Phone number" />
                                    </div>
                                    <div>
                                        <input type="text" className="message-box" placeholder="Message" />
                                    </div>
                                    <div className="d-flex ">
                                        <button>
                                            SEND
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="img-box">
                                <img src="../images/contact-img.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>

    );
};

export default Contact;
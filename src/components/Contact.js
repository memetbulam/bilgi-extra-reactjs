import React from "react";

const Contact = () => {
    return (
        <div style={{ marginTop: '150px' }}>
            <div className="contact container">
                <div className="text-center">
                    <h1 className="text-uppercase my-5">İLETİŞİM</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 border-right">
                            <iframe title="googleMap" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d752.7680373469141!2d28.803834!3d41.001794!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbeca76f8ba8271c1!2sBilgi%20Extra%20fuar%20malzemeleri%20kiralama!5e0!3m2!1str!2str!4v1638017422414!5m2!1str!2str"
                                style={{ width: '100%', height: '100%' }} />
                        </div>
                        <div className="col-lg-6">
                            <div className="row align-items-center mtop-contact">
                                <div className="col-3 contact-text-edit">
                                    <b>Adres:</b>
                                </div>
                                <div className="col-9">
                                    Kartaltepe Mahallesi Şadırvan Sokak No:7/A Küçükçekmece/İstanbul
                                </div>
                            </div>
                            <div className="row align-items-center my-4">
                                <div className="col-3 contact-text-edit">
                                    <b>Telefon:</b>
                                </div>
                                <div className="col-9" id="wp-number">Emre +90 531 882 20 31<br />Beraat +90 554 175 20 66</div>
                            </div>
                            <div className="row align-items-center mbottom-contact">
                                <div className="col-3 contact-text-edit">
                                    <b>E-Mail:</b>
                                </div>
                                <div className="col-9">info@bilgiextra.com</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
    return (
        <footer className="container footer py-5 align-items-end">
            <div className="row">
                <div className="col-lg-4 text-center">Tüm Hakları Saklıdır. &copy; 2021 Bilgi Extra</div>
                <div className="col-lg-8 my-3 my-lg-0 text-center">
                    <a className="btn btn-dark btn-social" target="_blank"
                        href="https://api.whatsapp.com/send?phone=905318822031">
                        <FontAwesomeIcon icon={['fab', 'whatsapp']} />
                    </a>
                    <a className="btn btn-dark btn-social mx-3" target="_blank"
                        href="https://www.instagram.com/bilgi_extra">
                        <FontAwesomeIcon icon={['fab', 'instagram']} />
                    </a>
                    <a className="btn btn-dark btn-social" href="mailto:info@bilgiextra.com">
                        <FontAwesomeIcon icon={['far', 'envelope']} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
// import { BsTwitter } from "react-icons/fa";
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';


function Footer() {
    
    return (
        <footer className="white-section" id="footer">
        <div className="container-fluid">
            <div className="social-icon">
                <div className="icon"><FaTwitter /></div>
                <div className="icon"><FaFacebook /></div>
                <div className="icon"><FaInstagram /></div>
            </div>
            <p>© Copyright 2022 JYH Hot Sauce Index</p>
        </div>
      </footer>
    );
}

export default Footer;
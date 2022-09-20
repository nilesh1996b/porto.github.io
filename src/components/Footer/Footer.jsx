import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import GitHub from '@iconscout/react-unicons/icons/uil-github'
import Whatsapp from '@iconscout/react-unicons/icons/uil-whatsapp'

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>nileshbind.nb@gmail.com</span>
        <div className="f-icons">
        <a href="https://www.linkedin.com/in/nileshbind/">
                    <Linkedin color='white' size='3rem'/>
                </a>    
                
                <a href="https://github.com/nilesh1996b">
                    <GitHub color='white' size='3rem'/>
                </a>

                <a href="https://wa.me/7678014861?text=Thank%20you%20for%20Your%20Intrest!">
                    <Whatsapp color='white' size='3rem'/>    
                </a> 
        </div>
      </div>
    </div>
  );
};

export default Footer;

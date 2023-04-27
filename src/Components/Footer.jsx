// import React from 'react'
import "../Css/footer.css";
import {
  FacebookIcon,
  TwitterIcon,
  VKIcon,
  EmailIcon,
  LinkedinIcon,
  MailruIcon,
  TelegramIcon,
} from "react-share";
const Footer = () => {
  return (
    <div className="footer">
     <div className="info">
        Email : newsify@gamil.com
      </div>
      <div className="iconsContainer">
          <FacebookIcon size={30} round={true} style={{marginRight:"10px"}}/>
          <TwitterIcon size={30} round={true}  style={{marginRight:"10px"}}/>
          <VKIcon size={30} round={true}  style={{marginRight:"10px"}}/>
          <EmailIcon size={30} round={true}  style={{marginRight:"10px"}}/>
          <LinkedinIcon size={30} round={true} style={{marginRight:"10px"}} />
          <MailruIcon size={30} round={true} style={{marginRight:"10px"}} />
          <TelegramIcon size={30} round={true} style={{marginRight:"10px"}} />
      </div>
      <div className="info">
       Phone : +1 234 234 234
      </div>
    </div>
  );
};

export default Footer;

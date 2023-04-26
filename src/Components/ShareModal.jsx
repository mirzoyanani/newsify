
import {
  FacebookShareButton,
  FacebookIcon,

  WhatsappShareButton,
  WhatsappIcon,
 
  TwitterShareButton,
  TwitterIcon,

  ViberShareButton,
  ViberIcon,

  VKShareButton,
  VKIcon,

  EmailShareButton,
  EmailIcon,

  LinkedinShareButton,
  LinkedinIcon,

  MailruShareButton,
  MailruIcon,

  TelegramShareButton,
  TelegramIcon,

 
} from "react-share";

// eslint-disable-next-line react-refresh/only-export-components
const ShareModal = ({onClose}) => {
    let url = window.location.href;
    const shareUrl = url;
    return (
      <div  className="shareModal"
      >
           <div className="closeBtn"> <button onClick={onClose}><i className="fa fa-close" style={{fontSize:"24px",border:"none"}}></i></button></div>
        <div className="sharemodalTitle">Share with</div>
        <FacebookShareButton
          url={shareUrl}
          quote={"Title or jo bhi aapko likhna ho"}
          hashtag={"#portfolio..."} 
          className="icon"
        >
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>

        <WhatsappShareButton
          url={shareUrl}
          quote={"Title or jo bhi aapko likhna ho"}
          hashtag={"#portfolio..."}
          className="icon"
        >
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>
        <TwitterShareButton
          url={shareUrl}
          quote={"Title or jo bhi aapko likhna ho"}
          hashtag={"#portfolio..."}
          className="icon"
        >
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>


        <ViberShareButton
          url={shareUrl}
          quote={"Title or jo bhi aapko likhna ho"}
          hashtag={"#portfolio..."}
          className="icon"
        >
          <ViberIcon size={40} round={true} />
        </ViberShareButton>
       
        <VKShareButton
          url={shareUrl}
          quote={"Title or jo bhi aapko likhna ho"}
          hashtag={"#portfolio..."}
          className="icon"
        >
          <VKIcon size={40} round={true} />
        </VKShareButton>

        <EmailShareButton
          url={shareUrl}
          quote={"Title or jo bhi aapko likhna ho"}
          hashtag={"#portfolio..."}
          className="icon"
        >
          <EmailIcon size={40} round={true} />
        </EmailShareButton>

        <LinkedinShareButton
          url={shareUrl}
          quote={"Title or jo bhi aapko likhna ho"}
          hashtag={"#portfolio..."}
          className="icon"
        >
          <LinkedinIcon size={40} round={true} />
        </LinkedinShareButton>

        <MailruShareButton
          url={shareUrl}
          quote={"Title or jo bhi aapko likhna ho"}
          hashtag={"#portfolio..."}
          className="icon"
        >
          <MailruIcon size={40} round={true} />
        </MailruShareButton>

        <TelegramShareButton
          url={shareUrl}
          quote={"Title or jo bhi aapko likhna ho"}
          hashtag={"#portfolio..."}
          className="icon"
        >
          <TelegramIcon size={40} round={true} />
        </TelegramShareButton>
       
      </div>
    );};
    
    export default ShareModal;
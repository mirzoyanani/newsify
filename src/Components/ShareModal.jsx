
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
const ShareModal = () => {
    let url = window.location.href;
    const shareUrl = url;
    return (
      <div
        style={{
          background: "#0000",
          height: "100vh",
          width: "100%",
        }}
      >
        <FacebookShareButton
          url={shareUrl}
          quote={"Title or jo bhi aapko likhna ho"}
          hashtag={"#portfolio..."}
        >
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>

        <WhatsappShareButton
          url={shareUrl}
          quote={"Title or jo bhi aapko likhna ho"}
          hashtag={"#portfolio..."}
        >
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>
        <TwitterShareButton
          url={shareUrl}
          quote={"Title or jo bhi aapko likhna ho"}
          hashtag={"#portfolio..."}
        >
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>


        <ViberShareButton
          url={shareUrl}
          quote={"Title or jo bhi aapko likhna ho"}
          hashtag={"#portfolio..."}
        >
          <ViberIcon size={40} round={true} />
        </ViberShareButton>
       
        <VKShareButton
          url={shareUrl}
          quote={"Title or jo bhi aapko likhna ho"}
          hashtag={"#portfolio..."}
        >
          <VKIcon size={40} round={true} />
        </VKShareButton>

        <EmailShareButton
          url={shareUrl}
          quote={"Title or jo bhi aapko likhna ho"}
          hashtag={"#portfolio..."}
        >
          <EmailIcon size={40} round={true} />
        </EmailShareButton>

        <LinkedinShareButton
          url={shareUrl}
          quote={"Title or jo bhi aapko likhna ho"}
          hashtag={"#portfolio..."}
        >
          <LinkedinIcon size={40} round={true} />
        </LinkedinShareButton>

        <MailruShareButton
          url={shareUrl}
          quote={"Title or jo bhi aapko likhna ho"}
          hashtag={"#portfolio..."}
        >
          <MailruIcon size={40} round={true} />
        </MailruShareButton>

        <TelegramShareButton
          url={shareUrl}
          quote={"Title or jo bhi aapko likhna ho"}
          hashtag={"#portfolio..."}
        >
          <TelegramIcon size={40} round={true} />
        </TelegramShareButton>
      </div>
    );};

    
    export default ShareModal;
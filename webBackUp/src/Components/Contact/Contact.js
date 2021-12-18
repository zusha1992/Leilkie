import classes from "./Contact.module.scss";
import ContactItem from "./ContactItem";
import { useState } from "react";

function Contact({ isMobile }) {
  const [activeContactId, setActiveContactId] = useState(-1);

  return (
    <div className={classes.contactBackDrop}>
      <div
        className={classes.credits}
        style={{ fontSize: isMobile ? "2.5vw" : "14pt" }}
      >
        Designed by Noam Shochat
      </div>

      <div
        className={classes.contact}
        onMouseEnter={() => {
          setActiveContactId(0);
        }}
        onMouseLeave={() => {
          setActiveContactId(-1);
        }}
      >
        <ContactItem
          path="url('/Icons/instagramIcon.png')"
          url="https://www.instagram.com/leikieglick/"
          id={1}
          activeId={activeContactId}
          setActiveContactId={setActiveContactId}
        />
        <ContactItem
          path="url('/Icons/facebook.png')"
          url="https://www.facebook.com/leikie.glick"
          id={2}
          activeId={activeContactId}
          setActiveContactId={setActiveContactId}
        />
        <ContactItem
          path="url('/Icons/mailIcon.png')"
          url="https://leikieglick.com/Contact"
          id={3}
          activeId={activeContactId}
          setActiveContactId={setActiveContactId}
        />
        <ContactItem
          path="url('/Icons/youtube.png')"
          url="https://www.youtube.com/channel/UCcCm7YgPLzCHWLXi1GckaiQ/featured"
          id={4}
          activeId={activeContactId}
          setActiveContactId={setActiveContactId}
        />
      </div>
    </div>
  );
}

export default Contact;

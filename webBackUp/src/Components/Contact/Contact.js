import classes from "./Contact.module.scss";
import ContactItem from "./ContactItem";
import { useState } from "react";

function Contact() {
  const [activeContactId, setActiveContactId] = useState(0);
  return (
    <div className={classes.contact}>
      <ContactItem
        path="url('/Icons/instagramIcon.png')"
        url="https://www.instagram.com/leikieglick/"
        id={1}
        activeId={activeContactId}
        setActiveContactId={setActiveContactId}
        text="leikieglick"
      />
      <ContactItem
        path="url('/Icons/facebook.png')"
        url="https://www.facebook.com/leikie.glick"
        id={2}
        activeId={activeContactId}
        setActiveContactId={setActiveContactId}
        text="leikie.glick"
      />
      <ContactItem
        path="url('/Icons/mailIcon.png')"
        url=""
        id={3}
        activeId={activeContactId}
        setActiveContactId={setActiveContactId}
        text="leikie.glick@gmail.com"
      />
      <ContactItem
        path="url('/Icons/youtube.png')"
        url="https://www.youtube.com/channel/UCcCm7YgPLzCHWLXi1GckaiQ/featured"
        id={4}
        activeId={activeContactId}
        setActiveContactId={setActiveContactId}
        text="leikie.glick@gmail.com"
      />
    </div>
  );
}

export default Contact;

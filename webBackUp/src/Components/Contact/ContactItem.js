import classes from "./ContactItem.module.scss";

function ContactItem({ path, url, setActiveContactId, id, activeId }) {
  let iconWrapperClass = `${classes.iconWrapper}`;
  if (activeId === id) {
    iconWrapperClass = `${classes.iconWrapper} ${classes.colorOn}`;
  } else if (activeId !== 0) {
    iconWrapperClass = `${classes.iconWrapper} ${classes.colorOff}`;
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      style={{ position: "relative", width: "35px", height: "35px" }}
    >
      <div
        className={iconWrapperClass}
        onMouseOver={() => setActiveContactId(id)}
        onMouseOut={() => setActiveContactId(0)}
      >
        <div
          className={classes.icon}
          style={{
            maskImage: path,
            WebkitMaskImage: path,
          }}
        />
      </div>
    </a>
  );
}

export default ContactItem;

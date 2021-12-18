import Banner from "../Banner/Banner";
import { Formik, Form } from "formik";
import InputField from "./InputField";
import classes from "./ContactForm.module.scss";

function ContactForm({ isMobile }) {
  let formLayout = isMobile
    ? `${classes.mobileInputNames}`
    : `${classes.inputNames}`;

  let rowWidth = isMobile ? 100 : 47.5;
  return (
    <div className={classes.home}>
      <Banner
        bgImage="/pictures/Leikie3.jpg"
        header="Contact"
        isMobile={isMobile}
      />
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", message: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.firstName) {
            errors.firstName = "Required";
          }
          if (!values.lastName) {
            errors.lastName = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form
            className={classes.wrapper}
            style={{ width: isMobile ? "85%" : "50%" }}
            onScroll={Formik.handleSubmit}
          >
            <div className={formLayout}>
              <InputField
                name="firstName"
                title="First Name"
                width={rowWidth}
                height={50}
                placeholder="Noam"
              />
              <InputField
                name="lastName"
                title="Last Name"
                width={rowWidth}
                height={50}
                placeholder="Shochat"
              />
            </div>
            <InputField
              name="email"
              title="Email"
              width={100}
              height={50}
              placeholder="Noamshochat18@gmail.com"
            />
            <InputField
              name="message"
              title="Message"
              width={100}
              height={200}
              placeholder="write your message here!"
            />
            <button
              className={classes.button}
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
      {/* <script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"
      ></script> */}
    </div>
  );
}

export default ContactForm;

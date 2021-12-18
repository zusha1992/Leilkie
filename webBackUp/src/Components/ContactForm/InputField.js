import classes from "./InputField.module.scss";

import { Formik, Form, Field, ErrorMessage } from "formik";

function InputField({ title, width, height, placeholder, name }) {
  return (
    <div
      className={classes.wrapper}
      style={{ width: width + "%", height: height + 40 + "px" }}
    >
      <div className={classes.title}>{title}</div>
      <Field
        className={classes.input}
        type="textarea"
        name={name}
        placeholder={placeholder}
        style={{ height: height }}
      />
      <ErrorMessage name={name} component="div" className={classes.error} />
    </div>
  );
}

export default InputField;

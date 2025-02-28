import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import * as Yup from "yup";

import { registerThunk } from "../../redux/auth/operations";

import styles from "./RegistrationForm.module.css";
import { Link } from "react-router-dom";

let EMAIL_REGX =
  "^[a-zA-Z0-9]+([._-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+([.-][0-9a-zA-Z]+)*.[a-zA-Z]{2,}$";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    email: Yup.string().matches(EMAIL_REGX, "Invalid email address"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(registerThunk(values))
      .unwrap()
      .then((response) =>
        toast.success(
          `Congratulation, you have created an account just now,${response.user.name}`
        )
      )
      .catch(() => toast.error("Invalid data or don't have an account"));
    actions.resetForm();
  };

  return (
    <div className={styles.formDiv}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={styles.form}>
          <label className={styles.formField}>
            <span>Name:</span>
            <Field className={styles.formInput} name="name" type="text" />
            <ErrorMessage
              className={styles.inputError}
              name="name"
              component="span"
            />
          </label>
          <label className={styles.formField}>
            <span>Email:</span>
            <Field className={styles.formInput} name="email" type="emeil" />
            <ErrorMessage
              className={styles.inputError}
              name="email"
              component="span"
            />
          </label>
          <label className={styles.formField}>
            <span>Password:</span>
            <Field
              className={styles.formInput}
              name="password"
              type="password"
            />
          </label>
          <button className={styles.formBtn} type="submit">
            Register
          </button>
          <p className={styles.registerText}>
            Already have an account?{" "}
            <Link className={styles.registerLink} to="/login">
              Log in
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;

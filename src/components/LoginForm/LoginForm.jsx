import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import toast from "react-hot-toast";

import styles from "./LoginForm.module.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(loginThunk(values))
      .unwrap()
      .then((response) => toast.success(`Hello ${response.user.name}`))
      .catch(() => toast.error("Invalid data or don't have an account"));
    actions.resetForm();
  };
  return (
    <div className={styles.formDiv}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={styles.form}>
          <label className={styles.formField}>
            <span>Email:</span>
            <Field className={styles.formInput} name="email" />
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
            Login
          </button>
          <p className={styles.registerText}>
            Don't have an account?{" "}
            <Link className={styles.registerLink} to="/register">
              Register!
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;

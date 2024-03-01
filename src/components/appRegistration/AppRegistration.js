import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchRegistration,
  fetchIsUserNameExist,
} from "../appSearchedItemsByName/moviesSlice";
import * as Yup from "yup";
import Spinner from "../Spinner/Spinner";

import "./AppRegistration.scss";

const AppRegistration = () => {
  const dispatch = useDispatch();
  let status = useSelector((state) => state.movies.loadingUserDataStatus);
  const user = useSelector((state) => state.movies.user);
  const userName = useSelector((state) => state.movies.isUserNameExist);
  const [loginValue, setLoginValue] = useState("");

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const checkIsUserNameExist = (event) => {
    dispatch(fetchIsUserNameExist(event.target.value));
  };

  useEffect(() => {}, [user, status]);

  if (status === "loading") {
    return (
      <div className="container">
        <div
          className="spinner_wrapper"
          style={{ textAlign: "center", marginTop: "120px" }}
        >
          <Spinner />
        </div>
      </div>
    );
  }

  // if (status === "error") {
  //   return (
  //     <div className="container">
  //       <h2 style={{ textAlign: "center", marginTop: "20px" }}>
  //         <span style={{ color: "red" }}>Error!</span> User with the same name
  //         already exists
  //       </h2>
  //       <button onClick={() => (status = "idle")}>Try again!</button>
  //     </div>
  //   );
  // }

  if (user != null) {
    return (
      <div className="container">
        <h2 style={{ textAlign: "center", marginTop: "20px" }}>
          <br /> Please confirm your email
        </h2>
      </div>
    );
  }

  if (user == null) {
    return (
      <div className="container">
        <section className="login">
          <div className="error">
            <h2
              style={{
                textAlign: "center",
                marginTop: "20px",
                color: status === "error" ? "black" : "white",
              }}
            >
              <span
                style={{
                  color: status === "error" ? "red" : "white",
                }}
              >
                Error!
              </span>{" "}
              User with the same name already exists
            </h2>
            {/* <button onClick={() => (status = "idle")}>Try again!</button> */}
          </div>
          <div className="login__header">
            <h2>Registartion</h2>
          </div>
          <div className="login__form">
            <Formik
              initialValues={{
                login: loginValue,
                password: "",
                confirmPassword: "",
                email: "",
              }}
              validationSchema={Yup.object({
                login: Yup.string()
                  .min(2, "Must be at least 2 letters")
                  .required("This field is required"),
                password: Yup.string().required("This field is required"),
                confirmPassword: Yup.string().required(
                  "This field is required"
                ),
                email: Yup.string().required("This field is required"),
              })}
              onSubmit={(values) => {
                const user = {
                  username: values.login,
                  password: values.password,
                  confirmPassword: values.confirmPassword,
                  email: values.email,
                };
                dispatch(fetchRegistration(user));
                setLogin(values.login);
                setPassword(values.password);
                setConfirmPassword(values.confirmPassword);
                setEmail(values.email);
                // values.login = "";
                // values.password = "";
                // values.confirmPassword = "";
                // values.email = "";
              }}
            >
              <Form className="form">
                <Field
                  // onBlur={(e) => {
                  //   checkIsUserNameExist(e);
                  // }}
                  // onChange={(e) => {
                  //   setLoginValue(e.target.value);
                  // }}
                  // value={loginValue}
                  name="login"
                  className="login__input"
                  placeholder="Enter your login"
                  type="text"
                  style={{
                    backgroundColor: userName ? "#f09398" : "white",
                  }}
                />
                {/* <h6
                    style={{
                      color: "red",
                      display: !userName || toggle ? "none" : "block",
                      marginLeft: "10px",
                    }}
                  >
                    User with user name "{loginValue}" already exists
                  </h6> */}
                <Field
                  name="password"
                  className="login__input"
                  placeholder="Enter your password"
                  type="password"
                />
                <Field
                  name="confirmPassword"
                  className="login__input"
                  placeholder="Confirm your password"
                  type="password"
                />
                {/* <ErrorMessage
                    style={{ color: "red", marginLeft: "5px" }}
                    className="error"
                    name="confirmPassword"
                    component="div"
                  /> */}
                <Field
                  name="email"
                  className="login__input"
                  placeholder="Enter your email"
                  type="email"
                />
                <button type="submit">Sing up</button>
              </Form>
            </Formik>
          </div>
        </section>
      </div>
    );
  }
};

export default AppRegistration;

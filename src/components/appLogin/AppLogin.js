import "./AppLogin.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchJwtToken } from "../appSearchedItemsByName/moviesSlice";

const AppLogin = () => {
  const dispatch = useDispatch();
  const jwtToken = useSelector((state) => state.movies.jwtToken);

  useEffect(() => {
    console.log(jwtToken);
  }, [jwtToken]);

  return (
    <div className="container">
      <section className="login">
        <div className="login__header">
          <h2>Sign in</h2>
        </div>
        <div className="login__form">
          <Formik
            initialValues={{
              login: "",
              password: "",
            }}
            onSubmit={(values) => {
              const user = {
                username: values.login,
                password: values.password,
              };
              dispatch(fetchJwtToken(user));
              values.login = "";
              values.password = "";
            }}
          >
            <Form className="form">
              <Field
                name="login"
                className="login__input"
                placeholder="Enter your login"
                type="text"
              />
              <Field
                name="password"
                className="login__input"
                placeholder="Enter your password"
                type="password"
              />
              <button type="submit">Log in</button>
            </Form>
          </Formik>
        </div>
      </section>
    </div>
  );
};

export default AppLogin;

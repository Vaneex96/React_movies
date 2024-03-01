import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchConfirmEmail } from "../appSearchedItemsByName/moviesSlice";

import "./AppRegistrationConfirmed.scss";
import { useParams } from "react-router-dom";

function AppRegistrationConfirmed() {
  const dispatch = useDispatch();
  const activationStatus = useSelector(
    (state) => state.movies.activationAccountStatusLoading
  );

  const params = useParams("code");
  console.log(params.code);

  useEffect(() => {
    dispatch(fetchConfirmEmail(params.code));
  }, []);

  //   if (activationStatus === "done") {
  return (
    <div className="container">
      <section className="success_section">
        <h4 className="success_title">
          Registration completed{" "}
          <span style={{ color: "green" }}>successfully!</span>
        </h4>
        <a href="/login">Log in</a>
      </section>
    </div>
  );
  //   }

  //   if (activationStatus === "error") {
  //     return (
  //       <div className="container">
  //         <section className="success_section">
  //           <h4 className="success_title">
  //             Something went <span style={{ color: "red" }}>wrong.</span>
  //             <br />
  //             Try again!
  //           </h4>
  //         </section>
  //       </div>
  //     );
  //   }
}

export default AppRegistrationConfirmed;

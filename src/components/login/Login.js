import React, { useState } from "react";
import { Container } from "react-bootstrap";
import SessionFood from "../sessionFood/SessionFood";
import { Formik, Field, Form } from "formik";
import "./Login.scss";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("This Field is required").email(),
    password: Yup.string().required("This Field is required"),
  });

  const handleSubmit = ({ email, password }) => {
    if (email == "admin@gmail.com" && password === "admin") {
      navigate("../manager");
    } else {
      alert("You aren't Manager");
    }
  };
  return (
    <div>
      <SessionFood title="Login As Manager"></SessionFood>
      <Container>
        <h5 className="title">Login As Manager </h5>
        <Formik
          initialValues={form}
          enableReinitialize="true"
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={validationSchema}
        >
          {({ errors, touched }) => (
            <Form className="formLogin">
              <Field
                onChange={(e) => {
                  setForm({ ...form, [e.target.name]: e.target.value });
                }}
                value={form.email}
                className="input"
                name="email"
                placeholder="Enter Your Email"
              />
              {errors.email && touched.email ? (
                <div className="warning">{errors.email}</div>
              ) : null}
              <Field
                type="password"
                onChange={(e) =>
                  setForm({ ...form, [e.target.name]: e.target.value })
                }
                value={form.password}
                className="input"
                name="password"
                placeholder="Enter Your password"
              />
              {errors.password && touched.password ? (
                <div className="warning">{errors.password}</div>
              ) : null}
              <button type="submit" className="btn">
                Login
              </button>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import "./Checkout.scss";
import SessionFood from "../../components/sessionFood/SessionFood";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import userSlice from "../../redux/userSlice";
import { getCart } from "../../redux/selector";
function Checkout() {
  const dispatch = useDispatch();
  // const [shiping, setShipping] = useState(0);
  const shipping = 5;
  const currCart = useSelector(getCart);
  const subtotal = currCart.reduce(
    (res, curr) => (res += curr.count * curr.price),
    0
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    postalCode: "",
  });

  const validate = Yup.object().shape({
    name: Yup.string().required("This field is required! "),
    email: Yup.string()
      .required("This field is required! ")
      .email("this field must be email"),
    phone: Yup.string()
      .required("This field is required! ")
      .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "Phone is not true"),
    country: Yup.string().required("This field is required!"),
    city: Yup.string().required("This field is required!"),
    postalCode: Yup.string().required("This field is required!"),
  });

  const handleSubmit = (value) => {
    alert(`Success! Name : ${value.name}`);
    setForm({
      name: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      postalCode: "",
    });
    dispatch(userSlice.actions.checkout());
  };

  return (
    <>
      <SessionFood title="Checkout"></SessionFood>
      <Container>
        <div className="checkout">
          <div className="checkout-form">
            <h6 className="title">Shipping Address</h6>
            <Formik
              initialValues={form}
              enableReinitialize="true"
              validationSchema={validate}
              onSubmit={(values) => handleSubmit(values)}
            >
              {({ errors, touched }) => (
                <Form className="form">
                  <Field
                    placeholder="Enter your name"
                    className="input"
                    name="name"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, [e.target.name]: e.target.value })
                    }
                  />
                  {errors.name && touched.name ? (
                    <div className="warning">{errors.name}</div>
                  ) : null}

                  <Field
                    placeholder="Enter your email"
                    className="input"
                    name="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, [e.target.name]: e.target.value })
                    }
                  />
                  {errors.email && touched.email ? (
                    <div className="warning">{errors.email}</div>
                  ) : null}

                  <Field
                    placeholder="Phone Number"
                    className="input"
                    name="phone"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, [e.target.name]: e.target.value })
                    }
                  />
                  {errors.phone && touched.phone ? (
                    <div className="warning">{errors.phone}</div>
                  ) : null}

                  <Field
                    placeholder="Your Country"
                    className="input"
                    name="country"
                    value={form.country}
                    onChange={(e) =>
                      setForm({ ...form, [e.target.name]: e.target.value })
                    }
                  />
                  {errors.country && touched.country ? (
                    <div className="warning">{errors.country}</div>
                  ) : null}

                  <Field
                    placeholder="Your City"
                    className="input"
                    name="city"
                    value={form.city}
                    onChange={(e) =>
                      setForm({ ...form, [e.target.name]: e.target.value })
                    }
                  />
                  {errors.city && touched.city ? (
                    <div className="warning">{errors.city}</div>
                  ) : null}

                  <Field
                    placeholder="ZIP Code"
                    className="input"
                    name="postalCode"
                    value={form.postalCode}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                  {errors.postalCode && touched.postalCode ? (
                    <div className="warning">{errors.postalCode}</div>
                  ) : null}

                  <button className="submit" type="submit">
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          <div className="detail">
            <h4 className="subtotal">
              <span className="sub-title">Subtotal :</span>{" "}
              <span className="custom">${subtotal}</span>
            </h4>
            <h4 className="shipping">
              <span className="sub-title">Shipping :</span>{" "}
              <span className="custom">${shipping}</span>
            </h4>
            <h3 className="total">
              <span className="sub-title">Total :</span>{" "}
              <span className="custom">${subtotal + shipping}</span>
            </h3>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Checkout;

import React from 'react';
import { useFormik } from 'formik';
import './index.css';


function Nav() {

    const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        onSubmit: (values) => {
          alert("Login Successful");
        },
        validate: (values) => {
          let errors = {};
          if (!values.email){ errors.email = "field required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          if (!values.password) errors.password = "field required";
          return errors;
        },
      });

      return (

    <div className='container'>
        <div className='form-box'>
        <h1 id="title">Formik Form</h1>
      <form
       onSubmit={formik.handleSubmit}
       className='input-group'>
        <label>Email</label>
        <input
          id="emailField"
          name="email"
          placeholder="jane@acme.com"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="input-field"
          type="email"
        />
        {formik.errors.email ? (
            <div id="emailError" className='error'>{formik.errors.email}</div>
        ) : null}
        <div>
        <label>Password</label>
        <input
        id="pswField"
         type="password"
         placeholder="*********"
         className="input-field"
         onChange={formik.handleChange}
         value={formik.values.password}
         name="password"
         ></input>
         {formik.errors.password ? (
            <div id='pswError'className='error'>{formik.errors.password}</div>
         ) : null}
         </div>
        <button id='submitBtn' type="submit" className='submit-btn'>Submit</button>
      </form>
  </div>
  </div>
);
};

export default Nav;
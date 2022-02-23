import React from "react";
import { Formik } from "formik";

const FirstExample = () => (
  <Formik
    initialValues={{ name: "", email: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));

        setSubmitting(false);
      }, 400);
    }}
    validate={(values) => {
      let errors = {};
      if (!values.name) {
        errors.name = "Name is required";
      }
      return errors;
    }}
    validateOnBlur={false}
  >
    {({
      handleSubmit,
      handleChange,
      values,
      errors,
      touched,
      handleBlur,
      isSubmitting
    }) => (
      <form onSubmit={handleSubmit}>
        <h2>Form touched example</h2>
        <div>
          <input
            onBlur={handleBlur}
            name="name"
            onChange={handleChange}
            value={values.name}
            type="text"
            placeholder="Name"
          />
          {errors.name && touched.name && <div>{errors.name}</div>}
        </div>
        <div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </div>
      </form>
    )}
  </Formik>
);

export default FirstExample;

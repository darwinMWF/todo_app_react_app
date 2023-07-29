import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import "./form.css";


// const validate = (values) => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "Required";
//   } else if (values.firstName.length > 15) {
//     errors.firstName = "Must be 15 characters or less";
//   }

//   if (!values.lastName) {
//     errors.lastName = "Required";
//   } else if (values.lastName.length > 20) {
//     errors.lastName = "Must be 20 characters or less";
//   }

//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email address";
//   }

//   return errors;
// };

export const Signup = () => {
  const { handleChange, handleBlur, handleSubmit, errors, values, touched } =
    useFormik({
      initialValues: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: Yup.object().shape({
        firstname: Yup.string()
          .min(4, "name should be more 4 character")
          .required("Required"),
        lastname: Yup.string()
          .min(4, "lastname should have more than 4 character")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .matches(
            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            "Minimum eight characters, at least one letter and one number"
          )
          .required("Required"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "password is not match")
          .required("Required"),
      }),
      onSubmit: async (values, action) => {
        console.log(values)
       try{
          const response = await axios.post("http://localhost:3000/data",values);
          console.log(response.data)
       }catch(err){
          alert(err.message)
       }

        action.resetForm();
      },
    });

  // console.log(errors);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">Name</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstname}
          className={errors.firstname && touched.firstname ? "input-error" : ""}
        />
        {touched.firstname && errors.firstname ? (
          <div>{errors.firstname}</div>
        ) : null}
        <br />
        <label htmlFor="lastname">lastName</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastname}
          className={errors.lastname && touched.lastname ? "input-error" : ""}
        />
        {touched.lastname && errors.lastname ? (
          <div>{errors.lastname}</div>
        ) : null}
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          className={errors.email && touched.email ? "input-error" : ""}
        />
        {touched.email && errors.email ? <div>{errors.email}</div> : null}
        <br />
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          className={errors.password && touched.password ? "input-error" : ""}
        />
        {touched.password && errors.password ? (
          <div>{errors.password}</div>
        ) : null}
        <br />
        <label htmlFor="confirmPassword">confirmPassword</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.confirmPassword}
          className={
            errors.confirmPassword && touched.confirmPassword
              ? "input-error"
              : ""
          }
        />
        {touched.confirmPassword && errors.confirmPassword ? (
          <div>{errors.confirmPassword}</div>
        ) : null}
        <br />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

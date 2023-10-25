import React from "react";
import styles from "./signup.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup
    .string("must be string")
    .required("Firstname must be required"),
  lastName: yup.string("must be string").required("Firstname must be required"),
  email: yup
    .string("It must be string")
    .email("must be string")
    .required("Firstname must be required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,}$/,
      "Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, one number, and one special character (@, #, $, %, ^, &, +, =, !)"
    ),
});

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const submitHandler = (data) => {
    console.table("data", data);
  };
  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
        <h2 className="">Welcome to NextGPT</h2>
        <div className={styles.formGroup}>
          <label className="label">FirstName</label>
          <input type="text" name="firstName" {...register("firstName")} />
          <div className={styles.errorDiv}>
            <p className={styles.error}>{errors.firstName?.message}</p>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className="label">LastName</label>
          <input type="text" name="lastName" {...register("lastName")} />
          <div className={styles.errorDiv}>
            <p className={styles.error}>{errors.lastName?.message}</p>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className="label">Email</label>
          <input type="email" name="email" {...register("email")} />
          <div className={styles.errorDiv}>
            <p className={styles.error}>{errors.email?.message}</p>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className="label">Password</label>
          <input type="password" name="password" {...register("password")} />
          <div className={styles.errorDiv}>
            <p className={styles.error}>{errors.password?.message}</p>
          </div>
        </div>
        <button
          className={
            errors.firstName ||
            errors.lastName ||
            errors.email ||
            errors.password
              ? styles.SignupBtnInvalid
              : styles.SignupBtn
          }
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Signup;

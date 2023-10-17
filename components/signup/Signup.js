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
});

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const submitHandler = (data) => {
    console.table("data", data);
  };
  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
        <h2>Login Here</h2>
        <div className={styles.formGroup}>
          <label>FirstName</label>
          <input type="text" name="firstName" {...register("firstName")} />
        </div>
        <div className={styles.formGroup}>
          <label>LastName</label>
          <input type="text" name="lastName" {...register("lastName")} />
        </div>
        <div className={styles.formGroup}>
          <label>email</label>
          <input type="email" name="email" {...register("email")} />
        </div>
        <button>Register</button>
      </form>
    </div>
  );
};

export default Signup;

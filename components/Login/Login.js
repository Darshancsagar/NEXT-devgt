import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: string("Must be string")
    .required("Email must be required")
    .email("Please enter vaild email"),
  password: s,
});

const Login = () => {
  const {
    register,
    formState: { erorrs },
    handleSubmit,
  } = useForm({});
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit()}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

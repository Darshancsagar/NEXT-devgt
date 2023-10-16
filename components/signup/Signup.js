import React from "react";
import styles from "./signup.module.css";

const Signup = () => {
  return (
    <div>
      <form className={styles.form}>
        <h2>Login Here</h2>
        <div className={styles.formGroup}>
          <label>FirstName</label>
          <input type="text" name="firstName" />
        </div>
        <div className={styles.formGroup}>
          <label>LastName</label>
          <input type="text" name="lastName" />
        </div>
        <div className={styles.formGroup}>
          <label>email</label>
          <input type="email" name="email" />
        </div>
      </form>
    </div>
  );
};

export default Signup;

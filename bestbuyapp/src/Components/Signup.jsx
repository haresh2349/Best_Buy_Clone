import React, { useState } from "react";
import styles from "../Style/Signin.module.css";
import Switch from "@mui/material/Switch";
import Input from "@mui/material/TextField";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import { Link } from "react-router-dom";
const Signup = () => {
  const [signInData, setSignInData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignInData({
      ...signInData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.s_wrapper}>
      <div className={styles.s_container}>
        <div className={styles.s_body}>
          <div className={styles.heading}>
            <p>Create an Account</p>
            <p className={styles.small}>
              Shopping for your business?{" "}
              <span> Create a business account.</span>
            </p>
          </div>
          <div className={styles.form}>
            <form onSubmit={handleSubmit}>
              <div className={styles.f_item}>
                <Input
                  label="First Name"
                  type={""}
                  name="firstname"
                  onChange={handleChange}
                  size="small"
                  variant="outlined"
                />
              </div>
              <div className={styles.f_item}>
                <Input
                  label="Last Name"
                  type={""}
                  name="lastname"
                  onChange={handleChange}
                  size="small"
                  variant="outlined"
                />
              </div>
              <div className={styles.f_item}>
                <Input
                  label="Email Adress"
                  type={""}
                  name="email"
                  onChange={handleChange}
                  size="small"
                  variant="outlined"
                />
              </div>
              <div className={`${styles.f_item}  ${styles.f_flex_end}`}>
                <Switch
                  onClick={() => setShowPassword(!showPassword)}
                  checked={showPassword}
                />
                <p>Show Password</p>
              </div>
              <div className={styles.f_item}>
                <Input
                  label="Password"
                  name="password"
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  size="small"
                  variant="outlined"
                />
              </div>
              <div className={styles.f_item}>
                <Input
                  label="Confirm Password"
                  name="c_password"
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  size="small"
                  variant="outlined"
                />
              </div>
              <div className={styles.f_item}>
                <Input
                  label="Mobile Number"
                  name="mobile"
                  onChange={handleChange}
                  type="number"
                  size="small"
                  variant="outlined"
                />
              </div>
              <div className={styles.f_item}>
                <input type="submit" value="Create An Account" />
              </div>
            </form>
          </div>
          <div className={styles.f_content}>
            <div className={styles.border}></div>
            <p>or</p>
            <div className={styles.border}></div>
          </div>
          <div className={`${styles.f_btn} ${styles.f_border_blue}`}>
            <div className={styles.f_icon}>
              <svg
                aria-hidden="true"
                role="img"
                viewBox="0 0 100 100"
                height="16"
                width="16"
              >
                <svg
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  fillRule="evenodd"
                >
                  <path
                    d="M17.64 9.2c0-.63-.06-1.25-.16-1.84H9v3.49h4.84a4.14 4.14 0 0 1-1.8 2.71v2.26h2.92a8.78 8.78 0 0 0 2.68-6.62z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M9 18a8.6 8.6 0 0 0 5.96-2.18l-2.91-2.26a5.4 5.4 0 0 1-8.09-2.85h-3v2.33A9 9 0 0 0 9 18z"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M3.96 10.71a5.41 5.41 0 0 1 0-3.42V4.96h-3a9 9 0 0 0 0 8.08l3-2.33z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.59A9 9 0 0 0 .96 4.95l3 2.34A5.36 5.36 0 0 1 9 3.58z"
                    fill="#EA4335"
                  ></path>
                </svg>
              </svg>
            </div>
            <div className={styles.f_title}>Sign In with Google</div>
          </div>
          <div className={styles.terms}>
            By continuing you agree to our{" "}
            <span className={styles.hyperlink}>Terms and Conditions,</span> our{" "}
            <span className={styles.hyperlink}> Privacy Policy,</span> and the
            <span className={styles.hyperlink}>
              My Best Buy® Program Terms.
            </span>
          </div>
          <div className={styles.b_border}></div>
          <div className={styles.account}>
            <p>
              Already have an account?{" "}
              <Link to="/signin">
                <span>Sign in</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

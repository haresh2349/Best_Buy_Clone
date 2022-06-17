import React, { useState } from "react";
import styles from "../Style/Signin.module.css";
import Switch from "@mui/material/Switch";
import Input from "@mui/material/TextField";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import { Link } from "react-router-dom";
const SignIn = () => {
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
            <p>Sign In to Best Buy</p>
          </div>
          <div className={styles.form}>
            <form onSubmit={handleSubmit}>
              <div className={styles.f_item}>
                <Input
                  label="Email"
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
              <div className={`${styles.f_item}  ${styles.f_flex_start}`}>
                <a href="#">Forgot your password?</a>
              </div>
              <div className={styles.f_item}>
                <input type="submit" value="Sign In" />
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
              <FingerprintIcon />
            </div>
            <div className={styles.f_title}>Sign In with WebAuthn</div>
          </div>
          <div className={`${styles.f_btn} ${styles.f_border_black}`}>
            <div className={styles.f_icon}>
              <svg
                aria-hidden="true"
                role="img"
                viewBox="0 0 100 100"
                height="16"
                width="16"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M27.2 22c-1.5-1.4-2.2-3-2.2-5.1 0-2.6 1.2-4.7 3.6-6.1-1.3-1.9-3.4-3-6.1-3.2-1-.1-2.2.1-3.6.6-1.5.6-2.4.8-2.7.8-.4 0-1.2-.2-2.4-.7-1.3-.5-2.3-.7-3-.7-1.4.1-2.8.5-4 1.2-1.2.7-2.2 1.7-2.9 2.9-.9 1.5-1.4 3.4-1.4 5.5 0 1.9.3 3.8 1 5.8.7 1.9 1.5 3.5 2.5 4.9.9 1.3 1.7 2.2 2.3 2.8 1 .9 1.9 1.3 2.9 1.3.6 0 1.5-.2 2.5-.7 1-.4 2-.6 2.9-.6.9 0 1.8.2 2.8.6 1 .4 1.9.6 2.6.6 1 0 2-.4 2.8-1.2.6-.5 1.3-1.4 2.2-2.7.7-1 1.2-2 1.7-3.1l.6-1.5c-.6-.3-1.4-.8-2.1-1.4zM21 5.1c1.2-1.4 1.7-2.9 1.7-4.5V0c-.8 0-1.7.3-2.6.7-.9.5-1.7 1-2.3 1.7C16.7 3.8 16 5.4 16 7v.6c1.9.1 3.6-.8 5-2.5z"></path>
                </svg>
              </svg>
            </div>
            <div className={styles.f_title}>Sign In with Apple</div>
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
              Don't have an account?{" "}
              <Link to="/signup">
                {" "}
                <span>Create an account</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

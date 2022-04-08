import React from "react";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <section className="login-section">
      <div className="container wrapper">
        <div className="row login-main">
          <div className="col-md-6">
            <div className="login-form">
              <div>
                <div className="text-center">
                  <img
                    className="login-form-logo planePath"
                    src="/logo.svg"
                    alt="logo"
                  />
                </div>
                <div className="d-block text-center">
                  <strong>
                    <span className="logo-text">
                      <span className="logo-desc"> Админ панель</span>
                    </span>
                  </strong>
                </div>
              </div>
              <LoginForm />
            </div>
          </div>
          <div className="col-md-6" style={{ padding: "0" }}>
            <div className="login-bg">
              <div className="main-animate" style={{ width: "100%" }}>
                <img src="/s.svg" alt="svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded credentials
    const validEmail = "test@gmail.com";
    const validPassword = "123456";

    if (email === validEmail && password === validPassword) {
      // Store user data in sessionStorage
      sessionStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard"); // Redirect to dashboard on success
    } else {
      toast.error("Invalid email or password"); // Show error toast
    }
  };

  return (
    <>
      <div className="page">
        <div className="page-single">
          <div className="container">
            <div className="row">
              <div className="col col-login mx-auto">
                <div className="text-center mb-6">
                  <img src="./assets/brand/tabler.svg" className="h-6" alt="" />
                </div>
                <form className="card" onSubmit={handleLogin}>
                  <div className="card-body p-6">
                    <div className="card-title">Login to your account</div>
                    <div className="form-group">
                      <label className="form-label">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        Password
                        <a href="" className="float-right small">
                          I forgot password
                        </a>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group">
                      <label className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                        />
                        <span className="custom-control-label">Remember me</span>
                      </label>
                    </div>
                    <div className="form-footer">
                      <button type="submit" className="btn btn-primary btn-block">
                        Log in
                      </button>
                    </div>
                  </div>
                </form>
                <div className="text-center text-muted">
                  Don't have an account yet? <Link to={"/signup"}>Sign up</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast notifications */}
      <ToastContainer />
    </>
  );
};

export default Login;
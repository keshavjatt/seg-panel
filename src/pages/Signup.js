import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
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
                <form className="card">
                  <div className="card-body p-6">
                    <div className="card-title">Create new account</div>
                    <div className="form-group">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter name"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group">
                      <label className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                        />
                        <span className="custom-control-label">
                          Agree the terms and policy
                        </span>
                      </label>
                    </div>
                    <div className="form-footer">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                      >
                        Create new account
                      </button>
                    </div>
                  </div>
                </form>
                <div className="text-center text-muted">
                  Already have account? <Link to={"/"}>Sign in</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
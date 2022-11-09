import React from 'react'

import './auth.scss';

const Login = () => {

  return (
      <div className="login">
          <div className="container">
              <div className="row">
                  <div className="left col-md-6 bg-danger text-white">
                      <h2 className="text-capitalize">Hello,friend</h2> <br />
                      <p className='text-center'>Enter your personal details and start <br /> journey with us</p>

                      <button className="btn btn-danger border-white text-uppercase">sign up</button>
                  </div>
                  <div className="auth__container col-md-6">
                      <h2 className="text-uppercase title">Sign in</h2>

                      <form action="" className="form d-flex flex-column">
                          <div className="form-group mb-3">
                              <input
                                  type="email"
                                  placeholder="Email"
                                  name="email"
                                  className="form-control"
                              />
                          </div>
                          <div className="form-group">
                              <input
                                  type="password"
                                  placeholder="name"
                                  name="password"
                                  className="form-control"
                              />
                          </div>

                          <span className="text-muted text-center mt-2">Forgot your password ?</span>

                          <button className="btn text-uppercase text-white bg-danger fw-bold mt-3">sign in</button>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Login
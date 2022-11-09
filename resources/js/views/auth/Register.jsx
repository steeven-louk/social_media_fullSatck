import React from 'react'

const Register = () => {
  return (
    <div className="Register">
    <div className="container">
              <div className="row">
                  <div className="left col-md-6 bg-danger text-white">
                      <h2 className="text-capitalize">welcome back !</h2> <br />
                      <p className='text-center'>To keep connected with us please <br /> login with your personal info</p>

                      <button className="btn btn-danger border-white text-uppercase">sign in</button>
                  </div>
                  <div className="auth__container col-md-6">
                      <h2 className="text-capitalize title" >create account</h2>

                      <form action="" className="form d-flex flex-column">
                      <div className="form-group mb-3">
                              <input
                                  type="text"
                                  placeholder="Name"
                                  name="name"
                                  className="form-control"
                              />
                          </div>
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

                          <button className="btn text-uppercase text-white bg-danger fw-bold mt-3">sign up</button>
                      </form>
                  </div>
              </div>
          </div>
  </div>
  )
}

export default Register
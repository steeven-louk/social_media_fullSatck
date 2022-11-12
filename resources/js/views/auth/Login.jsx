import { replace } from 'lodash';
import React, { useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom';

import './auth.scss';

const Login = () => {

    const [login, setLogin] = useState({
        email: '',
        password:''
    });

    const handleInput = (e)=>{
        e.persist();
        setLogin({...login,[e.target.name]: e.target.value});
    }


const handleSubmit= ()=>{
    console.log('login')
}

    const navigate = useNavigate();


    useEffect(() => {
        let auth = JSON.parse(localStorage.getItem("auth_token"));

        if (auth) {
            navigate("/" , replace);
        }
    }, []);

  return (
      <div className="login">
          <div className="container">
              <div className="row">
                  <div className="left col-md-6 bg-danger text-white">
                      <h2 className="text-capitalize">Hello,friend</h2> <br />
                      <p className='text-center'>Enter your personal details and start <br /> journey with us</p>

                      <Link to='/register' className="btn btn-danger border-white text-uppercase">sign up</Link>
                  </div>
                  <div className="auth__container col-md-6">
                      <h2 className="text-uppercase title">Sign in</h2>

                      <form onSubmit={handleSubmit} className="form d-flex flex-column">
                          <div className="form-group mb-3">
                              <input
                                  type="email"
                                  placeholder="Email"
                                  name="email"
                                  className="form-control"
                                  onChange={handleInput}
                              />
                          </div>
                          <div className="form-group">
                              <input
                                  type="password"
                                  placeholder="Password"
                                  name="password"
                                  className="form-control"
                                  onChange={handleInput}
                              />
                          </div>

                          <span className="text-muted text-center mt-2">Forgot your password ?</span>

                          <button type='submit' className="btn text-uppercase text-white bg-danger fw-bold mt-3">sign in</button>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Login
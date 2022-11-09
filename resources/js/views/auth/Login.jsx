import React from 'react'

const Login = () => {
  return (
    <div className="login">
      <div className="jumbotron text-uppercase">Login</div>
      <div className="login__container">
        <form action="" className="form">

          <div className="form-group">
            <input type="email" placeholder='Email' name='email' className="form-control" />
          </div>
          <div className="form-group">
            <input type="password" placeholder='name' name='password' className="form-control" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
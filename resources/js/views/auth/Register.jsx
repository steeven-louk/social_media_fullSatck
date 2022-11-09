import React from 'react'

const Register = () => {
  return (
    <div className="Register">
    <div className="jumbotron text-uppercase">Register</div>
    <div className="register__container">
      <form action="" className="form">

      <div className="form-group">
          <input type="text" placeholder='name' name='name' className="form-control" />
    </div>

        <div className="form-group">
          <input type="email" placeholder='Email' name='email' className="form-control" />
        </div>

        <div className="form-group">
          <input type="password" placeholder='password' name='password' className="form-control" />
        </div>

        <div className="form-group">
          <input type="password" placeholder='Confirm password' name='password_confirmation' autocomplete="new-password" className="form-control" />
        </div>

        <button className="btn btn-success">Register</button>
      </form>
    </div>
  </div>
  )
}

export default Register
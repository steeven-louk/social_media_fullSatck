import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {

    const [register, setRegister] = useState({
        name:'',
        email:'',
        password:'',
    });

    const handleInput= (e) =>{
        e.persist();

        setRegister({...register, [e.target.value]: e.target.name})
    }

    return (

        <div className="Register">
            <div className="container">
                <div className="row">
                    <div className="left col-md-6 bg-danger text-white">
                        <h2 className="text-capitalize">welcome back !</h2>{" "}
                        <br />
                        <p className="text-center">
                            To keep connected with us please <br /> login with
                            your personal info
                        </p>
                        <Link
                            to="/login"
                            className="btn btn-danger border-white text-uppercase"
                        >
                            sign in
                        </Link>
                    </div>
                    <div className="auth__container col-md-6">
                        <h2 className="text-capitalize title">
                            create account
                        </h2>

                        <form action="" className="form d-flex flex-column">
                            <div className="form-group mb-3">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    className="form-control"
                                    onChange={handleInput}
                                />
                            </div>
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
                                    placeholder="password"
                                    name="password"
                                    className="form-control"
                                    onChange={handleInput}
                                />
                            </div>

                            <button className="btn text-uppercase text-white bg-danger fw-bold mt-3">
                                sign up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

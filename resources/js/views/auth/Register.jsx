import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import swal from "sweetalert";


const Register = () => {

    const navigate = useNavigate();


    const [register, setRegister] = useState({
        name:'',
        email:'',
        password:'',
        error_list:[]
    });


    const handleInput= (e) =>{
        e.persist();

        setRegister({...register, [e.target.name]: e.target.value})
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();

        try {
        await axios.post('http://127.0.0.1:8000/api/register', {
           
            name: register.name,
            email: register.email,
            password: register.password
        }).then((res)=> {
            if(res.data.status === 200){

                localStorage.setItem('id',JSON.stringify(res.data.id));
                localStorage.setItem('auth_token',JSON.stringify(res.data.token));
                localStorage.setItem('username',JSON.stringify(res.data.username));
                localStorage.setItem('slug',JSON.stringify(res.data.slug));


                swal("Success", res.data.message, "success");

                // navigate("/", replace);
                 navigate ("/");

            
            }

            else{
                setRegister({...register, error_list: res.data.validation_errors})
            }

        //    setRegister([...register,{ 
        //     name:'',
        //     email:'',
        //     password:'',
        //    }])

        });   
        
        } catch (error) {
            console.log('error', error);
        }
       
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
                    <div className="auth__container col-md-6 p-3">
                        <h2 className="text-capitalize title">
                            create account
                        </h2>

                        <form onSubmit={handleSubmit} className="form d-flex flex-column">
                            <div className="form-group mb-3">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    className="form-control"
                                    onChange={handleInput}
                                />
                                <span className="text-danger">{register.error_list.name} </span>
                            </div>
                            <div className="form-group mb-3">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    className="form-control"
                                    onChange={handleInput}
                                />
                                <span className="text-danger">{register.error_list.email} </span>
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    placeholder="password"
                                    name="password"
                                    className="form-control"
                                    onChange={handleInput}
                                />
                                <span className="text-danger">{register.error_list.password} </span>
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

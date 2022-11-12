import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


const ProtectedRoutes = (props) => {


    const {Component} = props;

    const navigate = useNavigate();

    useEffect(() => {
        let login = JSON.parse(localStorage.getItem('auth_token'))
     
      if(!login) {
        navigate('/login');
      }
    }, []);


  return (
    <>
        <Component />
    </>
  )
}

export default ProtectedRoutes
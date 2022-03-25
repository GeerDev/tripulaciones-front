import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import { login, reset } from "../../../features/company/companySlice";
import { notification } from 'antd';
import './LoginCompany.scss';
import logo from '../../../img/logo.svg';

const LoginCompany = () => {

  const [formData, setFormData] = useState({email: "", password:""});
  const { email,password } = formData;
  const navigate = useNavigate();
  const { isError, isSuccess, message } = useSelector((state) =>state.company)
  const onChange = (e) =>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const dispatch = useDispatch();

  useEffect(()=>{
    if(isError){
      notification.error({message: "Error", description: message,});
    }
    if(isSuccess){
      console.log(message)
      notification.success({message: "Success", description: message?.message,});
      setTimeout(()=>{
        navigate("/company")
      },500);
    }
    dispatch(reset());
  }, [isError, isSuccess, message, dispatch]);

  const onSubmit = (e) =>{
    e.preventDefault();
    dispatch(login(formData));

  }
    return (
      <div className="login-form-company">
      <div className="logo-company-form">
      <img src={logo}/>
      </div>
      <h2 className="login-size-company">Inicia Sesión</h2>
        <form onSubmit={onSubmit}>
          <input type="email" value={email} name="email" onChange={onChange} required placeholder="Email"/>
          <input type="password" value={password} name="password" onChange={onChange} required placeholder="Contraseña" />
          <button type="submit">Entrar</button>
        </form>
        <p>Si no una cuenta reigstrada, <Link to="/registerCompany" className="link">Register</Link></p>
      </div>
    )
  }
  
  export default LoginCompany
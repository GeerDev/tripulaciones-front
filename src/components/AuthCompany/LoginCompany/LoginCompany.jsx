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
      notification.error({message: "Error al iniciar sesión", description: message,});
    }
    if(isSuccess){
      notification.success({message: "Hola!", description: message?.message,});
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
      <div className="login-form-company card animate__animated animate__backInUp">
      <div className="logo-company-form">
      <img src={logo}/>
      </div>
        <form onSubmit={onSubmit}>
          <input type="email" value={email} name="email" onChange={onChange} required placeholder="Email"/>
          <input type="password" value={password} name="password" onChange={onChange} required placeholder="Contraseña" />
          <button type="submit">Entrar</button>
        </form>
        <p>Si no tienes una cuenta registrada, <Link to="/registerCompany" className="link">Regístrate</Link></p>
      </div>
    )
  }
  
  export default LoginCompany
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import { login, reset } from "../../../features/company/companySlice"
import { notification } from 'antd';

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
      <div>
        <h2>Login de Empresa:</h2>
        <form onSubmit={onSubmit}>
          <input type="email" value={email} name="email" onChange={onChange} required placeholder="Email"/>
          <input type="password" value={password} name="password" onChange={onChange} required placeholder="Contraseña" />
          <button type="submit">Entrar</button>
        </form>
        <Link to="/registerCompany" className="link">Register</Link>
      </div>
    )
  }
  
  export default LoginCompany
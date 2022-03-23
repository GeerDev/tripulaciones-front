import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
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
      notification.success({message: "Success", description: message?.message,});
      setTimeout(()=>{
        navigate("/DashboardCompany")
      },500);
    }
    dispatch(reset());
  }, [isError, isSuccess, message, navigate, dispatch]);

  const onSubmit = (e) =>{
    e.preventDefault();
    dispatch(login(formData))
  }

  

    return (
      <div>LoginCompany</div>
    )
  }
  
  export default LoginCompany
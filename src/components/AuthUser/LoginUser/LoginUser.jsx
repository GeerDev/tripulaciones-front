import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { loginUser, reset } from '../../../features/user/userSlice';
import { Link } from 'react-router-dom'; 
import { notification } from 'antd';
import './LoginUser.scss';
import logo from '../../../img/logo.svg';

const LoginUserAdmin = () => {
  const navigate = useNavigate();
  const { user, isError, isSuccess, message } = useSelector((state) => state.user)
  
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    email:'',
    password:''
  })
  useEffect(() => {
    if (isError) {
        notification.error({ message: "Error", description: message, });
    }
    if (isSuccess) {
        notification.success({ message: "Éxito", description: message?.message, });
        selectRole()
    }
    dispatch(reset())
}, [isError, isSuccess, message, navigate, dispatch]);

  const {email,password} = formData
  
  const onChange = (e)=>{
      setFormData((prevState)=> ({
          ...prevState,
          [e.target.name]:e.target.value,
      }))
  }

  const selectRole = () => {
    if (user !== null) {
      const { role } = user.user
      if (role === 'admin') {
      setTimeout(() => {
        navigate('/admin', {
          replace: true
        })
      }, 1000);
      } else {
      setTimeout(() => {
        navigate('/user', {
          replace: true
        })
      }, 1000);
      }
    }
  }

  const onSubmit = async (e) => {
      e.preventDefault()
      await dispatch(loginUser(formData))
  }

  return (
    <div className='login-form-user card animate__animated animate__backInUp'>
      <div className='logo-user-form'>
        <img src={logo} />
      </div>
      <form onSubmit={onSubmit}>
            <input type="email" name="email" value={email} onChange={onChange} placeholder={'Email'}/>
            <input type="password" name="password" value={password} onChange={onChange} placeholder={'Contraseña'}/>
            <button type="submit">Inicia Sesión</button>
      </form>
      <p>Si no tienes una cuenta registrada, <Link to="/registeruser" className="link">Regístrate</Link></p>
      </div>
    )
  }
  
export default LoginUserAdmin;
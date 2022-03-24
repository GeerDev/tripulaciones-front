import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { loginUser, reset } from '../../../features/user/userSlice'
import {notification} from 'antd'

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
        notification.success({ message: "Success", description: message?.message, });
        setTimeout(() => {
            navigate("/user")
        }, 1000);
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
      const { role } = user?.user
      if (role === 'admin') {
        navigate('/admin', {
          replace: true
        })
      } else {
        navigate('/user', {
          replace: true
        })
      }
    }
  }

  const onSubmit = async (e) => {
      e.preventDefault()
      await dispatch(loginUser(formData))
      await selectRole()
  }

    return (
      <form onSubmit={onSubmit}>
            <input type="email" name="email" value={email} onChange={onChange} placeholder={'Email'}/>
            <input type="password" name="password" value={password} onChange={onChange} placeholder={'Contraseña'}/>
            <button type="submit">Login</button>
      </form>
    )
  }
  
export default LoginUserAdmin;
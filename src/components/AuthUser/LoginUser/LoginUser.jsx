import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { loginUser } from '../../../features/user/userSlice'

const LoginUserAdmin = () => {

  const navigate = useNavigate();

  const { user } = useSelector( (state) => state.user )
  const { role } = user.user

  const [formData, setFormData] = useState({
    email:'',
    password:''
  })

  const {email,password} = formData
  
  const onChange = (e)=>{
      setFormData((prevState)=> ({
          ...prevState,
          [e.target.name]:e.target.value,
      }))
  }

  const dispatch = useDispatch()

  const selectRole = () => {
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
  
  export default LoginUserAdmin
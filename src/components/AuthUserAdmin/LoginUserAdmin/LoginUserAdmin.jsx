import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { login } from '../../../features/user/userslice'

const LoginUserAdmin = () => {

  const navigate = useNavigate();

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

  const onSubmit = (e) => {
      e.preventDefault()
      dispatch(login(formData))
      navigate('/selectrole', {
        replace: true
    })
  }

    return (
      <form onSubmit={onSubmit} className='login_form'>
            <input type="email" name="email" value={email} onChange={onChange} placeholder={'Email'}/>
            <input type="password" name="password" value={password} onChange={onChange} placeholder={'Contraseña'}/>
            <button type="submit">Login</button>
      </form>
    )
  }
  
  export default LoginUserAdmin
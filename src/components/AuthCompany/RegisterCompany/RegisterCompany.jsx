import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { register, reset } from "../../../features/company/companySlice"
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { message, notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import "antd/dist/antd.css";
import './RegisterCompany.scss';
import empresa from '../../../img/empresa.jpg';
import logo from '../../../img/logo.svg';

const RegisterCompany = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyType: '',
    nameCEO: '',
    email: '',
    phone: '',
    password: '',
    password2: '',
  })
  const { name, companyType, CEO, email, phone, password, password2 } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, isSuccess, message } = useSelector((state)=>state.company);

  useEffect(()=>{
    if (isError){
      notification.error({message: "Error", description: "Ha habido un error"});
    }
    if(isSuccess){
      notification.success({message: "Ya está!", description: "Registro completado con éxito"});
      setTimeout(()=>{
        navigate("/loginCompany");
      }, 200);
    }
  dispatch(reset());
  })

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      return notification.error({message: 'error',description: "Las contraseñas no coinciden",
      });
    } else {
      dispatch(register(formData));
    }
  }
  return (
    <div className='register-company-form card animate__animated animate__backInLeft'>
      <div className="company-register">
        <img src={empresa}/>
      </div>
      <section className="section-register-company">
      <div className='logo-register'>
        <img src={logo}/>
      </div>
      <h2 className='register-title'>Registra tu empresa</h2>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" value={name} onChange={onChange} placeholder="Nombre de la empresa" />
        <select name="companyType" className="input-select" onChange={onChange}>
            <option value="">Tipo de empresa</option>
            <option value="PYME">PYME</option>
            <option value="Grande">Grande</option>
      </select>
        <input type="text" placeholder="CEO" name="nameCEO" value={CEO} required onChange={onChange}/>
        <input type="email" placeholder="Email" name="email" value={email} required onChange={onChange}/>
        <input type="number" placeholder="Teléfono" name="phone" value={phone} maxLength={9} required onChange={onChange} />
        <input type="password" placeholder="Contraseña" name="password" value={password} required onChange={onChange} />
        <input type="password" placeholder="Repita la contraseña" name="password2" value={password2} required onChange={onChange} />
        <button type="submit">Registrar</button>
      </form>
      <p>Si ya tienes cuenta de empresa, <Link to='/loginCompany'>Inicia tu sesión</Link></p>
      </section>
    </div>
  )
}
export default RegisterCompany
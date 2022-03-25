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
    nameCompany: '',
    nameCEO: '',
    email: '',
    phone: '',
    password: '',
    password2: '',
  })
  const { nameCompany, CEO, email, phone, password, password2 } = formData;
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
    <div className='register-company-form'>
      <div className="company-register">
        <img src={empresa}/>
      </div>
      <section className="section-register-company">
      <div className='logo-register'>
        <img src={logo}/>
      </div>
      <p>Si ya tienes cuenta de empresa, <Link to='/loginCompany'>Inicia tu sesión</Link></p>
      <h2 className='register-title'>Registra tu empresa</h2>
      <form onSubmit={onSubmit}>
        <input type="text" name="nameCompany" value={nameCompany} onChange={onChange} placeholder="Nombre de la empresa" />
        <select name="sectors" className="input-select" defaultValue={'DEFAULT'}>
            <option value="">Tipo de empresa</option>
            <option value="PYME">PYME</option>
            <option value="Grande">Grande</option>
      </select>
        <input type="text" placeholder="CEO" name="nameCEO" value={CEO} required onChange={onChange}/>
        <input type="email" placeholder="Email" name="email" value={email} required onChange={onChange}/>
        <input type="number" placeholder="Teléfono" name="phone" value={phone} required onChange={onChange} maxLength={9} />
        <input type="password" placeholder="Contraseña" name="password" value={password} required onChange={onChange} />
        <input type="password" placeholder="Repita la contraseña" name="password2" value={password2} required onChange={onChange} />
        <button type="submit">Registrar</button>
      </form>
      </section>
    </div>
  )
}
export default RegisterCompany
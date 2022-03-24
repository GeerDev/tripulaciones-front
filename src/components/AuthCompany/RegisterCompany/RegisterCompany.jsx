import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { register, reset } from "../../../features/company/companySlice"
import { useEffect } from "react";
import { message, notification } from 'antd';
import { useNavigate } from 'react-router-dom';

const RegisterCompany = () => {
  const [formData, setFormData] = useState({
    nameCompany: '',
    CEO: '',
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
    <div>
      <h2>Registro de empresa</h2>
      <form onSubmit={onSubmit}>
        <label>Nombre de la empresa:</label>
        <input type="text" name="nameCompany" value={nameCompany} onChange={onChange} placeholder="Nombre de la empresa" />
        <select name="sectors" className="input-select" defaultValue={'DEFAULT'}>
        <label>Tamaño de la empresa:</label>
        <option value="DEFAULT" disabled>Tamaño empresa:</option>
            <option value="PYME">PYME</option>
            <option value="Grande">Grande</option>
      </select>
        <label>CEO:</label>
        <input type="text" name="CEO" value={CEO} onChange={onChange} placeholder="Nombre del CEO" />
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={onChange} placeholder="Email de la empresa" />
        <label>Teléfono:</label>
        <input type="phone" name="phone" value={phone} onChange={onChange} placeholder="Teléfono de contacto" maxLength={9} />
        <label>Contraseña:</label>
        <input type="password" name="password" value={password} onChange={onChange} placeholder="Contraseña" />
        <label>Repita la contraseña:</label>
        <input type="password" name="password2" value={password2} onChange={onChange} placeholder="Repita la contraseña" />
        <button type="submit">Registrar</button>
      </form>
    </div>
  )
}
export default RegisterCompany
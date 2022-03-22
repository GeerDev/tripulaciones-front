import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { register, reset } from "../../../features/company/companySlice"
import { useEffect } from "react";
import { notification } from 'antd';

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

  // const { isError, isSuccess, message } = useSelector((state) => state.auth)
  // useEffect(() => {
  //     if (isError) {
  //         notification.error({ message: "error", description: message });
  //     }
  //     if (isSuccess) {
  //         notification.success({ message: "Welcome", description: message?.message })
  //     }
  //     dispatch(reset())
  // }, [isError, isSuccess, message, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      return notification.error({
        message: 'error',
        description: "Las contraseñas no coinciden",
      });
    } else {
      return dispatch(register(formData));
    }
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Nombre de la empresa:</label>
        <input type="text" name="nameCompany" value={nameCompany} onChange={onChange} placeholder="Nombre de la empresa" />
        <label>CEO:</label>
        <input type="text" name="CEO" value={CEO} onChange={onChange} placeholder="Nombre del CEO" />
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={onChange} placeholder="Email de la empresa" />
        <label>Teléfono:</label>
        <input type="number" name="phone" value={phone} onChange={onChange} placeholder="Teléfono de contacto" maxLength={9} />
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
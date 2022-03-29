import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser, reset } from '../../../features/user/userSlice'
import { useEffect } from 'react'
import { notification } from "antd";
import { Link } from 'react-router-dom';
import "antd/dist/antd.css"
import "./RegisterUser.scss"
import empleado from '../../../img/empleado.jpg'
import logo from '../../../img/logo.svg'
import { getRankingCompanies } from "../../../features/company/companySlice";


const RegisterUser = () => {
    const { companies } = useSelector((state) => state.company);
    const enterprise = companies || []

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        password: '',
        password2: '',
    })
    const { name, email, password, password2 } = formData

    const dispatch = useDispatch()

    const { isSuccess, isError, message } = useSelector((state) => state.user)
    useEffect(async () => {
        if (isError) {
            notification.error({ message: "Ha habido un error", description: message });
        }
        if (isSuccess) {
            notification.success({ message: "Bienvenid@", description: message?.message })
        }
        await dispatch(reset())
        await dispatch(getRankingCompanies())
    }, [isError, isSuccess, message, dispatch]);

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
                message: "Error",
                description: "La contraseña no coincide",
            });

        } else {
            return dispatch(registerUser(formData))
        }
    }

    const enterprises = enterprise.map((company) => {
        return (            
                <option value={company._id}>{company.name}</option>
            )})

    return (
        <div className='register-user-form card animate__animated animate__backInRight'>
            <div className='empleado-register'>
                <img src={empleado} />
            </div>
            <section className='section-register-user'>
            <div className='logo-register'>
                <img src={logo} />
                </div>
            <h2 className='register-title'>Registrate</h2>
            <form onSubmit={onSubmit}>
                <input type="text" name="name" value={name} onChange={onChange} required placeholder='Nombre' />
                <input type="email" name="email" value={email} onChange={onChange} required placeholder='Email' />
                <select name="company" id="" onChange={onChange}>
                    <option>Elige tu empresa</option>
                {enterprises}
                </select>
                <input type="password" name="password" value={password} onChange={onChange} required placeholder='Contraseña' />
                <input type="password" name="password2" value={password2} onChange={onChange} required placeholder='Repita contraseña' />
                <button type="submit">Registrate</button>
                </form>
                <p>Si ya tienes cuenta, <Link to='/loginuser'>Inicia tu sesión</Link></p>
                </section>
        </div>
    )
}
export default RegisterUser;
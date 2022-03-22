// import React, { useState, useEffect} from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import useNavigate from 'react-router-dom';
// import { login, reset } from '../../features/company/companySlice';

// const Login = () => {
//     const [formData, setFormData] = useState({email:"", password:""});
//     const { email,password } = formData;

//     const onChange = (e) =>{
//         setFormData((prevState) =>({
//             ...prevState,
//             [e.target.name]:e.target.value,
//         }))
//     }
//     const dispatch = useDispatch();
// }

// const LoginCompany = () => {
//   return (
//     <div>
//         <h2>Login</h2>
//         <form action="">
//             <label>Email empresa:</label>
//             <input type="email" value={email} onChange={onChange} required placeholder="email" name="email" id="" />
//             <label>Contraseña:</label>
//             <input type="password" value={password} onChange={onChange} required placeholder="contraseña" name="password" id="" />
//             <button type="submit">Entrar</button>
//         </form>
//     </div>
//   )
// }



// export default LoginCompany
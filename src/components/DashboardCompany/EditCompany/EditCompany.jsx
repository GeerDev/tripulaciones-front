import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from "react-router-dom";
import { updateCompany, getCompanyById } from '../../../features/company/companySlice'
import './EditCompany.scss'
const EditCompany = () => {

  const [nameValue, setNameValue] = useState("");
  const [nameCEOValue, setNameCEOValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const dispatch = useDispatch()
  const navigate = useNavigate();
  
  const { _id } = useParams();

  const { companyInfo } = useSelector( state => state.company )
  const { name, nameCEO, phone, email } = companyInfo

  const onSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    if (e.target.imageCompany.files[0]) formData.set('imageCompany', e.target.imageCompany.files[0]);
    formData.set('name', e.target.name.value)
    formData.set('nameCEO', e.target.nameCEO.value)
    formData.set('email', e.target.email.value)
    formData.set('phone', e.target.phone.value)
    dispatch(updateCompany(formData)) 
    setTimeout(() => {
      navigate(`/company/profile/${_id}`);
    }, 1000);
  }

  useEffect(() => {
    dispatch(getCompanyById(_id))
  },[])
  useEffect(() => {
    setNameValue(name)
    setNameCEOValue(nameCEO)
    setEmailValue(email)
    setPhoneValue(phone)
  },[name, email, nameCEO, phone])
  return (
    <div className="card-form-editCompany card animate__animated animate__fadeInRight">
    <form className="signup-editCompany" onSubmit={onSubmit}>
      <div className="form-title-editCompany">Información de tu empresa</div>
      <div className="form-body-editCompany">
        <div className="row-editCompany">
          <input type="text" className="input-editCompany" name="name" placeholder="Nombre..." value={ nameValue } onChange={(e) => setNameValue(e.target.value)}/>
          <input type="text" className="input-editCompany" name="nameCEO" value={nameCEOValue} onChange={(e) =>setNameCEOValue(e.target.value)}/>
          <input type="text" className="input-editCompany" name="email" placeholder="Email" value={ emailValue } onChange={(e) => setEmailValue(e.target.value)}/>
          <input type="text" className="input-editCompany" name="phone" value={phoneValue}  onChange={(e) =>setPhoneValue(e.target.value)}/>
        </div>
        <div className="row-editCompany">
        <input type="file" name="imageCompany"/>
        <button className="" type="submit">Editar</button>
        </div>
        <div className="button-flex">

        </div>

      </div>
      <div className="rule-editC  ompany"></div>
    </form>
  </div>
  )
}
export default EditCompany
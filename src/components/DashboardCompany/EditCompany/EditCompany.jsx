import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from "react-router-dom";
import { updateCompany, getCompanyById } from '../../../features/company/companySlice'

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
    <form onSubmit={onSubmit}>
    <input type="file" name="imageCompany"/>
    <input type="text" name="name" placeholder="Nombre..." value={ nameValue } onChange={(e) => setNameValue(e.target.value)}/>
    <input type="text" name="nameCEO" placeholder="Nombre del CEO..." value={ nameCEOValue } onChange={(e) => setNameCEOValue(e.target.value)}/>
    <input type="text" name="email" placeholder="Email..." value={ emailValue } onChange={(e) => setEmailValue(e.target.value)}/>
    <input type="text" name="phone" placeholder="Teléfono..." value={ phoneValue } onChange={(e) => setPhoneValue(e.target.value)}/>
    <button type="submit">Editar</button>
</form>
  )
}

export default EditCompany
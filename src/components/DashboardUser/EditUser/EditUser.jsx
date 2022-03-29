import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from "react-router-dom";
import { updateUser, getById } from '../../../features/user/userSlice'
import './EditUser.scss'
const EditUser = () => {

  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

  const dispatch = useDispatch()
  const navigate = useNavigate();
  
  const { _id } = useParams();

  const { userNow } = useSelector( state => state.user )
  const { name, email } = userNow

  const onSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    if (e.target.imageUser.files[0]) formData.set('imageUser', e.target.imageUser.files[0]);
    formData.set('name', e.target.name.value)
    formData.set('email', e.target.email.value)
    dispatch(updateUser(formData)) 
    setTimeout(() => {
      navigate(`/user/profile/${_id}`);
    }, 1000);
  }

  useEffect(() => {
    dispatch(getById(_id))
  },[])

  useEffect(() => {
    setNameValue(name)
    setEmailValue(email)
  },[name, email])

  return (
    
    <div className="card-form-edit card animate__animated animate__fadeInRight">
  <form className="signup-edit" onSubmit={onSubmit}>
    <div className="form-title-edit">Tu información</div>
    <div className="form-body-edit">

      <div className="row-edit">
        <input type="text" className="input-editUser" name="name" placeholder="Nombre..." value={ nameValue } onChange={(e) => setNameValue(e.target.value)}/>
        <input type="text" className="input-editUser" name="email" placeholder="Email" value={ emailValue } onChange={(e) => setEmailValue(e.target.value)}/>
      </div>

      <div className="row-edit">
      <input type="file" name="imageUser"/>
      </div>

    </div>
    <div className="rule-edit"></div>
    <div className="form-footer-edit">
      <button className="button-edit" type="submit">Editar</button>
    </div>
  </form>
</div>
  )
}

export default EditUser
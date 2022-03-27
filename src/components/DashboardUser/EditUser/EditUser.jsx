import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from "react-router-dom";
import { updateUser, getById } from '../../../features/user/userSlice'

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
    <form onSubmit={onSubmit}>
        <input type="file" name="imageUser"/>
        <input type="text" name="name" placeholder="Nombre..." value={ nameValue } onChange={(e) => setNameValue(e.target.value)}/>
        <input type="text" name="email" placeholder="Email..." value={ emailValue } onChange={(e) => setEmailValue(e.target.value)}/>
        <button type="submit">Editar</button>
    </form>
  )
}

export default EditUser
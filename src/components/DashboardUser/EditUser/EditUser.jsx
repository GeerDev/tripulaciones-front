import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from '../../../features/user/userSlice'

const EditUser = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();
  
  const { _id } = useParams();

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

  return (
    <form onSubmit={onSubmit}>
        <input type="file" name="imageUser"/>
        <input type="text" name="name" placeholder="Nombre..." />
        <input type="text" name="email" placeholder="Email..." />
        <button type="submit">Editar</button>
    </form>
  )
}

export default EditUser
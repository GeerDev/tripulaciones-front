import { useDispatch } from 'react-redux'
import { addChallenge } from '../../../features/challenge/challengeSlice'

const AddChallenge = () => {

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    if (e.target.imageChallenge.files[0]) formData.set('imageChallenge', e.target.imageChallenge.files[0]);
    formData.set('title', e.target.title.value)
    formData.set('description', e.target.description.value)
    console.log(e.target.imageChallenge.files[0]);
    dispatch(addChallenge(formData)) 
  }

  return (
    <form onSubmit={onSubmit}>
        <input type="file" name="imageChallenge"/>
        <input type="text" placeholder="Título..." name="title" />
        <input type="text" placeholder="Descripción..." name="description" />
    <button type="submit">Añade un reto</button>
    </form>
  )
}

export default AddChallenge
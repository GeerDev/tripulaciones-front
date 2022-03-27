import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createComment } from '../../../../../features/comment/commentSlice'
import { getByIdPost, reset } from "../../../../../features/post/postSlice";

export const AddComment = ({_id}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        setFormData((pre) => ({...pre, _id}) )
      }, []);

    const [formData, setFormData] = useState({
      _id: '',
      comment:''
    })
  
    const { comment } = formData
  
    const onChange = (e)=>{
      setFormData((prevState)=> ({
          ...prevState,
          [e.target.name]:e.target.value,
      }))
    }
  
    const onSubmit = async (e) => {
      e.preventDefault()
      await dispatch(createComment(formData))
    }

  return (
    <>
    <h3 className='card animate__animated animate__fadeIn'>Añade un comentario:</h3>
    <div className='order card animate__animated animate__fadeIn'>
    <form onSubmit={onSubmit}>
        <input type="text" name="comment" value={comment} onChange={onChange}/>
            <button type="submit">Este es un botón para borrarlo con CSS</button>
    </form>
    </div>
    </>
  )
}

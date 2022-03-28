import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createComment } from '../../../../../features/comment/commentSlice'
import { getByIdPost, reset } from "../../../../../features/post/postSlice";
import './AddComment.scss'


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
    <div className='comment-content'>
    <p className='comment-title card animate__animated animate__fadeIn'>Añade un comentario:</p>
    <section className='comment-form order card animate__animated animate__fadeIn'>
    <form onSubmit={onSubmit} className='form-post'>
        <textarea type="text" name="comment" value={comment} onChange={onChange}/>
            <button className='button-comment' type="submit">Comenta</button>
    </form>
    </section>
    </div>
    </>
  )
}

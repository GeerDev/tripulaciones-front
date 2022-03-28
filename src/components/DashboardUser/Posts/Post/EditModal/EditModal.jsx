import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  getAllPost, updatePost } from '../../../../../features/post/postSlice'

import { Modal } from 'antd';

const EditModal = ({visible, setVisible, _id}) => {
  console.log(_id)
  const [descriptionValue, setDescriptionValue] = useState("");

   const dispatch = useDispatch()
   const { post } = useSelector( state => state.post )

   const { description } = post
 
    const onSubmit = (e) => {
      const formData = new FormData();
      // if (e.target.imagePost.files[0]) formData.set('imagePost', e.target.imagePost.files[0]);
      formData.set('description', e.target.description.value)
        dispatch(updatePost(formData))
       console.log(formData)
       setVisible(false)
        dispatch(getAllPost())
    }

   
 
   const handleCancel = () => {
    setVisible(false)
   };

   useEffect(() => {
    setDescriptionValue(description)
  },[description])

  return (
    <Modal title="Editar Publicación" visible={visible} onCancel={handleCancel}>
      <form onSubmit={onSubmit}>
        {/* <input type="file" name="imagePost"/> */}
        <input type="text" name="description" placeholder="Escribe aqui tu publicacion" value={descriptionValue || ''} onChange={(e) => setDescriptionValue(e.target.value)}/>
        <button type="submit">Editar</button>
        </form>
    </Modal>
  )
}

export default EditModal
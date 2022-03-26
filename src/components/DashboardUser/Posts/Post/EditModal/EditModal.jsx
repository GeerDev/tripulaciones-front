import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  getAllPost, updatePost } from '../../../../../features/post/postSlice'

import { Modal } from 'antd';

const EditModal = ({visible, setVisible}) => {

   const dispatch = useDispatch()
   const { post } = useSelector( state => state.post )

   useEffect(() => {
    setFormData({...post})
   },[post])
 
   const handleOk = async (e) => {
     await dispatch(updatePost(formData))
     setVisible(false)
     await dispatch(getAllPost())
   };
 
   const handleCancel = () => {
    setVisible(false)
   };

   const [formData, setFormData] = useState({
    description: ''
    })

    const { description } = formData

   const onChange = (e)=>{
    setFormData((prevState)=> ({
        ...prevState,
        [e.target.name]:e.target.value,
    }))
    }

  return (
    <Modal title="Editar Publicación" visible={visible} onOk={handleOk} onCancel={handleCancel}>
        <input type="file" name="imagePost"/>
        <input type="text" name="description" placeholder="Escribe aqui tu publicacion" value={description || ''} onChange={onChange}/>
    </Modal>
  )
}

export default EditModal
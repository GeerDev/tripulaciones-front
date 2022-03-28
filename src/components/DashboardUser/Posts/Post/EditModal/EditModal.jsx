import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPost, updatePost } from '../../../../../features/post/postSlice'

import { Modal } from 'antd';

const EditModal = ({visible, setVisible}) => {

   const dispatch = useDispatch()
   const { post } = useSelector( state => state.post )

   const [formData, setFormData] = useState({
    description: ''
    })

    const { description } = formData
    
   useEffect(() => {
    setFormData({...post})
   },[post])
 
    const handleOk = async () => {
      await dispatch(updatePost(formData))
      await dispatch(getAllPost())
      setVisible(false)
    };

   const handleCancel = () => {
    setVisible(false)
   };

  const onChange = (e)=>{
  setFormData((prevState)=> ({
      ...prevState,
      [e.target.name]:e.target.value,
  }))
  }

  return (
    <Modal title="Editar Publicación" visible={visible} onOk={handleOk} onCancel={handleCancel}>
        <input type="text" name="description" value={description || ''} onChange={onChange}/>
    </Modal>
  )
}

export default EditModal
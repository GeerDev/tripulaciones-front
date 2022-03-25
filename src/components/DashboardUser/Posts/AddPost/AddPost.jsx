import "antd/dist/antd.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import { createPost, reset } from "../../../../features/post/postSlice";

const AddPost = () => {
  const [formData, setFormData] = useState({ description: ""});
  const { description } = formData;
  const { isError, isSuccess, message } = useSelector( (state) => state.post )
  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() =>  {
    if (isError) {
      notification.error({ message: "Error",description: message });
    }
    if (isSuccess) {
        notification.success({  message: "Success",  description:message?.message});
      }
      dispatch(reset())
  }, [isError, isSuccess, message,  navigate,dispatch]);


  const onChange = (e)=>{
    setFormData((prevState)=> ({
        ...prevState,
        [e.target.name]:e.target.value,
    }))
}
const onSubmit = async (e) => {
    e.preventDefault();
       await dispatch(createPost(formData));
      setFormData({ description: ""})
    }

  return (
    <div>
    <form id = "create_form" onSubmit={onSubmit}>
    <h1>Crear una publicación</h1>
        <input type="text" name="description" value={description} placeholder="Escribe aqui tu publicacion" id="description" onChange={onChange} />
        <button>Cancelar</button>
        <button type="submit">Publicar</button>
    </form>
    </div>
  )
}

export default AddPost 
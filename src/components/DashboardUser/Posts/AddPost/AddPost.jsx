import "antd/dist/antd.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import { createPost, getAllPost, reset } from "../../../../features/post/postSlice";
import './AddPost.scss';

const AddPost = () => {
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


const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (e.target.imagePost.files[0]) formData.set('imagePost', e.target.imagePost.files[0]);
    formData.set('description', e.target.description.value)
       await dispatch(createPost(formData));
       await dispatch(getAllPost())
    }

  return (
    <div className="container-createPost">
    <form onSubmit={onSubmit} className="form-addPost">
    <h1>Crear una publicación</h1>
        <textarea type="text" className="text-post" name="description" placeholder="Escribe aqui tu publicacion" />
        <input type="file" name="imagePost"/>
        <button className="submit-post" type="submit">Publicar</button>
    </form>
    </div>
  )
}

export default AddPost 
import "antd/dist/antd.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import './AddPost.scss'
import { createPost, getAllPost, reset } from "../../../../features/post/postSlice";
import imageAdd from '../../../../img/image.svg'

const AddPost = () => {
  const { isError, isSuccess, message } = useSelector((state) => state.post)
  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    if (isError) {
      notification.error({ message: "Error", description: message });
    }
    if (isSuccess) {
      notification.success({ message: "Success", description: message?.message });
    }
    dispatch(reset())
  }, [isError, isSuccess, message, navigate, dispatch]);


  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (e.target.imagePost.files[0]) formData.set('imagePost', e.target.imagePost.files[0]);
    formData.set('description', e.target.description.value)
    await dispatch(createPost(formData));
    await dispatch(getAllPost())
  }

  return (
    <div className="create-post_form">
      <h3>Crear una publicación</h3>
      <form method="post">
        <textarea name="description" placeholder="Escribe aqui tu publicación"></textarea>
        <div class="toolbar">
          <div className="input-class">
            <img src={imageAdd} />
            <input type="file" name="imagePost" />
          </div>
          <select>
            <option value="">Seleccionar reto</option>
          </select>
          <button type="button" name="button">Cancelar</button>
          <button type="submit" name="button">Publicar</button>
        </div>
      </form>
    </div>
  )
}

export default AddPost 
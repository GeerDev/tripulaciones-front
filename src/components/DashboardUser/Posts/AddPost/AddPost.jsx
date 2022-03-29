import "antd/dist/antd.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import "./AddPost.scss";
import {
  createPost,
  getAllPost,
  reset,
} from "../../../../features/post/postSlice";
import imageAdd from "../../../../img/image.svg";
import { getAll } from "../../../../features/challenge/challengeSlice";

const AddPost = () => {
  const [formData2, setFormData] = useState({description: "", imagePost:""});

  const { isError, isSuccess, message } = useSelector((state) => state.post);
  const { challenges } = useSelector((state) => state.challenge);
  const allChallenges = challenges || [];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      notification.error({ message: "Error", description: message });
    }
    if (isSuccess) {
      notification.success({
        message: "Éxito",
        description: message?.message,
      });
    }
    dispatch(reset());
    dispatch(getAll());
  }, [isError, isSuccess, message, navigate, dispatch]);
  
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (e.target.imagePost.files[0])
      formData.set("imagePost", e.target.imagePost.files[0]);
    formData.set("description", e.target.description.value);
    if (e.target.challengeId)
      formData.set("challengeId", e.target.challengeId.value);
    await dispatch(createPost(formData));
    await dispatch(getAllPost());
    await  setFormData(()=>({
    description: '',
    }))
  };
  const onChange = async (e) => {
    e.preventDefault();
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  };

  const printChallenges = allChallenges.map((challenge) => {
    return <option value={challenge._id}>{challenge.title}</option>;
  });

  return (
    <div className="create-post_form card animate__animated animate__fadeInRight">
      <h3>Crear una publicación</h3>
      <form method="post" onSubmit={onSubmit}>
        <textarea
          name="description"
          value={formData2.description}
          placeholder="Escribe aqui tu publicación"
          onChange={onChange}
        ></textarea>
        <div class="toolbar">
          <div className="input-class">
            <img src={imageAdd} />
            <input type="file" name="imagePost" />
          </div>
          <select name="challengeId" id="">
            <option>Elige un desafio</option>
            {printChallenges}
          </select>
          <button type="submit" name="button">
            Publicar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;

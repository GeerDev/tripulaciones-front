import { useDispatch } from "react-redux";
import { addChallenge } from "../../../features/challenge/challengeSlice";
import "./AddChallenge.scss";
import { Button, Input } from 'antd';



const AddChallenge = () => {
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (e.target.imageChallenge.files[0])
      formData.set("imageChallenge", e.target.imageChallenge.files[0]);
    formData.set("title", e.target.title.value);
    formData.set("description", e.target.description.value);
    dispatch(addChallenge(formData));
  };

  return (
    <div className="add-challenge-container">
    <form onSubmit={onSubmit}>
      <Input className="challenge-input" type="file" name="imageChallenge" />
      <Input className="challenge-input" type="text" placeholder="Título..." name="title" />
      <Input className="challenge-input" type="text" placeholder="Descripción..." name="description" />
      <Button className="challenge-button" type="primary" htmlType="submit">Añade un reto</Button>
    </form>
    </div>
  );
};

export default AddChallenge;

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { notification } from 'antd';
import { useNavigate } from "react-router-dom";
import { getForm } from "../../../features/datascience/datascienceSlice";

const Forms = () => {

  const { user } = useSelector( state => state.user )
  const { forms } = useSelector((state) => state.datascience);
  const formsData = forms || []

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getForm())
  }, []);

  const [formData, setFormData] = useState([{employee_id:'',question_id:'',answer_id:'',company_id:''}])
  const onSubmit = async (e) => {
    e.preventDefault();
    notification.success({ message: "El formulario se ha enviado con éxito" });
    navigate('/user')
    }

    const onChange = (e)=>{
      setFormData(()=>({
        employee_id:user.user._id,
        question_id:e.target.name,
        answer_id:e.target.value,
        company_id:user.user.company
      }))
      // Petición axios del formulario por cada input
      console.log(formData);
  }

  const myForm = formsData.map ((elemento) => (
    <section key = {elemento.question.id}>
        
        <p>{elemento.question.content}</p>
        {elemento.answer.map ((e, index) => {
          return (
          <div className = 'cuestionario'>
            <p className = 'elemento'>
                <label for={index}>{e.content}</label>
                <input id={index} type="radio" name={elemento.question.id} value={e.id} onChange={onChange}/>
            </p>
        </div>)
        })}
      
      </section>
    ))



  return (
  
        <form id = 'CuestionarioData' name = 'Cuestionario_DataScience' onSubmit={onSubmit}>
        {myForm}
        <button type="submit" id='CuestionarioData'>Enviar</button>
        </form>
    

  )
}

export default Forms
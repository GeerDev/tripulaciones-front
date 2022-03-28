import { useState} from 'react';

const Forms = () => {
  const objeto = [
    {
    "question": {
        id: 1,
        content: "la pregunta 1"
           },
    "answer": [{
        id: 1,
        content: "la respuesta 1"
        },
        {
        id: 2,
        content: "la respuesta 2"
        },
        {
        id: 3,
        content: "la respuesta 3"
        }]
    },
    {
      "question": {
          id: 2,
          content: "la pregunta 2"
             },
      "answer": [{
          id: 1,
          content: "la respuesta 1"
          },
          {
          id: 2,
          content: "la respuesta 2"
          },
          {
          id: 3,
          content: "la respuesta 3"
          }]
      }
  ]
  const [formData, setFormData] = useState([{question_id:'',answer_id:''}])
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    }



  const myForm = objeto.map ((elemento) => (
    <section key = {elemento.question.id}>
        
        <p>{elemento.question.content}</p>
        {elemento.answer.map ((e, index) => {
            const onChange = (e)=>{
              setFormData(()=>({
                question_id:e.target.name,answer_id:e.target.value
              }))
              console.log(e.target.name,e.target.value)
          }
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
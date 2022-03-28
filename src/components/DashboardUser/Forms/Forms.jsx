const Forms = () => {

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("Hola");
    }


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
        id: 1,
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

  const myForm = objeto.map((elemento) => (
    <div className="form-content">
    <section key = {elemento.question.id}>
        <p>Soy una pregunta {elemento.question.content}</p>
        {elemento.answer.map ((e, index) => {
          return (
          <div className = 'cuestionario'>
            <p className = 'elemento'>
                <label for={index}> hola soy un label{e.content}</label>
                <input id={index} type="radio" name={elemento.question.id} value={e.id} />
            </p>
        </div>)
        })}
      
      </section>
      </div>
    ))

  return (
  
        <form id = 'CuestionarioData' name = 'Cuestionario_DataScience' onSubmit={onSubmit}>
        {myForm}
        <button type="submit" id='CuestionarioData'>Enviar</button>
        </form>
    

  )
}

export default Forms
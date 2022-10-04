import React, {useState} from 'react';
import '../App.css';
const TareaForm = (props) => {
    const [inputText, setInputText] = useState("");
    const [validacion, setValidacion] = useState(true);
    /*manejar formulario*/
    const manejarFormulario =(event) =>{
        setInputText(event.target.value);
        //console.log(inputText)
    }
    /*valida si el texto es vacio o no */
    const submit = (event) => {
        event.preventDefault();
        if(inputText.trim() !== ""){
            props.nuevaTarea(inputText);
            setInputText("");
            setValidacion(true);
        } else {
            setValidacion(false);
        }
        //props.nuevatarea(inputText);
    }
    return (
    <div>    
        <form className="form" onSubmit={submit}>
            <output> Añadir tarea </output>
            <input value={inputText} onChange={manejarFormulario} />
            <button className="btn btn-primary">  Añadir  </button>
            

        </form>
        {
            !validacion &&
            <div className="validacion">Añade una tarea, por favor</div>
        }
    </div>
  )
}
export default TareaForm
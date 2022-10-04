import React, { useState } from 'react'
import '../App.css'

const Tarea = (props) => {
    const [modoEdit, setModoEdit] = useState(false);
    const [editText, setEditText] = useState("");

    /**editar tareas */
    const editar = () => {
        setModoEdit(true);
    }   
    /**metodo para editar el texto */
    const manejarEdit = (event) => {
        setEditText(event.target.value);
    }
    /**evento par aq no se actualice la pagina cuando haga clin y un if para
     * llevarlo a un compoente de aplicacion/ */
    const submitEdit = (event) =>{
        event.preventDefault();
        props.editar(props.id, editText);
        setEditText("");
        //el estado cambie en modo edit 
        setModoEdit(false);
    }   
    /**borrar tarea */
    const borrarTarea = () => {
        props.borrar(props.id);
    }   
    return (
    <div>
        {
            !modoEdit ?
            <div className="tarea">
                <span>{props.tarea}</span>
                <span className='eb' onClick={editar}>Editar</span>
                <span className='eb' onClick={borrarTarea}>Borrar</span>
             </div>    
            :
            <form className="formEdit" onSubmit={submitEdit} >
                <input value={editText} onChange={manejarEdit} /> 
                <button>Guardar</button>
            </form>
        }        
    </div>
  )
}

export default Tarea
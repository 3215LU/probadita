import React, {useState} from 'react';
import TareaForm from './Components/TareaForm';
import Tarea from './Components/Tarea';
import './App.css';

function App() {
  const [listaTareas, setListaTareas] = useState([]);

  const nuevaTarea =(tarea) =>{
    setListaTareas([tarea, ...listaTareas])
  }
  //console.log(listaTareas)

/*para el boton borrar, tomamo el id de la tarea para poder borrar y con el metofo filter filtraremos la lista */
  const borrar=(id) =>{
    const listaFiltrada = listaTareas.filter((e, index)=> index !== id);
    setListaTareas(listaFiltrada);
  }

  /**actulizar tarea y ver el contenido y modificar esa copia mediante map */
  const actualizarTarea =(id, tarea) => {
    const listaActualizada = listaTareas.map((e, index) =>{      
      if(index === id){
        e = tarea;
      }
      return e;
    })
    setListaTareas(listaActualizada);
  }

  return (
    <div className="App">
      <TareaForm 
      nuevaTarea={nuevaTarea} 
      />
        <div className='lista'>
        {
              listaTareas.map((e, index) => <Tarea 
                                tarea={e}
                                borrar={borrar}
                                id={index}
                                editar={actualizarTarea}
                                />
               )
            }
        </div>          
    </div>    
  );
}

export default App;

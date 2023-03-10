import { useState } from "react"

function TodoForm({ addTarea, setOpenModal }) {
  const [textTarea, setTextTarea] = useState("");

  const onCancel = () => {
    setOpenModal(false);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if(textTarea.length > 0){
      const tarea = textTarea[0].toUpperCase() + textTarea.substring(1);
      addTarea(tarea)
      setOpenModal(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="form-tarea">
        <label>Agregar nueva tarea</label>
        <textarea 
          placeholder="Ej: Salir a correr..."
          value={textTarea}
          onChange={(e) => setTextTarea(e.target.value)} 
          autoFocus
        />
        <div className="buttons">
          <button
            type="button"
            onClick={onCancel}
            className="btn-cancel"
          >Cancelar</button>
          <button
            type="submit"
            className="btn-submit"
          >Añadir</button>
        </div>
    </form>
  )
}

export default TodoForm
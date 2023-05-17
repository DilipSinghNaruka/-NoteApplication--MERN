import React, { useContext, useState } from 'react'
import noteContext from '../../context/notes/noteContext';

function AddNote() {
    const context = useContext(noteContext)
    const {addNote} = context;
    const [note, setNote] = useState({title:"", description:""})
    const handle = (e) => {
        e.preventDefault();
        addNote(note.title, note.description);
        setNote({ title: "", description: "" });
    };
    const onChange = (e) =>{
        setNote({...note, [e.target.name]:e.target.value})

    }

    
  return (
    <div className="input-container">
      <input
        type="text"
        id='title'
        className="input-field"
        onChange={onChange}
        name='title'
        placeholder="title"
      />

      <input
        type="text"
        id='description'
        className="input-field"
        onChange={onChange}
        name="description"
        placeholder="Desct"
      />

      <button className="submit-btn" onClick={handle}>
        Add Task
      </button>
    </div>
  );
}

export default AddNote
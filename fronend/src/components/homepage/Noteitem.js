import React, { useContext } from 'react'
import "./Noteitem.css"
import noteContext from '../../context/notes/noteContext';
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";

function Noteitem(props) {
    const context = useContext(noteContext);
    const {deleteNote} = context;
    const {note} = props;

  return (
    <div className="card" key={note._id}>
      <div className="card-content">
        <h2>{note.title}</h2>
        <p>{note.description}</p>
        <AiFillDelete
          className="i"
          onClick={() => {
            return deleteNote(note._id);
          }}
        ></AiFillDelete>
        <BiEdit className="i"></BiEdit>
      </div>
    </div>
  );
}

export default Noteitem
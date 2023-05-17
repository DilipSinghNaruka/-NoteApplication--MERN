import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:8080";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // get all notes

  const getNotes = async (title, description) => {
    // todo api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token')
      },
    });
    const json = await response.json();

    console.log(json);
    setNotes(json);
  };

  // add a note
  const addNote = async (title, description) => {
    // todo api call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description }),
    });
    const json = response.json();
    const note = json;
    setNotes(notes.concat(note));
  };

  // delete a note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token')
      },
    });
    const json = await response.json();
    console.log(json);
    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a Note
  // const editNote = async (id, title, description, tag) => {
  //   const response = await fetch(`${host}api/notes/updatenote/${id}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "auth-token":
  //         localStorage.getItem('token')
  //     },
  //     body: JSON.stringify({ title, description }),
  //   });
  //   const json = response.json();

  //   for (let index = 0; index < notes.length; index++) {
  //     const element = notes[index];
  //     if (element._id === id) {
  //       element._id = title;
  //       element.description = description;
  //     }
  //   }
  // };
  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

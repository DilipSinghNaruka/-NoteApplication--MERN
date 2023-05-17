// import React, { useContext, useEffect } from "react";
// import noteContext from "../../context/notes/noteContext";
// import Noteitem from "./Noteitem";
// import "./Noteitem.css";
// import AddNote from "./AddNote";
// import { useNavigate } from "react-router-dom";

// function Notes() {
//   const navigate = useNavigate();

//   const context = useContext(noteContext);
//   const { notes, getNotes } = context;
//   useEffect(() => {
//     if (localStorage.getItem("token")) {
//       getNotes();
//     } else {
//       navigate("/login");
//     }
//   }, []);

//   return (
//     <>
//       <AddNote />
//       <div className="addItemlist">
//         <ul className="task-list">
//           {notes.map((note) => {
//             return <Noteitem key={note._id} note={note} />;
//           })}
//         </ul>
//       </div>
//     </>
//   );
// }

// export default Notes;

import React, { useContext, useEffect } from "react";
import noteContext from "../../context/notes/noteContext";
import Noteitem from "./Noteitem";
import "./Noteitem.css";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

function Notes() {
  const navigate = useNavigate();

  const context = useContext(noteContext);
  const { notes, getNotes } = context;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <AddNote />
      <div className="addItemlist">
        <ul className="task-list">
          {notes.map((note) => {
            return <Noteitem key={note._id} note={note} />;
          })}
        </ul>
      </div>
    </>
  );
}

export default Notes;

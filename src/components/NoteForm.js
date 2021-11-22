import { useState } from "react";
import { Toggeable } from "./Toggeable";
export const NoteForm = ({  addNote, handleLogout }) => {
  const [newNote, setNewNote] = useState("");

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const noteObj = {
      title: "Hello note",
      body: newNote,
    };

    addNote(noteObj);
    setNewNote("")
  }
  return (
    <Toggeable buttonLabel="New Note">
    <h1>Create a New Note</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button type="submit">Create New Note</button>
      </form>
      <button onClick={handleLogout}>Logout</button>
    </Toggeable>
  );
};

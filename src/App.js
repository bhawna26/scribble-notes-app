import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Notes from "./components/Notes";
import Form from "./components/Form";

function App() {
  const [notes,setNotes]=useState([]);
  const addNote=(note)=>{
   setNotes([...notes,note]);
  };
  const deleteNote=(uniqueId)=>{
   const newArr=notes.filter((ele,idx)=>{
    return idx!== uniqueId;
   });
   setNotes(newArr);
  };

  return (
    <React.Fragment>
      <Header/>
      <Form addNote={addNote}/>
      {notes.map((ele,idx)=>{
        return <Notes title={ele.title} content={ele.content} deleteNote={deleteNote} uniqueId={idx}/>
      })}
      
      <Footer/>
    </React.Fragment>
  );
}

export default App;

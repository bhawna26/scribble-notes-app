import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';


const Notes=(props)=>{
  const noteDeleteHandler = () => {
		props.deleteNote(props.uniqueId);
	};
  return(
    <>
    <div className="note">
				<h1>{props.title}</h1>
				<p>{props.content}</p>
				<button onClick={noteDeleteHandler}>
					<DeleteIcon />
				</button>
			</div>
    </>
  )
}

export default Notes;
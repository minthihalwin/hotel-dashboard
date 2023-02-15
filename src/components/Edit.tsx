import React, { useState } from 'react'

interface IProps {
  editDescription: boolean;
  setEditDescription: React.Dispatch<React.SetStateAction<boolean>>;
}

function Edit({editDescription, setEditDescription}: IProps) {
    const [newDescription, setNewDescription] = useState("");

    const handleUpdate = () => {

        //update hotel

        setEditDescription(!editDescription);
        //navigate back to homepage
    }

  return (
    <div className="edit">

        <label>Please enter the new hotel description below:</label>
        <textarea value={newDescription} onChange={(e) => setNewDescription(e.target.value)} required name="description" id="description" ></textarea>
        <button className='update-button' onClick={() => handleUpdate()}>Update Hotel</button>
    </div>
  )
}

export default Edit
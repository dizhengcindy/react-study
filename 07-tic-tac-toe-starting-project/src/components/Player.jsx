import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    // setIsEditing(!isEditing);//schedule a state update to true but not updating it right away
    setIsEditing((editing) => !editing); //get latest state value at the point of time where this scheduled update is executed
  }

  function handleChange(event){
    setPlayerName(event.target.value);
  }

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input type="text" required value={playerName} onChange={handleChange}/> //must be filled out before submitting the form
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

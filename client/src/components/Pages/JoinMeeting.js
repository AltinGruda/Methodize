import React, { useState } from "react";
import Search from '../../css/Search.css'
import Button from '../../css/button.css'
export default function JoinRoom() {
  const [room, setRoom] = useState(null);

  const onSubmit = () => {
    window.location.assign(`/video/${room}`);
  };

  return (
    <div>

      <div class="box">
        <h1>Enter your room</h1>
        <input type="text" className="input" name="txt" onmouseout="this.value = ''; this.blur();" onChange={(e) => setRoom(e.target.value)} />
        <div></div>
        <button onClick={onSubmit} className="btn"><em>Enter</em></button>
      </div>
    </div>


  );
}

import React from 'react';
import socket from "../socket";

const JoinBlock = () => {
  return (
    <div>
      <div className="join-block">
        <input className="input" type="text" placeholder="Room ID" />
        <input className="input" type="text" placeholder="Your name" />
        <button className="btn">Sign In</button>
      </div>
    </div>
  )
}

export default JoinBlock;
import React from "react";
import onlineIcon from "../../icons/onlineIcon.png";
import "./TextContainer.css";

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Realtime Chat Application 💬</h1>
      <h2>Created with React, Express, Node and Socket.IO ❤️</h2>
      <h2>Try it out right now! ⬅️</h2>
    </div>
    {users.length > 0 && (
      <div>
        <h1>People currently chatting:</h1>
        <div className="activeContainer">
          {users.map(({ name }) => (
            <div key={name} className="activeItem">
              {name}
              <img alt="Online" src={onlineIcon} />
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

export default TextContainer;

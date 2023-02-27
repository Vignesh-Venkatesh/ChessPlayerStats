import "./CSS/PlayerPhoto.css";
import { useState, useEffect } from "react";
import "./Assets/default-player-image.svg";

function PlayerPhoto({ playerName }) {
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    async function getAvatar() {
      try {
        const response = await fetch(
          `https://api.chess.com/pub/player/${playerName}`
        );
        const data = await response.json();
        console.log(data);
        setAvatar(data);
      } catch (error) {
        console.error(error);
      }
    }

    getAvatar();
  }, [playerName]);

  return (
    <div className="player-photo">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
      />

      <div className="photo-tile">
        <div className="photo">
          {avatar && avatar.avatar ? (
            <img src={avatar.avatar} alt={avatar.username} />
          ) : (
            <img
              src={require("./Assets/default-player-image.svg").default}
              alt={avatar?.username || "default player"}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default PlayerPhoto;

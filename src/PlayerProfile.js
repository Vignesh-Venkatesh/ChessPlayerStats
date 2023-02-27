import PlayerPhoto from "./PlayerPhoto";
import { useState, useEffect } from "react";
import "./CSS/PlayerProfile.css"
import "/node_modules/flag-icons/css/flag-icons.min.css";

const Converter = require('timestamp-conv');

function PlayerProfile({ playerName, selectedOption }){
    const [stats, setPlayerProfile] = useState(null);

    useEffect(() => {
      async function getPlayerProfile() {
          try {
              const response = await fetch(`https://api.chess.com/pub/player/${playerName}`);
              const data = await response.json();
              setPlayerProfile(data);
          } catch (error) {
              console.error(error);
          }
      }

      getPlayerProfile();
    }, [playerName, selectedOption]);

    return(
        <div>
        
            <div className="player-profile">
            {stats ? (
                <>
                
                    <PlayerPhoto className="player-photo" playerName={playerName}/>
                    <span className={`fi fi-${stats.country.slice(-2).toLowerCase()}`}></span>
                    
                    <div className="profile">
                        <p><span className="username">Username: </span>{stats.username || "N/A"}</p>
                        <p><span className="title">Title: </span>{stats.title || "N/A"}</p>
                        <p><span className="location">Location: </span>{stats.location || "N/A"}</p>
                        <p><span className="joined">Joined: </span>{stats.joined || "N/A"}</p>
                        <p><span className="last-online">Last Online: </span>{stats.last_online || "N/A"}</p>
                        <p><span className="followers">Followers: </span>{stats.followers || "N/A"}</p>
                        <a href={stats.url} className="profile-url" target="_blank">Check out {stats.username}'s page!</a>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
            </div>
        </div>
    );
}

export default PlayerProfile;
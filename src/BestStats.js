import { useState, useEffect } from "react";
import "./CSS/CurrentStats.css";
import PlayerPhoto from "./PlayerPhoto";


function BestStats({ playerName, selectedOption }) {
    const [stats, setStats] = useState(null);

    useEffect(() => {
      async function getBestStats() {
          try {
              const response = await fetch(`https://api.chess.com/pub/player/${playerName}/stats`);
              const data = await response.json();
              setStats(data);
          } catch (error) {
              console.error(error);
          }
      }

      getBestStats();
  }, [playerName, selectedOption]);

    return (

        <div>
          <PlayerPhoto playerName={playerName}/>
          <div className="stats-container">
            {stats ? (
              <>
                <div className="statTile">
                  <div className="stats">
                    <p className="text">
                      Rapid <i className="fa-solid fa-stopwatch"></i>
                    </p>
                    <p className="rating">{stats.chess_rapid?.best?.rating || "N/A"}</p>
                    <p className="w-r-l">
                      <span className="win">{stats.chess_rapid?.record?.win || "-"}</span>/
                      <span className="loss">{stats.chess_rapid?.record?.loss || "-"}</span>/
                      <span className="draw">{stats.chess_rapid?.record?.draw || "-"}</span>
                    </p>
                  </div>
                </div>
      
                <div className="statTile">
                  <div className="stats">
                    <p className="text">
                      Blitz <i className="fa-solid fa-bolt-lightning"></i>
                    </p>
                    <p className="rating">{stats.chess_blitz?.best?.rating || "N/A"}</p>
                    <p className="w-r-l">
                      <span className="win">{stats.chess_blitz?.record?.win || "-"}</span>/
                      <span className="loss">{stats.chess_blitz?.record?.loss || "-"}</span>/
                      <span className="draw">{stats.chess_blitz?.record?.draw || "-"}</span>
                    </p>
                  </div>
                </div>
      
                <div className="statTile">
                  <div className="stats">
                    <p className="text">
                      Bullet <i className="fa-solid fa-jet-fighter"></i>
                    </p>
                    <p className="rating">{stats.chess_bullet?.best?.rating || "N/A"}</p>
                    <p className="w-r-l">
                      <span className="win">{stats.chess_bullet?.record?.win || "-"}</span>/
                      <span className="loss">{stats.chess_bullet?.record?.loss || "-"}</span>/
                      <span className="draw">{stats.chess_bullet?.record?.draw || "-"}</span>
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      );
    
}

export default BestStats;

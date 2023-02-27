import './CSS/App.css';
import CurrentStats from "./CurrentStats"
import OptionBar from './OptionBar';
import SearchBar from './SearchBar';
import PlayerPhoto from './PlayerPhoto';
import BestStats from './BestStats';
import PlayerProfile from './PlayerProfile';
import { useState } from "react";
import {Helmet} from "react-helmet";

function App() {
  const [playerName, setPlayerName] = useState("");

  const handleSearchSubmit = (name) => {
    setPlayerName(name);
  };

  const [selectedOption, setSelectedOption] = useState('current-rating-button');
  

  return (
    <body>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Chess.com Player Stats | By Vignesh</title>
        <link rel="canonical" href="https://vignesh-venkatesh.github.io/ChessPlayerStats/" />
      </Helmet>
      <div className="App">
        
        <div className="stats-and-photo">
          <SearchBar className="SearchBar" onSearchSubmit={handleSearchSubmit}/>
          <OptionBar className="OptionBar" selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
          <div className="Photo-Stats">
            {selectedOption === 'current-rating-button' && <CurrentStats playerName={playerName}/>}
            {selectedOption === 'best-rating-button' && <BestStats playerName={playerName} selectedOption={selectedOption} />}
            {selectedOption === 'player-profile-button' && <PlayerProfile playerName={playerName} selectedOption={selectedOption}/>}
          </div>
        </div>
      </div>
    </body>

  );
}

export default App;

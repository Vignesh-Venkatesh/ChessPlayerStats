import './CSS/OptionBar.css';

function OptionBar(props) {
  const { selectedOption, setSelectedOption } = props;

  const handleOptionClick = (event) => {
    setSelectedOption(event.target.id);
  };

  return (
    <div className="option-bar">
        <button
            id="player-profile-button"
            onClick={handleOptionClick}
            className={selectedOption === 'player-profile-button' ? 'selected' : ''}
        >
            Player Profile
        </button>
        <button
            id="current-rating-button"
            onClick={handleOptionClick}
            className={selectedOption === 'current-rating-button' ? 'selected' : ''}
        >
            Current Rating
        </button>
        <button
            id="best-rating-button"
            onClick={handleOptionClick}
            className={selectedOption === 'best-rating-button' ? 'selected' : ''}
        >
            Best Rating
        </button>
      
    </div>
  );
}

export default OptionBar;

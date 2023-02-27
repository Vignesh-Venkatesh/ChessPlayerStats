import "./CSS/SearchBar.css"
import { useState } from "react";

function SearchBar(props){
    const [name, setName] = useState("");

    const handleSearchSubmit = () => {
        props.onSearchSubmit(name);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    return(
        <div className="search-bar">
            <div>
                <input type="text" placeholder="Enter Player Username" value={name} onChange={handleNameChange} />
            </div>
            
            <button className="submit-button" onClick={handleSearchSubmit}>Submit</button>
        </div>
    );
}

export default SearchBar;


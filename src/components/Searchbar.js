import React from 'react'

const SearchBar = (props) => {
    return (
        <div className="searchBar" >
            <input 
            placeholder="Search Here..."
            value = {props.value}
            onChange={(event)=> props.setSearchValue(event.target.value)}
            ></input>
        </div>
    )
}


export default SearchBar;
import React from 'react'

const Search = ({location, setLocation, searchLocation}) => {
  return (
    <div className="search">
        <input
          value={location}
          onChange={e => setLocation(e.target.value)}
          onKeyPress={searchLocation}
          placeholder='Buscar...'
          type="text" />
      </div>
  )
}

export default Search;
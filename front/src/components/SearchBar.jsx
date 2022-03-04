import React from 'react'
import './Searchbar.css'

const SearchBar = () => {
  return (
    <div className='container'>
      <div className='box-btn'>
        <button type="button" class="btn select-button btn-light">Buy</button>
        <button type="button" class="btn select-button btn-light">Rent</button>
      </div>
      <div className='box-btn2'>
        <button type="button" class="btn select-button btn-light">Κατοικία</button>
        <button type="button" class="btn select-button btn-light">Επαγγελματικό</button>
        <button type="button" class="btn select-button btn-light">Γη</button>
      </div>
      <form class="d-flex">
          <i class="bi bi-geo-alt"></i>
          <input class="form-control me-2 location" type="search" placeholder="Location" aria-label="Search"/>
          <div className='vertical-line'></div>
          <i class="bi bi-currency-euro"></i>
          <input class="form-control me-2 price" type="search" placeholder="Price" aria-label="Search"/>
          <div className='vertical-line'></div>
          <input class="form-control me-2 size" type="search" placeholder="Size" aria-label="Search"/>
          
          <button class="btn search-btn btn-outline-warning" type="submit">Search</button>
      </form>
    
    </div>
  )
}

export default SearchBar

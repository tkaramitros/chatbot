import React, { useState } from 'react'
import './Searchbar.css'


const SearchBar = () => {

  const [location,setLocation] = useState('');
  const [price,setPrice] = useState('');
  const [size,setSize] = useState('');




  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(location,price,size)
  }

  return (
    
      <div className='container' >
        <div className='selection row'>
          <div className='box-btn  col-sm col-lg-2 col-md ' id='container'>
            <button type="button" className="btn select-button btn-light active"  aria-pressed="true" data-bs-toggle="button" autoComplete="off">Buy</button>
            <button type="button" className="btn select-button btn-light"  data-bs-toggle="button" autoComplete="off">Rent</button>
          </div>
          <div className='box-btn2 col-sm col-lg-3 '>
            <button type="button" className="btn select-button btn-light active" aria-pressed="true" data-bs-toggle="button" autoComplete="off">Κατοικία</button>
            <button type="button" className="btn select-button btn-light" data-bs-toggle="button" autoComplete="off">Επαγγελματικό</button>
            <button type="button" className="btn select-button btn-light" data-bs-toggle="button" autoComplete="off">Γη</button>
          </div>
        </div>
      
        <div className="d-flex row no-gutters ">
            <nav className="navbar navbar-light  col-lg-5 col-sm col-md">
              <form className="form-inline">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1"><i className="bi bi-geo-alt"></i></span>
                  </div>
                  <input type="text" className="form-control" placeholder="Location" onChange={(e)=> setLocation(e.target.value)} aria-label="Location" aria-describedby="basic-addon1"/>
                </div>
              </form>
            </nav>
            {/*<div className='vertical-line'></div>*/}
            <nav className="navbar navbar-light price col-lg col-sm">
              <form className="form-inline">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text icon" id="basic-addon1"><i className="bi bi-currency-euro"></i></span>
                  </div>
                  <input type="text" className="form-control" placeholder="Price" onChange={(e)=> setPrice(e.target.value)} aria-label="Price" aria-describedby="basic-addon1"/>
                </div>
              </form>
            </nav>
            {/*<div className='vertical-line'></div>*/}
            <nav className="navbar navbar-light col-lg col">
              <form className="form-inline">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text icon" id="basic-addon1"><i className="bi bi-house-fill"></i></span>
                  </div>
                  <input type="text" className="form-control" placeholder="Size" onChange={(e)=> setSize(e.target.value)} aria-label="Size" aria-describedby="basic-addon1"/>
                </div>
              </form>
            </nav>
            <button className="btn search-btn btn-outline-warning " type="submit" onClick={handleSubmit}>Search</button>
        </div>
      </div>
  
    
    
  )
}

export default SearchBar

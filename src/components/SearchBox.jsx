import React from 'react'

const SearchBox = () => {
  return (
    <div className='search_box_container'>
      <i className="fa fa-search" aria-hidden="true"></i>
      <input type='text' placeholder='Search for brands/products' className='search_box' />
    </div>
  )
}

export default SearchBox
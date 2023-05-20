import React from 'react'
import { useDispatch } from 'react-redux'
import { searchItem } from '../store/product'

const SearchBox = () => {

  const dispatch = useDispatch()

  const searchHandler = (e) => {

    dispatch(searchItem(e.target.value))
  }

  return (
    <div className='search_box_container'>
      <i className="fa fa-search" aria-hidden="true"></i>
      <input type='search' onChange={searchHandler} placeholder='Search for brands/products' className='search_box' />
    </div>
  )
}

export default SearchBox
import React from 'react'
// import { Link } from 'react-router-dom';

const pryNav = ['Nike', 'Adidas', 'Puma', 'New Balance'];



const Navigation = () => {
  return (
    <nav className='pry_nav'>
      <ul>
        {pryNav.map((nav) => (
          <li key={nav}>
            <a href={nav}>
              {nav}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
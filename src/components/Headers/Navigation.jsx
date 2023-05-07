import React from 'react'
import { Link } from 'react-router-dom';

const pryNav = [
  {
    link: `nike`,
    name: `Nike`
  },
  {
    link: `adidas`,
    name: `Adidas`
  },
  {
    link: `puma`,
    name: `Puma`
  },
  {
    link: `new_balance`,
    name: `New Balance`
  },
];



const Navigation = () => {
  return (
    <nav className='pry_nav'>
      <ul>
        {pryNav.map((nav) => (
          <li key={nav.link}>
            <Link to={nav.link}>
              {nav.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
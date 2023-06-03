import React from 'react'
import { NavLink } from 'react-router-dom';

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
    link: `sketchers`,
    name: `Sketchers`
  },
];
const defaultClassName = ` text-[1.05rem] font-medium `
const stateCss = `hover:text-blue-400`

const Navigation = () => {
  return (
    <nav className='pry_nav '>
      <ul className='md:flex gap-3'>
        {pryNav.map((nav) => (
          <li key={nav.link} className=''>
            <NavLink to={nav.link} className={({isActive}) => {
              return isActive ? `${defaultClassName} text-blue-600` : `${defaultClassName} ${stateCss}`
            }}>
              {nav.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
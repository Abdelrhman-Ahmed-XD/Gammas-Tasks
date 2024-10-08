import { NavLink } from 'react-router-dom'
import { useContext } from 'react'

import SlideShowContext from '../../contexts/SlideShowContext'

import styles from './Header.module.css'

export function Header() {
  const { open, setOpen } = useContext(SlideShowContext)

  return (
    <header className={styles.header}>
      <nav>
        <NavLink to="/" title="Home">
          <img
            src="/assets/galleria..svg"
            alt="Logo"
            onClick={() => setOpen(false)}
          />
        </NavLink>
        <NavLink to={open ? '/' : `/artist/0`} title={open ? 'Home' : 'Artist'}>
          <p onClick={() => setOpen(!open)}>
            {open ? 'stop' : 'start'} slideshow
          </p>
        </NavLink>
      </nav>
      <div className={styles.separator}>
        <hr />
      </div>
    </header>
  )
}

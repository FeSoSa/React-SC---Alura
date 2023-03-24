import React from 'react'
import styles from './menu.module.scss'
import icons from './icons.json';
import Icons from './Icons/index.jsx'

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        {icons.map(icons => (<Icons key={icons.id} icons={icons} styles={styles} />))}
      </ul>
    </nav>
  )
}

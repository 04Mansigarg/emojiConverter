import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Converter.module.css"

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <Link className={styles.link} to="/">Home</Link>
        <Link className={styles.link} to="/post">Post</Link>
      </div>
    </div>
  )
}

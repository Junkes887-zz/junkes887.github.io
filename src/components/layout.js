import React from "react"
import { Link } from "gatsby"
import { FiArrowLeft } from 'react-icons/fi'

import { rhythm, scale } from "../utils/typography"

import style from '../styles/global.module.css'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1 className={style.title}
        style={{
          ...scale(1.5),
        }}
      >
        <Link to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3 className={style.back}>
        <Link className={style.title} to={`/`}
        >
          <FiArrowLeft />
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        backgroundColor: 'rgba(0%,0%,0%,0.3)',
        borderRadius: `15px`
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © 2020, Built with
        {` `}
        <a style={{
          boxShadow: 0
        }} href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout

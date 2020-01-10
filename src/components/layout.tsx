/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Link } from 'gatsby'
import Container from 'react-bootstrap/Container'

import '../styles/bootstrap.css'
import '../styles/global.css'

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <header>
        <nav
          className="flex justify-between"
          style={{ padding: '20px 40px', background: '#242b31' }}
        >
          <Link to="/">Dota 2 Demo</Link>
          <Link to="/">Teams</Link>
        </nav>
      </header>

      <main>
        <Container>{children}</Container>
      </main>
    </>
  )
}

export default Layout

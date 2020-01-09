/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Container from 'react-bootstrap/Container'

import '../styles/bootstrap.css'
import '../styles/global.css'

/**
 * @function Layout
 */
const Layout = ({ children }: { children: any }) => {
  return <Container>{children}</Container>
}

export default Layout

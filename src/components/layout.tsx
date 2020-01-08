/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Helmet from 'react-helmet'
import Container from 'react-bootstrap/Container'

/**
 * @function Layout
 */
const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />

        <style type="text/css">{`
            body {
              background-color: #02111B;
              margin: 40px 0;
            }

            h1 {
              font-size: 1.75rem;
              color: #FCFCFC;
            }
        `}</style>
      </Helmet>

      <Container>{children}</Container>
    </>
  )
}

export default Layout

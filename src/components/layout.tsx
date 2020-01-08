import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import dota2Logo from '../img/dota-2-logo.png'

/**
 * @function Layout
 */
const Layout = ({ children }) => {
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
            html,
            body {
              background-color: #1D242E;
              color: white !important;
            }

            nav {
              background-color: #242F39;
              padding: 25px 40px;
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
            
            nav a {
              color: white;
              font-weight: 500;
              font-size: 18px;
            }

            h1 {
              font-size: 1.5rem;
              margin-bottom: 0;
              padding-bottom: 0;
            }

            h2 {
              font-size: 1.2rem;
            }

            hr {
              margin: .5rem 0;
            }

            table {
              margin-top: 26px;
              font-size: 18px;
            }

            table a {
              color: #66d3d3;
            }

            table a:hover {
              color: #F9F9F9;
              text-decoration: unset;
            }

            .table-sm td {
              padding: .5rem;
            }

            hr {
              border-top: 1px solid #ffffff4d
            }

            .shrink-wrap {
              max-width: 1250px;
              margin: 0 auto;
              padding-top: 25px;
              padding-bottom: 40px;
            }

            @media(max-width: 1200px) {
              .shrink-wrap {
                margin: 0 40px; 
              }
            }
        `}</style>
      </Helmet>

      <main>
        <div className="shrink-wrap">{children}</div>
      </main>
    </>
  )
}

export default Layout

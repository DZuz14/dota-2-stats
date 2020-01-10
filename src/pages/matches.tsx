/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { Router } from '@reach/router'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const Test = () => <div>Match 2747483</div>

const Matches = ({ location: { pathname } }) => {
  if (pathname === '/matches' || pathname === '/matches/') {
    window.location = '/'
  }

  return (
    <Layout>
      <Router>
        <Test path="matches/:matchId" />
      </Router>
    </Layout>
  )
}

// export const query = graphql`
//   query {

//   }
// `

export default Matches

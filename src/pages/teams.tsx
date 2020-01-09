import React from 'react'
import { Router } from '@reach/router'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import TeamHome from '../components/TeamHome'

/**
 * @function Teams
 */

const Teams = () => {
  return (
    <Layout>
      <Router>
        <TeamHome path="teams/:teamId" />
      </Router>
    </Layout>
  )
}

export default Teams

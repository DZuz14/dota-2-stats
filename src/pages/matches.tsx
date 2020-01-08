/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { graphql } from 'gatsby'
import { Router } from '@reach/router'

import Layout from '../components/layout'
import MatchDetail from '../components/match-detail'
import MatchList from '../components/match-list'

/**
 * @function MatchesPage
 */
const MatchesPage = ({ location, data }: { location: any }) => {
  return (
    <Layout>
      <Router>
        <MatchList
          exact
          path="/matches"
          search={location.search}
          matches={data.allMatchesJson}
        />
        <MatchDetail path="/matches/:id" />
      </Router>
    </Layout>
  )
}

export default MatchesPage

export const query = graphql`
  query {
    allMatchesJson {
      edges {
        node {
          match_id
          league_name
          opposing_team_logo
          opposing_team_name
          start_time
          leagueid
          league_name
        }
      }
    }
  }
`

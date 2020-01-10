/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { Router } from '@reach/router'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Match from '../components/Match'

const Matches = ({ data: { allMatchJson } }) => {
  return (
    <Layout>
      <Router>
        <Match path="matches/:matchId" match={allMatchJson.edges} />
      </Router>
    </Layout>
  )
}

export const query = graphql`
  query Match {
    allMatchJson {
      edges {
        node {
          radiant_team {
            name
            logo_url
          }
          dire_team {
            name
            logo_url
          }
          players {
            name
            kills
            deaths
            assists
            last_hits
            denies
            hero_damage
          }
        }
      }
    }
  }
`

export default Matches

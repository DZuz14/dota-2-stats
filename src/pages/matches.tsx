/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { Router } from '@reach/router'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Match from '../components/Match'

import { Match as MatchInterface } from '../types'

interface PageProps {
  data: {
    allMatchJson: {
      edges: { node: MatchInterface }[]
    }
  }
}

const Matches = ({ data: { allMatchJson } }: PageProps) => {
  return (
    <Layout>
      <Router>
        <Match
          path="dota-2-stats/matches/:matchId"
          match={allMatchJson.edges[0].node}
        />
      </Router>
    </Layout>
  )
}

export default Matches

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
            account_id
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

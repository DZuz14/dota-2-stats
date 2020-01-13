/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { Router } from '@reach/router'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Team from '../components/Team'

import { MatchSummary, PlayerSummary, TeamSummary } from '../types'

interface PageProps {
  data: {
    allMatchesJson: {
      edges: { node: MatchSummary }[]
    }
    allPlayersJson: {
      edges: { node: PlayerSummary }[]
    }
    allTeamsJson: {
      edges: { node: TeamSummary }[]
    }
  }
}

const Teams = ({
  data: { allTeamsJson, allPlayersJson, allMatchesJson }
}: PageProps) => (
  <Layout>
    <Router>
      <Team
        path="teams/:teamId"
        team={allTeamsJson.edges}
        players={allPlayersJson.edges}
        matches={allMatchesJson.edges}
      />
    </Router>
  </Layout>
)

export default Teams

export const query = graphql`
  query {
    allMatchesJson(
      filter: {
        opposing_team_name: { ne: "Vici Gaming" }
        opposing_team_logo: { ne: null }
      }
      limit: 20
    ) {
      edges {
        node {
          match_id
          radiant_win
          radiant
          start_time
          opposing_team_id
          opposing_team_name
          opposing_team_logo
        }
      }
    }
    allPlayersJson(
      filter: { is_current_team_member: { eq: true } }
      sort: { fields: [wins], order: DESC }
    ) {
      edges {
        node {
          name
          wins
          games_played
          account_id
        }
      }
    }
    allTeamsJson(limit: 1) {
      edges {
        node {
          logo_url
          name
          wins
          losses
          last_match_time
        }
      }
    }
  }
`

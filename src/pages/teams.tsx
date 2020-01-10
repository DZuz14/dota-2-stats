/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

/**
 * @interface MatchSummary
 */
interface MatchSummary {
  node: {
    match_id: number
    radiant_win: boolean
    radiant: boolean
    start_time: number
    opposing_team_id: number
    opposing_team_name: string
    opposing_team_logo: string
  }
}

/**
 * @interface PageProps
 */
interface PageProps {
  data: {
    allMatchesJson: MatchSummary[]
    allPlayersJson: { name: string }
  }
}

/**
 * @function Teams
 */

const Teams = ({
  data: { allMatchesJson, allPlayersJson, allTeamsJson }
}: PageProps) => {
  const [team] = allTeamsJson.edges
  const matches = allMatchesJson.edges
  const players = allPlayersJson.edges

  return (
    <Layout>
      <div
        className="flex flex-align-center"
        style={{
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '30px'
        }}
      >
        <div>
          <img height="60" src={team.node.logo_url} />
          <h1 style={{ marginTop: '15px' }}>{team.node.name}</h1>
        </div>
      </div>

      <h2>Players</h2>
      <h2>Matches</h2>
    </Layout>
  )
}

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

export default Teams

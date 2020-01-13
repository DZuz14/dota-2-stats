/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { Router } from '@reach/router'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Player from '../components/Player'

import { PlayerProfile } from '../types'

interface Props {
  data: {
    allPlayerJson: {
      edges: { node: { profile: PlayerProfile } }[]
    }
  }
}

const Players = ({ data: { allPlayerJson } }: Props) => (
  <Layout>
    <Router>
      <Player
        path="players/:playerId"
        profile={allPlayerJson.edges[0].node.profile}
      />
    </Router>
  </Layout>
)

export default Players

export const query = graphql`
  query Player {
    allPlayerJson {
      edges {
        node {
          profile {
            account_id
            name
            steamid
            avatar
            avatarmedium
            avatarfull
            profileurl
          }
        }
      }
    }
  }
`

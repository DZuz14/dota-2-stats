/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import TeamList from '../components/TeamList'

import { TeamListItem } from '../types'

interface PageProps {
  data: {
    allTeamsJson: {
      edges: { node: TeamListItem }[]
    }
  }
}

const Index = ({ data: { allTeamsJson } }: PageProps) => {
  return (
    <Layout>
      <TeamList />
    </Layout>
  )
}

export default Index

export const query = graphql`
  query Teams {
    allTeamsJson(
      filter: { logo_url: { ne: null }, rating: { gt: 1200 }, name: { ne: "" } }
      limit: 50
      sort: { fields: [rating], order: DESC }
    ) {
      edges {
        node {
          team_id
          logo_url
          name
        }
      }
    }
  }
`

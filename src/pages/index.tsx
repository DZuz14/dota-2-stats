/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'
import { Link, graphql } from 'gatsby'
import Table from 'react-bootstrap/Table'
import styled from '@emotion/styled'
import Layout from '../components/Layout'

const TeamLogo = styled.div`
  background-image: url('${props => props.logoUrl}');
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  height: 30px;
  width: 30px;
  margin-right: 20px;
`

const RowCount = styled.span`
  margin-right: 20px;
`

const TeamName = styled.span`
  color: #fcfcfc;
`

/**
 * @interface Team
 */
interface Team {
  node: {
    rating: number
    name: string
    logo_url: string
    team_id: number
  }
}

/**
 * @interface Props
 */
interface PageProps {
  data: {
    allTeamsJson: {
      edges: Team[]
    }
  }
}

/**
 * @function Index
 */
const Index = ({ data: { allTeamsJson } }: PageProps) => {
  const teams = allTeamsJson.edges

  return (
    <Layout>
      <h1>Pro Circuit Teams</h1>

      <Table borderless variant="dark" striped>
        <tbody>
          {teams.map(
            ({ node: { name, logo_url, team_id } }: Team, i: number) => (
              <tr key={team_id}>
                <td className="flex flex-align-center">
                  <RowCount>{i + 1}.</RowCount>

                  <Link to={`/teams/${team_id}`}>
                    <TeamLogo logoUrl={logo_url} />
                  </Link>

                  <Link to={`/teams/${team_id}`}>
                    <TeamName>{name}</TeamName>
                  </Link>
                </td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </Layout>
  )
}

export const query = graphql`
  query ProTeams {
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
          rating
        }
      }
    }
  }
`

export default Index

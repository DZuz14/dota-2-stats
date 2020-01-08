import React from 'react'
import { Link, graphql } from 'gatsby'
import Table from 'react-bootstrap/Table'
import Layout from '../components/layout'

/**
 * @function Index
 */
const Index = ({ data: { allTeamsJson } }) => {
  // Querying a list of teams produces around 1000 results, far too much. There is no
  // limit parameter as far as I know after looking at the API docs.
  const teams = allTeamsJson.edges.filter(
    ({ node: { rating, name, logo_url } }) =>
      rating >= 1200 && name.trim().length !== 0 && logo_url !== null
  )

  return (
    <Layout>
      <h1>Pro Circuit Teams</h1>

      <Table borderless variant="dark" striped style={{ marginTop: '25px' }}>
        <tbody>
          {teams.map(({ node: { rating, name, logo_url, team_id } }, idx) => (
            <tr key={team_id}>
              <td style={{ display: 'flex ', alignItems: 'center' }}>
                <span style={{ marginRight: '20px' }}>{idx + 1}.</span>
                <Link to={`/teams`} style={{ marginRight: '20px' }}>
                  <div
                    style={{
                      backgroundImage: `url('${logo_url}')`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: '50% 50%',
                      backgroundSize: 'cover',
                      height: '30px',
                      width: '30px'
                    }}
                  />
                </Link>

                <Link to={`/teams/${team_id}`}>
                  <span style={{ color: '#FCFCFC' }}>{name}</span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Layout>
  )
}

export const query = graphql`
  query ProTeams {
    allTeamsJson {
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

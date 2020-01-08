import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import TableDark from '../components/table-dark'

/**
 * @interface Standing
 */
interface Standing {
  node: {
    name: string
    logo: string
    id: string
  }
}

/**
 * @function Index
 */
const Index = ({ data }) => {
  const teams = data.allStandingsJson.edges

  return (
    <Layout>
      <h1>Pro Circuit Standings</h1>

      <TableDark>
        <thead>
          <tr>
            <th>Team</th>
          </tr>
        </thead>

        <tbody>
          {teams.map(({ node: { name, logo, id } }: Standing, i: number) => (
            <tr key={name}>
              <td>
                <span style={{ marginRight: '15px' }}>{i + 1}.</span>

                <Link
                  to={`/matches?id=${id}&name=${name}&logo_id=${logo
                    .slice(30)
                    .replace('.png', '')}`}
                  style={{ color: 'white', cursor: 'pointer' }}
                >
                  <img
                    src={`/static/${logo.slice(30)}`}
                    alt="team logo"
                    style={{ height: '25px', marginRight: '10px' }}
                  />
                  {name}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </TableDark>
    </Layout>
  )
}

export default Index

export const query = graphql`
  query {
    allStandingsJson {
      edges {
        node {
          name
          logo
          id
        }
      }
    }
  }
`

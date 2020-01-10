/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'
import { Link } from 'gatsby'
import TableDark from './TableLight'

const MatchesList = ({ matches }) => (
  <TableDark>
    <thead>
      <tr>
        <td>Match ID</td>
        <td>Date</td>
        <td>Opponent</td>
        <td>Result</td>
      </tr>
    </thead>

    <tbody>
      {matches.map(
        ({
          node: { start_time, opposing_team_logo, opposing_team_name, match_id }
        }) => {
          const date = new Date(start_time * 1000)

          return (
            <tr>
              <td>
                <Link to={`matches/${match_id}`}>{match_id}</Link>
              </td>

              <td>{`${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`}</td>

              <td>
                <img height="25" src={opposing_team_logo} />
                <span>{opposing_team_name}</span>
              </td>

              <td>W</td>
            </tr>
          )
        }
      )}
    </tbody>
  </TableDark>
)

export default MatchesList

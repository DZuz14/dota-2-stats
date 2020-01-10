/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'
import { Link } from 'gatsby'
import TableLight from './TableLight'
import Win from './Win'
import Loss from './Loss'

const Matches = ({ matches }) => (
  <TableLight>
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
          node: {
            start_time,
            opposing_team_logo,
            opposing_team_name,
            match_id,
            radiant_win,
            radiant
          }
        }) => {
          const date: Date = new Date(start_time * 1000)

          return (
            <tr>
              <td>
                <Link to={`matches/${match_id}`}>{match_id}</Link>
              </td>

              <td>{`${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`}</td>

              <td>
                <img
                  height="25"
                  src={opposing_team_logo}
                  alt={opposing_team_name}
                />
                <span>{opposing_team_name}</span>
              </td>

              <td>
                {((radiant && radiant_win) || (!radiant && !radiant_win)) && (
                  <Win />
                )}

                {((radiant && !radiant_win) || (!radiant && radiant_win)) && (
                  <Loss />
                )}
              </td>
            </tr>
          )
        }
      )}
    </tbody>
  </TableLight>
)

export default Matches

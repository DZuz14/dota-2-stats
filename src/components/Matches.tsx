/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'
import { Link } from 'gatsby'
import TableLight from './TableLight'
import Win from './Win'
import Loss from './Loss'
import LogoBackground from './LogoBackground'

import { MatchSummary } from '../types'

const Matches = ({ matches }: { matches: { node: MatchSummary }[] }) => (
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
        }: {
          node: MatchSummary
        }) => {
          const date: Date = new Date(start_time * 1000)

          return (
            <tr key={match_id}>
              <td>
                <Link to={`matches/${match_id}`}>{match_id}</Link>
              </td>

              <td>{`${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`}</td>

              <td style={{ display: 'flex', alignItems: 'center' }}>
                <LogoBackground logoUrl={opposing_team_logo} />
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

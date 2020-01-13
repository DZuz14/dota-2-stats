/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'
import { Link } from 'gatsby'
import TableLight from './TableLight'
import { PlayerSummary } from '../types'

interface Props {
  players: { node: PlayerSummary }[]
}

const Players = ({ players }: Props) => (
  <TableLight>
    <thead>
      <tr>
        <td>Name</td>
        <td>Wins</td>
        <td>Games Played</td>
      </tr>
    </thead>

    <tbody>
      {players.map(({ node: { name, wins, games_played, account_id } }) => (
        <tr key={name}>
          <td>
            <Link to={`/players/${account_id}`}>{name}</Link>
          </td>
          <td>{wins}</td>
          <td>{games_played}</td>
        </tr>
      ))}
    </tbody>
  </TableLight>
)

export default Players

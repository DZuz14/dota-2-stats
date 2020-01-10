import React from 'react'
import TableLight from './TableLight'

const Players = ({ players }) => (
  <TableLight>
    <thead>
      <tr>
        <td>Name</td>
        <td>Wins</td>
        <td>Games Played</td>
      </tr>
    </thead>

    <tbody>
      {players.map(({ node: { name, wins, games_played } }) => (
        <tr key={name}>
          <td>{name}</td>
          <td>{wins}</td>
          <td>{games_played}</td>
        </tr>
      ))}
    </tbody>
  </TableLight>
)

export default Players

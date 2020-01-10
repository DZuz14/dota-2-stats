import React from 'react'
import TableLight from './TableLight'
import styled from '@emotion/styled'

const PlayersList = ({ players }) => (
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
        <tr>
          <td>{name}</td>
          <td>{wins}</td>
          <td>{games_played}</td>
        </tr>
      ))}
    </tbody>
  </TableLight>
)

export default PlayersList

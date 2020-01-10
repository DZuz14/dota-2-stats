import React from 'react'
import Table from 'react-bootstrap/Table'
import styled from '@emotion/styled'
;<Table borderless variant="dark" striped>
  <thead>
    <tr>
      <td>Name</td>
      <td>Wins</td>
      <td>Games Played</td>
    </tr>
  </thead>
  <tbody>
    {players.map(player => (
      <tr>
        <td>{player.node.name}</td>
        <td>{player.node.wins}</td>
        <td>{player.node.games_played}</td>
      </tr>
    ))}
  </tbody>
</Table>

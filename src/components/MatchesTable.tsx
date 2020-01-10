import React from 'react'
import Table from 'react-bootstrap/Table'
import styled from '@emotion/styled'
;<Table borderless variant="dark" striped>
  <thead>
    <tr>
      <td>Date</td>
      <td>Opponent</td>
      <td>Result</td>
    </tr>
  </thead>

  <tbody>
    {matches.map(matches => {
      const date = new Date(matches.node.start_time * 1000)

      return (
        <tr>
          <td>{`${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`}</td>

          <td>
            <img height="25" src={matches.node.opposing_team_logo} />
            <span>{matches.node.opposing_team_name}</span>
          </td>

          <td>
            {matches.node.radiant_win && matches.node.radiant ? (
              <Win>W</Win>
            ) : (
              <Loss>L</Loss>
            )}
          </td>
        </tr>
      )
    })}
  </tbody>
</Table>

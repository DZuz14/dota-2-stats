/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'
import styled from '@emotion/styled'
import TableLight from './TableLight'
import LogoBackground from './LogoBackground'

const columns: string[] = [
  'Player',
  'Kills',
  'Deaths',
  'Assists',
  'Last Hits',
  'Denies',
  'Damage'
]

const Match = ({ match }) => {
  const [matchDetail] = match

  const {
    node: { radiant_team, dire_team, players }
  } = matchDetail

  const radiant = radiant_team
  const radiantPlayers = players.slice(0, 5)

  const dire = dire_team
  const direPlayers = players.slice(5, 10)

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '30px',
          background: '#242b31',
          color: 'white',
          padding: '.75rem 1.5rem'
        }}
      >
        <h1>{radiant.name}</h1>
        <LogoBackground logoUrl={radiant.logo_url} />

        <Versus>vs.</Versus>

        <h1>{dire.name}</h1>
        <LogoBackground logoUrl={dire.logo_url} />
      </div>

      <h2>{radiant.name}</h2>
      <TeamStats players={radiantPlayers} />

      <h2 style={{ marginTop: '25px' }}>{dire.name}</h2>
      <TeamStats players={direPlayers} />
    </>
  )
}

const TeamStats = ({ players }) => {
  return (
    <TableLight style={{ marginTop: '4px' }}>
      <thead>
        <tr>
          {columns.map(column => (
            <td key={column}>{column}</td>
          ))}
        </tr>
      </thead>

      <tbody>
        {players.map(
          ({
            name,
            kills,
            deaths,
            assists,
            last_hits,
            denies,
            hero_damage
          }) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{kills}</td>
              <td>{deaths}</td>
              <td>{assists}</td>
              <td>{last_hits}</td>
              <td>{denies}</td>
              <td>{hero_damage}</td>
            </tr>
          )
        )}
      </tbody>
    </TableLight>
  )
}

const Versus = styled.span`
margin: '0 25px',
fontWeight: 'bold',
fontSize: '1.5rem'
`

export default Match

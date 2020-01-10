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

/**
 * @function Match
 */
const Match = () => {
  const radiant = data.radiant_team
  const radiantPlayers = data.players.slice(0, 5)

  const dire = data.dire_team
  const direPlayers = data.players.slice(5, 10)

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '15px'
        }}
      >
        <h1>{radiant.name}</h1>
        <LogoBackground logoUrl={radiant.logo_url} />

        <Versus>vs.</Versus>

        <h1>{dire.name}</h1>
        <LogoBackground logoUrl={dire.logo_url} />
      </div>

      <hr />

      <h2 style={{ color: '#66d3d3' }}>{radiant.name}</h2>
      <TeamStats players={radiantPlayers} />

      <h2 style={{ color: '#66d3d3' }}>{dire.name}</h2>
      <TeamStats players={direPlayers} />
    </>
  )
}

/**
 * @function TeamStats
 */
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
            <tr>
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

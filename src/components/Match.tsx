/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import TableLight from './TableLight'
import LogoBackground from './LogoBackground'
import Win from './Win'
import Loss from './Loss'

import { Match as MatchInterface, PlayerStats } from '../types'

const columns: string[] = [
  'Player',
  'Kills',
  'Deaths',
  'Assists',
  'Last Hits',
  'Denies',
  'Damage'
]

const MatchHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  background: #242b31;
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 18.5px;
`

const Versus = styled.span`
  margin: '0 25px',
  fontWeight: 'bold',
  fontSize: '1.5rem'
`

const TeamStats = ({ players }: { players: PlayerStats[] }) => {
  return (
    <TableLight>
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
            account_id,
            name,
            kills,
            deaths,
            assists,
            last_hits,
            denies,
            hero_damage
          }) => (
            <tr key={name}>
              <td>
                <Link to={`/players/${account_id}`}>{name}</Link>
              </td>
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

const Match = ({ match }: { match: { node: MatchInterface[] } }) => {
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
      <MatchHeading>
        <div className="flex align-center">
          <LogoBackground logoUrl={radiant.logo_url} />
          <span>{radiant.name}</span>
        </div>

        <Versus>vs.</Versus>

        <div className="flex align-center">
          <LogoBackground logoUrl={dire.logo_url} />
          <span>{dire.name}</span>
        </div>
      </MatchHeading>

      <div style={{ marginBottom: '10px' }}>
        <span style={{ marginRight: '7.5px' }}>{radiant.name}</span>
        <Win />
      </div>

      <TeamStats players={radiantPlayers} />

      <div style={{ margin: '25px 0 10px ' }}>
        <span style={{ marginRight: '7.5px' }}>{dire.name}</span>
        <Loss />
      </div>
      <TeamStats players={direPlayers} />
    </>
  )
}

export default Match

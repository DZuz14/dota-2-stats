import React from 'react'
import Alert from 'react-bootstrap/Alert'
import fetchData from '../hooks/fetchData'
import TableDark from './table-dark'
import LogoDisplay from './logo-display'

/**
 * @function TeamTable
 */
const TeamTable = ({ players }) => (
  <TableDark style={{ marginTop: '4px' }}>
    <thead>
      <tr>
        <th>Player</th>
        <th>Kills</th>
        <th>Deaths</th>
        <th>Assists</th>
        <th>Last Hits</th>
        <th>Denies</th>
        <th>Damage</th>
      </tr>
    </thead>

    <tbody>
      {players.map(
        ({ name, kills, deaths, assists, last_hits, denies, hero_damage }) => (
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
  </TableDark>
)

/**
 * @function MatchDetail
 */
const MatchDetail = ({ location }) => {
  const { data, loading } = fetchData(
    `/matches/${location.pathname.replace(/[a-z/]/g, '')}`
  )

  if (loading) {
    return null
  }

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
        <LogoDisplay logo={radiant.logo_url} height={35} width={35}>
          <h1>{radiant.name}</h1>
        </LogoDisplay>

        <span
          style={{
            margin: '0 25px',
            fontWeight: 'bold',
            fontSize: '1.5rem'
          }}
        >
          vs.
        </span>

        <LogoDisplay logo={dire.logo_url} height={35} width={35}>
          <h1>{dire.name}</h1>
        </LogoDisplay>
      </div>

      <hr />

      {/* PLayers Tables */}
      <>
        <div style={{ marginTop: '30px' }}>
          <h2 style={{ color: '#66d3d3' }}>{radiant.name}</h2>
          <TeamTable players={radiantPlayers} />
        </div>

        <div style={{ marginTop: '30px' }}>
          <h2 style={{ color: '#66d3d3' }}>{dire.name}</h2>
          <TeamTable players={direPlayers} />
        </div>

        {/* <Alert
          variant="success"
          size="sm"
          style={{
            display: 'inline',
            padding: '0.2rem',
            float: 'right'
          }}
        >
          W
        </Alert> */}
      </>
    </>
  )
}

export default MatchDetail

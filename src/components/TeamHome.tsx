/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'
import PlayerList from './PlayerList'
import MatchList from './MatchList'

const TeamHome = ({ team, players, matches }) => {
  const [_team] = team
  const {
    node: { logo_url, name }
  } = _team

  return (
    <>
      <div
        className="flex align-end"
        style={{
          marginBottom: '40px'
        }}
      >
        <img height="40" src={logo_url} alt={name} />
        <h1
          style={{
            marginLeft: '15px',
            marginBottom: '2.5px'
          }}
        >
          {name}
        </h1>
      </div>

      <h2 style={{ marginBottom: '10px' }}>Players</h2>
      <PlayerList players={players} />

      <h2 style={{ marginBottom: '10px', marginTop: '25px' }}>
        Recent Matches
      </h2>
      <MatchList matches={matches} />
    </>
  )
}

export default TeamHome

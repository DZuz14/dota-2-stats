/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'
import styled from '@emotion/styled'
import Players from './Players'
import Matches from './Matches'

const TeamName = styled.h1`
  margin-left: 15px;
  margin-bottom: 0;
  display: inline;
`

const MatchesHeading = styled.h2`
  margin-bottom: 10px;
  margin-top: 25px;
`

const PlayersHeading = styled.h2`
  margin-bottom: 10px;
`

/**
 * @todo
 *  - Add TS interfaces
 */
const TeamHome = ({ team, players, matches }) => {
  const [_team] = team
  const {
    node: { logo_url, name }
  } = _team

  return (
    <>
      <div className="flex align-center" style={{ marginBottom: '35px' }}>
        <img height="40" src={logo_url} alt={name} />
        <TeamName>{name}</TeamName>
      </div>

      <PlayersHeading>Players</PlayersHeading>
      <Players players={players} />

      <MatchesHeading>Recent Matches</MatchesHeading>
      <Matches matches={matches} />
    </>
  )
}

export default TeamHome

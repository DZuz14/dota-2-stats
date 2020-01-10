/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'
import styled from '@emotion/styled'
import Players from './Players'
import Matches from './Matches'

const TeamHome = ({ team, players, matches }) => {
  const [_team] = team
  const {
    node: { logo_url, name }
  } = _team

  return (
    <>
      <div>
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

const TeamName = styled.h1`
  margin-left: 15px;
  margin-bottom: 2.5px;
  display: inline;
`

const MatchesHeading = styled.h2`
  margin-bottom: 10px;
  margin-top: 25px;
`

const PlayersHeading = styled.h2`
  margin-bottom: 10px;
`

export default TeamHome

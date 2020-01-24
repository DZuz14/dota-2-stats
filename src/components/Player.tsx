import React from 'react'
import styled from '@emotion/styled'
import Image from 'react-bootstrap/Image'
import { PlayerProfile } from '../types'

interface Props {
  profile: PlayerProfile
}

const Bio = styled.div`
  margin-top: 40px;
  max-width: 800px;
`

const Player = ({ profile: { name, profileurl, avatarfull } }: Props) => (
  <>
    <div
      className="flex align-center justify-between"
      style={{ marginBottom: '15px' }}
    >
      <h1>{name}</h1>

      <a href={profileurl} target="_blank" rel="noopener noreferrer">
        <img src="/dota-2-stats/static/steam-icon.png" alt={name} height="40" />
      </a>
    </div>

    <Image src="/dota-2-stats/static/profile.png" alt={name} thumbnail />

    <Bio>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum."
    </Bio>
  </>
)

export default Player

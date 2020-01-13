import React from 'react'
import { PlayerProfile } from '../types'

interface Props {
  profile: PlayerProfile
}

const Player = ({ profile: { name, profileurl, avatarfull } }: Props) => (
  <>
    <h1>{name}</h1>
    <img src={avatarfull} alt={name} />
    <p>Coming soon...</p>

    {/* <a href={profileurl} target="_blank" rel="noopener noreferrer">
      Steam Profile
    </a> */}
  </>
)

export default Player

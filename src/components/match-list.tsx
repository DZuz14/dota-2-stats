/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'
import { Link } from 'gatsby'
import Accordion from 'react-bootstrap/Accordion'
import TableDark from './table-dark'
import LogoDisplay from './logo-display'

import fetchData from '../hooks/fetchData'

/**
 * @interface MatchListItem
 */
interface MatchListItem {
  match_id: number
  opposing_team_logo: string
  opposing_team_name: string
  start_time: number
  leagueid: number
  league_name: string
}

/**
 * @function MatchList
 */
const MatchList = ({ search, matches }: { search: string }) => {
  const params = new URLSearchParams(search)

  const name = params.get('name')
  const teamId = params.get('id')
  const logoId = params.get('logo_id')

  //   const { data, loading } = fetchData(`/teams/${teamId}/matches`)

  //   if (loading) {
  //     return null
  //   }

  return (
    <>
      <div>
        <img
          src={`/static/${logoId}.png`}
          alt={`${name} logo`}
          style={{ height: '40px' }}
        />

        <h1 style={{ marginTop: '10px', fontSize: '1.25rem' }}>{name}</h1>
      </div>

      <TableDark>
        <thead>
          <tr>
            <th>Date</th>
            <th>League</th>
            <th>Opponent</th>
          </tr>
        </thead>

        <tbody></tbody>
      </TableDark>
    </>
  )
}

export default MatchList

// {sliced.map(
//   ({
//     node: {
//       match_id,
//       league_name,
//       opposing_team_logo,
//       opposing_team_name,
//       start_time,
//       leagueid
//     }
//   }: MatchListItem) => {
//     const date = new Date(start_time * 1000)

//     return (
//       <tr key={match_id}>
//         <td>{`${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`}</td>

//         <td>
//           <Link to={`/matches/${match_id}`}>{league_name}</Link>
//         </td>

//         <td style={{ display: 'flex', alignItems: 'center' }}>
//           <LogoDisplay
//             logo={opposing_team_logo}
//             height={25}
//             width={25}
//           >
//             <span>{opposing_team_name}</span>
//           </LogoDisplay>
//         </td>
//       </tr>
//     )
//   }
// )}

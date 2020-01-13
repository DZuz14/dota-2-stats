/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import TableLight from './TableLight'
import LogoBackground from './LogoBackground'

import { TeamSummary } from '../types'

const RowCount = styled.span`
  margin-right: 20px;
`

interface Props {
  teams: { node: TeamSummary }[]
}

const Teams = ({ teams }: Props) => {
  return (
    <TableLight>
      <thead>
        <tr>
          <td>Pro Circuit</td>
        </tr>
      </thead>

      <tbody>
        {teams.map(
          (
            { node: { name, logo_url, team_id } }: { node: TeamSummary },
            i: number
          ) => (
            <tr key={team_id}>
              <td className="flex align-center">
                <RowCount>{i + 1}.</RowCount>

                <Link to={`/teams/${team_id}`}>
                  <LogoBackground logoUrl={logo_url} />
                </Link>

                <Link to={`/teams/${team_id}`} className="no-decoration">
                  {name}
                </Link>
              </td>
            </tr>
          )
        )}
      </tbody>
    </TableLight>
  )
}

export default Teams

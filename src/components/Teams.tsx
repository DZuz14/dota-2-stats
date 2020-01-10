import React from 'react'
import styled from '@emotion/styled'
import TableLight from './TableLight'
import LogoBackground from './LogoBackground'

const Teams = () => {
  return (
    <TableLight>
      <thead>
        <tr>
          <td>Pro Circuit</td>
        </tr>
      </thead>

      <tbody>
        {allTeamsJson.edges.map(
          (
            { node: { name, logo_url, team_id } }: { node: Team },
            i: number
          ) => (
            <tr key={team_id}>
              <td className="flex flex-align-center">
                <RowCount>{i + 1}.</RowCount>

                <Link to={`/teams/${team_id}`}>
                  <LogoBackground logoUrl={logo_url} />
                </Link>

                <Link to={`/teams/${team_id}`}>{name}</Link>
              </td>
            </tr>
          )
        )}
      </tbody>
    </TableLight>
  )
}

const RowCount = styled.span`
  margin-right: 20px;
`

export default Teams

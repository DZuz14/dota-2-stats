import React from 'react'
import TableLight from './TableLight'

const TeamLogo = styled.div`
background-image: url('${props => props.logoUrl}');
background-repeat: no-repeat;
background-position: 50% 50%;
background-size: cover;
height: 30px;
width: 30px;
margin-right: 15px;
`

const RowCount = styled.span`
  margin-right: 20px;
`

const TeamName = styled.span``

const TeamList = () => {
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
                  <TeamLogo logoUrl={logo_url} />
                </Link>

                <Link to={`/teams/${team_id}`}>
                  <TeamName>{name}</TeamName>
                </Link>
              </td>
            </tr>
          )
        )}
      </tbody>
    </TableLight>
  )
}

export default TeamList

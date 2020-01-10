export interface MatchSummary {
  match_id: number
  radiant_win: boolean
  radiant: boolean
  start_time: number
  opposing_team_id: number
  opposing_team_name: string
  opposing_team_logo: string
}

export interface PlayerSummary {
  account_id: number
  name: string
  games_played: number
  wins: number
  is_current_team_member: boolean
}

export interface TeamSummary {
  team_id: number
  rating?: number
  wins?: number
  losses?: number
  last_match_time?: number
  name: string
  tag?: string
  logo_url: string
}

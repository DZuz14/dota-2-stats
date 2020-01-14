export interface Match {
  radiant_team: {
    name: string
    logo_url: string
  }
  dire_team: {
    name: string
    logo_url: string
  }
  players: PlayerStats[]
}

export interface MatchSummary {
  match_id: number
  radiant_win: boolean
  radiant: boolean
  start_time: number
  opposing_team_id: number
  opposing_team_name: string
  opposing_team_logo: string
}

export interface PlayerProfile {
  account_id: number
  name: string
  steamid: string
  avatar: string
  avatarmedium?: string
  avatarfull?: string
  profileurl: string
}

export interface PlayerStats {
  account_id: number
  name: string
  kills: number
  deaths: number
  assists: number
  last_hits: number
  denies: number
  hero_damage: number
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

interface ICharacter {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  image: string
  created: string
}

interface ILocation {
  id: string
  name: string
  type: string
  dimention: string
  created: string
}

interface IEpisode {
  id: string
  name: string
  air_date: string
  episode: string
  created: string
}

export type AllCategoryType = ICharacter | ILocation | IEpisode

interface ServerSearchInfo {
  count: number
  next: string | null
  pages: number
  prev?: any
}

type ServerSearchResult = Array<AllCategoryType>

export interface ServerData {
  info: ServerSearchInfo
  results: ServerSearchResult
}

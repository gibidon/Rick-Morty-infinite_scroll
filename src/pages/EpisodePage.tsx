import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { IEpisode } from './EpisodesPage'
import * as styles from './episode.module.scss'
import { EpisodeTemplate } from '../components/EpisodeTemplate/EpisodeTemplate'

export const EpisodePage = () => {
  const { id } = useParams()
  const { data, error, isLoading } = useFetch<IEpisode[]>(`http://localhost:3001/episodes?id=${id}`)

  const elems = data?.map((episode) => <EpisodeTemplate key={episode.id} data={episode} />)

  return <ul>{elems}</ul>
}

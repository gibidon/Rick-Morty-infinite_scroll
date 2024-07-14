import { Link } from 'react-router-dom'
import { IEpisode } from '../../types'
import * as styles from './episode.module.scss'

interface IEpisodeProps {
  data: IEpisode
}

export const EpisodeTemplate = ({ data }: IEpisodeProps) => {
  const { id, name, air_date, created, episode } = data
  return (
    <>
      <Link to={`/episodes/${id}`}>
        <ul className={styles.episodeTemplate}>
          <li>Episode id: {id}</li>
          <li>Name: {name}</li>
          <li>Air_date: {air_date}</li>
          <li>Created: {created}</li>
          <li>
            Episode: {episode}: {created}
          </li>
        </ul>
      </Link>
    </>
  )
}

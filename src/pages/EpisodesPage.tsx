import { useState, useRef, useCallback } from 'react'
import { useFetch } from '../hooks/useFetch'
import { EpisodeTemplate } from '../components/EpisodeTemplate/EpisodeTemplate'
import { IEpisode } from '../types'
import { ServerData } from '../types'
import { BASE_URL } from '../constants/constants'
import * as styles from './episodesPage.module.scss'

export const EpisodesPage = () => {
  const [page, setPage] = useState(1)
  const { data, isLoading, error } = useFetch<ServerData>(`${BASE_URL}/episode?page=${page}`)

  console.log('ep', data)

  const hasMore = data?.info.next !== null

  const observer = useRef<IntersectionObserver | null>()

  const lastNodeRef = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading) return
      if (observer.current) {
        observer.current.disconnect()
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevState) => prevState + 1)
          console.log('IN SCOPE!')
        }
      })

      if (node) {
        observer.current.observe(node)
      }
    },
    [isLoading, hasMore],
  )

  const episodeElems = data?.results?.map((episode: IEpisode, index) => {
    if (data.results.length - 1 === index + 1) {
      return (
        <span ref={lastNodeRef} key={index}>
          <EpisodeTemplate key={episode.id} data={episode} />
        </span>
      )
    } else {
      return (
        <span key={index}>
          <EpisodeTemplate key={episode.id} data={episode} />
        </span>
      )
    }
  })

  return (
    <div className={styles.layout}>
      {isLoading && <div>Loading..</div>}
      {episodeElems}
      {hasMore && (
        <div>
          <button onClick={() => setPage(page + 1)}>Next page</button>
        </div>
      )}
    </div>
  )
}

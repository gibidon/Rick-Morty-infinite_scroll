import { useState, useRef, useCallback } from 'react'
import { useFetch } from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import { CharacterTemplate } from '../components'
import { BASE_URL } from '../constants/constants'
import { ServerData } from '../types'
import * as styles from './charactersPage.module.scss'

export interface ICharacter {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  image: string
  created: string
}

export const CharactersPage = () => {
  const [page, setPage] = useState(1)
  const { data, error, isLoading } = useFetch<ServerData>(`${BASE_URL}/character?page=${page}`)

  const navigate = useNavigate()
  const hasMore = data?.info.next !== null

  console.log(data)

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
      console.log('##node: ', node)

      if (node) {
        observer.current.observe(node)
      }
    },
    [isLoading, hasMore],
  )

  const dataElems = data?.results?.map((character: ICharacter, index) => {
    if (data.results.length - 1 === index + 1) {
      return (
        <span ref={lastNodeRef} key={index}>
          <CharacterTemplate key={character.id} character={character} />
        </span>
      )
    } else {
      return (
        <span key={index}>
          <CharacterTemplate key={character.id} character={character} />
        </span>
      )
    }
  })

  return (
    <>
      {isLoading && <div>Loader..</div>}
      <div className={styles.container}>{dataElems}</div>
      {error && <div>Error: {error}</div>}

      <div>
        <button onClick={() => navigate(-1)} className={styles.goBackBtn}>
          Go back
        </button>
      </div>
      {hasMore && (
        <div>
          <button onClick={() => setPage(page + 1)}>Next page</button>
        </div>
      )}
    </>
  )
}

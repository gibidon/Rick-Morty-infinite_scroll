import { useState, useRef, useCallback } from 'react'
import { useFetch } from '../hooks/useFetch'
import { LocationTemplate } from '../components/LocationTemplate/LocationTemplate'
import { BASE_URL } from '../constants/constants'
import { ServerData } from '../types'
import * as styles from './locationsPage.module.scss'

export interface ILocation {
  id: string
  name: string
  type: string
  dimention: string
  created: string
}

export const LocationsPage = () => {
  const [page, setPage] = useState(1)
  const { data, error, isLoading } = useFetch<ServerData>(`${BASE_URL}/location?page=${page}`)

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

  // const locationElems = data?.map((location) => (
  //   <LocationTemplate key={location.id} locationData={location} />
  // ))

  const locationElems = data?.results?.map((location: ILocation, index) => {
    if (data.results.length - 1 === index + 1) {
      return (
        <span ref={lastNodeRef} key={index}>
          <LocationTemplate key={location.id} locationData={location} />
        </span>
      )
    } else {
      return (
        <span key={index}>
          <LocationTemplate key={location.id} locationData={location} />
        </span>
      )
    }
  })

  return (
    <>
      {isLoading && <div>Loading.</div>}
      <div className={styles.layout}>{locationElems}</div>
      {error && <div>Error: {error}</div>}
      {hasMore && (
        <div>
          <button onClick={() => setPage(page + 1)}>Next page</button>
        </div>
      )}
    </>
  )
}

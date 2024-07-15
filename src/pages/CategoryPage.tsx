import { useState, useRef, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { BASE_URL } from '../constants/constants'
import { ServerResponse, TCategoryName, AllCategoryType } from '../types'
import { ItemTemplate } from './ItemTemplate'
import * as styles from './category.module.scss'

export const CategoryPage = () => {
  const { category } = useParams<{ category: TCategoryName }>()
  const [page, setPage] = useState(1)
  const { data, isLoading, error } = useFetch<ServerResponse>(
    `${BASE_URL}/${category}?page=${page}`,
  )

  console.log('data: ', data)
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

  const elems = data?.results?.map((item: AllCategoryType, index) => {
    if (data.results.length - 1 === index + 1) {
      return (
        <span ref={lastNodeRef} key={index}>
          <ItemTemplate key={item.id} item={item} category={category} />
        </span>
      )
    } else {
      return (
        <span key={index}>
          <ItemTemplate item={item} category={category} />
        </span>
      )
    }
  })

  return (
    <div>
      {isLoading && <div>Loading..</div>}
      <div className={styles.layout}>{elems}</div>
      {hasMore && (
        <div>
          <button onClick={() => setPage(page + 1)}>Next page</button>
        </div>
      )}
    </div>
  )
}

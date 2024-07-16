import { useState, useRef, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { TCategoryName, AllCategoryType } from '../types'
import { ItemTemplate } from './ItemTemplate'
import { useLoadCategory } from '../hooks/useLoadCategory'
import * as styles from './category.module.scss'

export const CategoryPage = () => {
  const { category } = useParams<{ category: TCategoryName }>()
  const [page, setPage] = useState(1)
  const { items, isLoading, error, hasMore } = useLoadCategory(category, page)

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

  const elems = items?.map((item: AllCategoryType, index) => {
    if (items.length - 1 === index + 1) {
      return (
        <div ref={lastNodeRef} key={index}>
          <ItemTemplate key={item.id} item={item} category={category} />
        </div>
      )
    } else {
      return (
        <div key={index}>
          <ItemTemplate item={item} category={category} />
        </div>
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
      {error && <span>Error: {error}</span>}
    </div>
  )
}

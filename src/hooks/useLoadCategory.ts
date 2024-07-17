import { useState, useEffect } from 'react'
import { BASE_URL } from '../constants/constants'
import { AllCategoryType, TCategoryName } from '../types'

export function useLoadCategory(category: TCategoryName, page: number) {
  const [items, setItems] = useState<AllCategoryType[]>([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(false)

  //if category changes,we need to clean items. Otherwise items will accumulate different category elements
  useEffect(() => {
    setItems([])
  }, [category])

  useEffect(() => {
    setIsLoading(true)

    function fetchItems(category: TCategoryName, page: number) {
      return fetch(`${BASE_URL}/${category}?page=${page}`)
        .then((resp) => {
          if (!resp.ok) {
            throw new Error('Failed to load category')
          }
          return resp.json()
        })
        .then(({ info, results }) => {
          setHasMore(info.next !== null)
          setItems((prevState) => {
            return [...new Set([...prevState, ...results])]
          })
        })
        .catch((e: Error) => setError(e.message))
        .finally(() => setIsLoading(false))
    }

    fetchItems(category, page)
  }, [category, page])

  return { items, isLoading, error, hasMore }
}

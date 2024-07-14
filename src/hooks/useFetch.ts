import { useState, useEffect } from 'react'

export function useFetch<T>(url: string, options = {}) {
  const [data, setData] = useState<T>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    function fetchData(url: string, options = {}) {
      setIsLoading(true)

      return fetch(url, options)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed data fetching')
          }
          return res.json()
        })
        .then(setData)
        .catch((e: Error) => setError(e.message))
        .finally(() => setIsLoading(false))
    }

    fetchData(url, options)
  }, [url])

  return { data, isLoading, error }
}

import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { BASE_URL } from '../constants/constants'
import { AllCategoryType } from '../types'

export const CategoryPage = () => {
  const { category } = useParams()
  const { data, error, isLoading } = useFetch<Array<AllCategoryType[]>>(`${BASE_URL}/${category}`)

  return <div>{}</div>
}

import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { ILocation } from './LocationsPage'
import { LocationTemplate } from '../components/LocationTemplate/LocationTemplate'
import * as styles from './locationPage.module.scss'

export const LocationPage = () => {
  const { id } = useParams()

  const { data, isLoading, error } = useFetch<Array<ILocation>>(
    `http://localhost:3001/locations?id=${id}`,
  )

  const elems = data?.map((location) => (
    <LocationTemplate key={location.id} locationData={location} />
  ))
  return (
    <>
      <h1>Location info:</h1>
      {elems}
    </>
  )
}

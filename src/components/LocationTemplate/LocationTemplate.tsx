import { Link } from 'react-router-dom'
import { ILocation } from '../../types'
import * as styles from './locationTemplate.module.scss'

interface ILocationProps {
  locationData: ILocation
}

export const LocationTemplate = ({ locationData }: ILocationProps) => {
  const { id, name, created, dimention, type } = locationData

  return (
    <Link to={`/locations/${id}`}>
      <ul className={styles.template}>
        <li>Id:{id}</li>
        <li>Name:{name}</li>
        <li>Crated:{created}</li>
        <li>Dimention: {dimention}</li>
        <li>Type: {type}</li>
      </ul>
    </Link>
  )
}

import { ICharacter } from '../../types'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import * as styles from './character.module.scss'

interface CharacterProps {
  character: ICharacter
}

export const CharacterTemplate = ({ character }: CharacterProps) => {
  const { id, name, status, species, type, gender, image } = character
  const navigate = useNavigate()

  return (
    <Link to={`/characters/${id}`}>
      <ul className={styles.character}>
        <li>Id: {id}</li>
        <li>Name:{name}</li>
        <li>Status:{status}</li>
        <li>Species:{species}</li>
        <li>Type:{type}</li>
        <li>Gender:{gender}</li>
        <li>
          <img src={image} alt={'character image'} />
        </li>
      </ul>
    </Link>
  )
}

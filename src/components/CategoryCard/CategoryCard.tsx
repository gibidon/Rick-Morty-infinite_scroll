import { Link } from 'react-router-dom'
import * as styles from './categoryCard.module.scss'

interface ICategoryProps {
  categoryName: string
  imageUrl: string
}

export const CategoryCard = ({ categoryName, imageUrl }: ICategoryProps) => {
  console.log(categoryName, imageUrl)

  return (
    <Link to={`/category/${categoryName}`}>
      <div className={styles.card}>
        <img src={imageUrl} alt={imageUrl} />
        <div className={styles.title}>{categoryName}</div>
      </div>
    </Link>
  )
}

import { Link } from 'react-router-dom'
import { AllCategoryType, TCategoryName } from '../types'
import * as styles from './itemTemplate.module.scss'

interface ItemTemplateProps {
  item: AllCategoryType
  category?: TCategoryName
}

export const ItemTemplate = ({ item, category }: ItemTemplateProps) => {
  console.log('item in item template:', item)

  return (
    <div className={styles.template}>
      <Link to={`/category/${category}/${item.id}`}>
        {'image' in item && <img src={item.image} />}
        {Object.entries(item).map(([key, value]: [string, string]) => (
          <>{key !== 'image' && typeof value === 'string' && <div>{value}</div>}</>
        ))}
      </Link>
    </div>
  )
}

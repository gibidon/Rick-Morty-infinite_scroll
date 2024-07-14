import { Outlet } from 'react-router-dom'
import { CategoryCard } from '../components'
import * as styles from './home.module.scss'
import { Suspense } from 'react'

export const Home = () => {
  return (
    <>
      <h1 className={styles.title}>Select the category:</h1>

      <div className={styles.mainLayout}>
        <CategoryCard
          categoryName="Characters"
          imageUrl="https://steamuserimages-a.akamaihd.net/ugc/1479947365412852641/12C67F1555087DC8C99F035FA1C29BC80F63BD69/?imw=512&amp;&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=false"
        />
        <CategoryCard
          categoryName="Episodes"
          imageUrl="https://yt3.googleusercontent.com/ytc/AOPolaR5u6op2njPpN4-Ol6eREAMUWK7yFnptHzHiJnSMg=s900-c-k-c0x00ffffff-no-rj"
        />
        <CategoryCard
          categoryName="Locations"
          imageUrl="https://i.pinimg.com/736x/43/45/04/434504fdedcbb85c95b8ccdccee7421a.jpg"
        />
      </div>
    </>
  )
}

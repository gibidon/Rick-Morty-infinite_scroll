import { Outlet } from 'react-router-dom'
import * as styles from './categoryLayout.module.scss'

interface CategoryLayoutProps {
  children?: React.ReactNode
}

export const CategoryLayout = ({ children }: CategoryLayoutProps) => {
  return (
    <>
      <div className={styles.categoryLayout}>
        {children} <Outlet />
      </div>
    </>
  )
}

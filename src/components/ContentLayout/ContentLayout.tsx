import { Outlet } from 'react-router-dom'
import * as styles from './contentLayout.module.scss'
import { Suspense } from 'react'

export const ContentLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <Suspense fallback={<h2 style={{ color: 'pink' }}>Content load,,,,,,</h2>}>
        <Outlet />
      </Suspense>
    </div>
  )
}

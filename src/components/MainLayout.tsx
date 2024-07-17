import * as styles from './mainLayout.module.scss'

interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  // return <div className={styles.background}>{children}</div>
  return <div>{children}</div>
}

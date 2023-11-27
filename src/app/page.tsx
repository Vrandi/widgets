'use client'
import styles from './page.module.css'
import Dashboard from './components/Dashboard'
import WidgetsProvider from './WidgetsContext'

export default function Home() {
  return (
    <main className={styles.main}>
      <WidgetsProvider>
        <Dashboard />
      </WidgetsProvider>  
    </main>
  )
}

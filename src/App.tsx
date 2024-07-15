import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthProvider'
import { NavPanel, Footer, AuthStatus } from './components'
import { PrivatePage } from './pages/PrivatePage'
import { ErrorBoundary } from './components/NavPanel/ErrorBoundary/ErrorBoundary'
import { PAGE_NAMES } from './pages/PageNames'
import { LazyPage } from './pages/LazyPage' //!!
import { CategoryLayout } from './layouts/CategoryLayout'

export function App() {
  return (
    <AuthProvider>
      <NavPanel />
      <AuthStatus />

      <ErrorBoundary>
        <Routes>
          <Route path="/" index element={<LazyPage name={PAGE_NAMES.Home} />} />
          <Route path="/login" element={<LazyPage name={PAGE_NAMES.Login} />} />

          <Route
            path="/category"
            element={
              <PrivatePage>
                <CategoryLayout />
              </PrivatePage>
            }
          >
            <Route index element={<></>} />
            <Route path=":category" element={<LazyPage name={PAGE_NAMES.CategoryPage} />} />
            <Route path=":category/:id" element={<LazyPage name={PAGE_NAMES.DetailedPage} />} />
          </Route>
          <Route path="*" element={<LazyPage name={PAGE_NAMES.NotFound} />} />
        </Routes>
      </ErrorBoundary>

      <Footer />
    </AuthProvider>
  )
}

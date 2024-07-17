import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthProvider'
import { NavPanel, Footer, AuthStatus } from './components'
import { PrivatePage } from './pages/PrivatePage'
import { ErrorBoundary } from './components/NavPanel/ErrorBoundary/ErrorBoundary'
import { PAGE_NAMES } from './pages/PageNames'
import { LazyPage } from './pages/LazyPage'
import { CategoryLayout } from './layouts/CategoryLayout'
import { INTERNAL_PATHS } from './internalPaths'

export function App() {
  return (
    <AuthProvider>
      <NavPanel />
      <AuthStatus />

      <ErrorBoundary>
        <Routes>
          <Route path={INTERNAL_PATHS.home} index element={<LazyPage name={PAGE_NAMES.Home} />} />
          <Route path={INTERNAL_PATHS.login} element={<LazyPage name={PAGE_NAMES.Login} />} />

          <Route
            path={INTERNAL_PATHS.category}
            element={
              <PrivatePage>
                <CategoryLayout />
              </PrivatePage>
            }
          >
            <Route
              path={INTERNAL_PATHS.specificCategory}
              element={<LazyPage name={PAGE_NAMES.CategoryPage} />}
            />
            <Route
              path={INTERNAL_PATHS.specificCategoryElement}
              element={<LazyPage name={PAGE_NAMES.DetailedPage} />}
            />
          </Route>
          <Route path={INTERNAL_PATHS.notFound} element={<LazyPage name={PAGE_NAMES.NotFound} />} />
        </Routes>
      </ErrorBoundary>

      <Footer />
    </AuthProvider>
  )
}

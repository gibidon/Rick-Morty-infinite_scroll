import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthProvider'
import { NavPanel, ContentLayout, Footer, AuthStatus } from './components'
import { PrivatePage } from './pages/PrivatePage'
import { ErrorBoundary } from './components/NavPanel/ErrorBoundary/ErrorBoundary'
import { PAGE_NAMES } from './pages/PageNames'
import { LazyPage } from './pages/LazyPage' //!!

export function App() {
  return (
    <AuthProvider>
      <NavPanel />
      <AuthStatus />

      <ErrorBoundary>
        <Routes>
          <Route path="/" index element={<LazyPage name={PAGE_NAMES.Home} />} />
          <Route path="/login" element={<LazyPage name={PAGE_NAMES.Login} />} />
          <Route path="*" element={<LazyPage name={PAGE_NAMES.NotFound} />} />

          <Route
            element={
              <PrivatePage>
                <ContentLayout />
              </PrivatePage>
            }
          >
            <Route path="/characters" element={<LazyPage name={PAGE_NAMES.CharactersPage} />} />
            <Route
              path="/characters/:characterId"
              element={<LazyPage name={PAGE_NAMES.CharacterPage} />}
            />
            <Route path="/episodes" element={<LazyPage name={PAGE_NAMES.EpisodesPage} />} />
            <Route path="/episodes/:id" element={<LazyPage name={PAGE_NAMES.EpisodePage} />} />
            <Route path="/locations" element={<LazyPage name={PAGE_NAMES.LocationsPage} />} />
            <Route path="/locations/:id" element={<LazyPage name={PAGE_NAMES.LocationPage} />} />
          </Route>
        </Routes>
      </ErrorBoundary>

      <Footer />
    </AuthProvider>
  )
}

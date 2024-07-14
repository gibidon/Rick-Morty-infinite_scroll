import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthProvider'
import { NavPanel, ContentLayout, Footer, AuthStatus } from './components'
import { PrivatePage } from './pages/PrivatePage'
import { ErrorBoundary } from './components/NavPanel/ErrorBoundary/ErrorBoundary'
import { PageNames } from './pages/PageNames'
import { LazyPage } from './pages/LazyPage' //!!

export function App() {
  return (
    <AuthProvider>
      <NavPanel />
      <AuthStatus />

      <ErrorBoundary>
        <Routes>
          <Route path="/" index element={<LazyPage name={PageNames.Home} />} />
          <Route path="/login" element={<LazyPage name={PageNames.Login} />} />
          <Route path="*" element={<LazyPage name={PageNames.NotFound} />} />

          <Route
            element={
              <PrivatePage>
                <ContentLayout />
              </PrivatePage>
            }
          >
            <Route path="/characters" element={<LazyPage name={PageNames.CharactersPage} />} />
            <Route
              path="/characters/:characterId"
              element={<LazyPage name={PageNames.CharacterPage} />}
            />
            <Route path="/episodes" element={<LazyPage name={PageNames.EpisodesPage} />} />
            <Route path="/episodes/:id" element={<LazyPage name={PageNames.EpisodePage} />} />
            <Route path="/locations" element={<LazyPage name={PageNames.LocationsPage} />} />
            <Route path="/locations/:id" element={<LazyPage name={PageNames.LocationPage} />} />
          </Route>
        </Routes>
      </ErrorBoundary>

      <Footer />
    </AuthProvider>
  )
}

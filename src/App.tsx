import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthProvider'
import { NavPanel, ContentLayout, Footer, AuthStatus } from './components'
import { PrivatePage } from './pages/PrivatePage'
import { ErrorBoundary } from './components/NavPanel/ErrorBoundary/ErrorBoundary'
import { loadLazyPage } from './pages/LazyPage'
import { Pages } from './pages/pageEnums'

const HomePage = loadLazyPage(Pages.Home)
const LoginPage = loadLazyPage(Pages.Login)
const CharacterPage = loadLazyPage(Pages.CharacterPage)
const CharactersPage = loadLazyPage(Pages.CharactersPage)
const LocationPage = loadLazyPage(Pages.LocationPage)
const LocationsPage = loadLazyPage(Pages.LocationsPage)
const EpisodePage = loadLazyPage(Pages.EpisodePage)
const EpisodesPage = loadLazyPage(Pages.EpisodesPage)
const NotFound = loadLazyPage(Pages.NotFound)

export function App() {
  return (
    <AuthProvider>
      <NavPanel />
      <AuthStatus />

      {/* <ErrorBoundary> */}
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />

        <Route
          element={
            <PrivatePage>
              <ContentLayout />
            </PrivatePage>
          }
        >
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/characters/:characterId" element={<CharacterPage />} />
          <Route path="/episodes" element={<EpisodesPage />} />
          <Route path="/episodes/:id" element={<EpisodePage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/locations/:id" element={<LocationPage />} />
        </Route>
      </Routes>
      {/* </ErrorBoundary> */}

      <Footer />
    </AuthProvider>
  )
}

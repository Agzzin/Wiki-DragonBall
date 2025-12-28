import WikiInitialPage from '../pages/WikiInitialPage'
import CaracterPage from '../pages/CaractersPage'
import CaracterDetailsPage from '../pages/CaracterDetailsPage'
import SagasPage from '../pages/SagasPage'
import TechniquesPage from '../pages/Techniques'
import CompareCharacters from '../pages/CompareCaracterPage'
import FavoritesPage from '../pages/FavoritesPage'

export const ROUTES = {
    HOME: '/',
    CARACTERS: '/caracters',
    CARACTER_DETAIL: '/caracter/details',
    SAGAS: '/sagas',
    TECHNIQUES: '/techniques',
    COMPARE_CHARACTERS: '/compare-caracters',
    FAVORITE: '/favorites',
    SERIES: '/sagas/series'
}

export const routeConfig = [
    {path: ROUTES.HOME, element: <WikiInitialPage/>},
    {path: ROUTES.CARACTERS, element: <CaracterPage/>},
    {path: ROUTES.CARACTER_DETAIL, element: <CaracterDetailsPage/>},
    {path: ROUTES.SAGAS, element: <SagasPage/>},
    {path: ROUTES.TECHNIQUES, element: <TechniquesPage/>},
    {path: ROUTES.COMPARE_CHARACTERS, element: <CompareCharacters/>},
    {path: ROUTES.FAVORITE, element: <FavoritesPage/>},
]
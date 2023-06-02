import Admin from "./pages/Admin";
import {
    ADMIN_ROUTE,
    AUTH_ROUTE,
    BASKET_ROUTE,
    BUILD_ROUTE,
    MAIN_ROUTE,
    PART_ROUTE,
    REGISTRATION_ROUTE
} from "./utils/Consts";
import Auth from "./pages/Auth";
import Basket from "./pages/Basket";
import MainPage from "./pages/MainPage";
import PartPage from "./pages/PartPage";
import BuildPage from "./pages/BuildPage";
export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]
export const publicRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: AUTH_ROUTE,
        Component: Auth
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: MAIN_ROUTE,
        Component: MainPage
    },
    {
        path: PART_ROUTE + '/:groupType/:partId',
        Component: PartPage
    },
    {
        path: BUILD_ROUTE,
        Component: BuildPage
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
]
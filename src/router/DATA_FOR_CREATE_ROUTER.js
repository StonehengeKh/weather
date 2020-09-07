import Auth from '../screens/Auth'
import Weather from "../screens/Weather";

export const DATA_FOR_CREATE_ROUTER = [
    {
        path: '/',
        component: Auth
    },
    {
        path: '/weather',
        component: Weather
    },
]
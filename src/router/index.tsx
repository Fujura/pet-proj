import App from "../App";
import { Login } from "../components/Auth/Login/Login";
import {createBrowserRouter, RouterProvider, RouterProviderProps} from 'react-router-dom';
import { Profile } from "../components/Profile/Profile";
import { Register } from "../components/Auth/Register/Register";
import { Items } from "../components/Items/Items";
import { AddItem } from "../components/Items/AddItem/AddItem";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/signin',
        element: <Login />
    },
    {
        path: '/profile',
        element: <Profile />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/items',
        element: <Items />
    },
    {
        path: '/addItem',
        element: <AddItem />
    }
])

export const ReactRouter = () => {
    return(
        <RouterProvider router={router}>

        </RouterProvider>
    )
}
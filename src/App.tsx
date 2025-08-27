import "./assets/css/main.css"
import {createBrowserRouter} from "react-router-dom";
import {RouterProvider} from "react-router-dom";
import { Layout } from "./components/Layout"
import { Home } from './screens/Home'
import {ErrorPage} from "./screens/ErrorPage.tsx";
import {SignIn} from "./screens/SignIn.tsx";
import {User} from "./screens/User.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "sign-in",
                element: <SignIn/>
            },
            {
                path: "user",
                element: <User/>
            }

        ]
    }
]);

function App() {
    return <RouterProvider router={router}/>;
}

export default App
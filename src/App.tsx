import "./assets/css/main.css"
import {createBrowserRouter} from "react-router-dom";
import {RouterProvider} from "react-router-dom";
import { Layout } from "./components/Layout"
import { Home } from './screens/Home'
import {ErrorPage} from "./screens/ErrorPage.tsx";
import {SignIn} from "./screens/SignIn.tsx";
import {User} from "./screens/User.tsx";

import {Provider, useDispatch} from "react-redux";
// @ts-ignore
import {store} from './store';
import {hasValidToken} from "./utils/Utils.ts";
import {importUser, loginSuccess} from "./store/slices/authSlice.ts";
import {getData} from "./utils/FetchUtils.ts";
import {useEffect} from "react";


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

function AppLogin(){
    const dispatch = useDispatch();
    const checkLogin =  async () => {
        if(hasValidToken())
        {
            try {
                const token = localStorage.getItem("token");
                dispatch(loginSuccess({token: token}));

                // @ts-ignore
                const responseUserData = await getData("user/profile", token);
                // @ts-ignore
                const userData = responseUserData.body;
                dispatch(importUser(userData));

                console.log("Login successfull ");
            }
            catch (error) {
                console.log(error);
            }
        }
    }

    useEffect(() => {
        checkLogin();
    }, []);
}

function App() {
    return (
        <Provider store={store}>
            <AppLogin/>
            <RouterProvider router={router}/>
        </Provider>
    );
}

export default App
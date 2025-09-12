import {useDispatch} from "react-redux";
import {hasValidToken} from "./Utils.ts";
import {importUser, loginSuccess} from "../store/slices";
import {getData} from "./FetchUtils.ts";
import {useEffect} from "react";

export function AppLogin(){
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
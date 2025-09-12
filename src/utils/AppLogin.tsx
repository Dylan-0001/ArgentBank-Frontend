import {useDispatch} from "react-redux";
import {hasValidToken} from "./Utils.ts";
import {fetchUserData, loginSuccess} from "../store/slices";
import {useEffect} from "react";

export function AppLogin(){
    const dispatch = useDispatch();

    const checkLogin =  async () => {
        if(hasValidToken())
        {
            const token = localStorage.getItem("token");
            await dispatch(loginSuccess({token}));
            await dispatch(fetchUserData(token)).unwrap();

            console.log("Login successfull ");
        }
    }

    useEffect(() => {
        checkLogin();
    }, []);
}
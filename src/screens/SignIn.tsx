import {SignForm} from "./sign-in/SignForm.tsx";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect} from "react";

export const SignIn = () => {
    const navigate = useNavigate();

    // @ts-ignore
    const isConnected = useSelector(state => state.user.isConnected);
    // @ts-ignore
    const user = useSelector(state => state.user.userProfile)

    useEffect(() => {
        if (isConnected) {
            navigate("/user")
        }
    }, [isConnected, navigate])

    if (isConnected) {
        return null
    }

    return (
        <main className="main bg-dark">
            <SignForm/>
        </main>
    )
}
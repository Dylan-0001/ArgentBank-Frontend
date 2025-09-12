import {useNavigate} from "react-router-dom";
import {getData, postData} from '../utils/FetchUtils'
import {useDispatch} from "react-redux";
import {loginSuccess, importUser } from '../store/slices/authSlice.ts';

interface LoginData{
    email: string;
    password: string;
}

export const Form = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit =  async (event: React.FormEvent<HTMLFormElement>) =>
    {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const loginData : LoginData = {
            email: formData.get('email') as string,
            password: formData.get('password') as string,
        };

        try {
            const responseData = await postData("user/login", loginData);
            const token = responseData.body.token;
            dispatch(loginSuccess({token: token}));

            const responseUserData = await getData("user/profile", token);
            const userData = responseUserData.body;

            dispatch(importUser(userData));
            navigate("/user");
            console.log("Login successfull ");
        }
        catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="username">
                    email
                </label>
                <input type="text" id="username" name="email" required={true}/>
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">
                    Password
                </label>
                <input type="password" id="password" name="password" required={true}/>
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me"/>
                <label htmlFor="remember-me">
                    Remember me
                </label>
            </div>

            <button  type="submit" className="sign-in-button">Sign In</button>
        </form>
    )
}
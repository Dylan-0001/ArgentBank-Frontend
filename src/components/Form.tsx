import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchPostUserData} from '../store/slices';
import {fetchUserData} from "../store/slices";

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
            const loginRes = await dispatch(fetchPostUserData(loginData)).unwrap();
            const token = loginRes.body.token;

            dispatch(fetchUserData(token));

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
import {useNavigate} from "react-router-dom";

interface LoginData{
    email: string;
    password: string;
}

const apiLink = "http://localhost:3001/api/v1/";

export const Form = () => {
    const navigate = useNavigate();

    const handleSubmit =  async (event: React.FormEvent<HTMLFormElement>) =>
    {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const loginData : LoginData = {
            email: formData.get('email') as string,
            password: formData.get('password') as string,
        };

        try {
            const response = await fetch(apiLink + "user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Impossible de se connecté");
            }

            const responseData = await response.json();
            localStorage.setItem("token", responseData.body.token)
            console.log("Login successfull ");
            navigate("/user");
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
import {useDispatch} from "react-redux";
import {updateUser} from "../store/slices";
import {updateData} from "../utils/FetchUtils.ts";

export const EditForm = ({user, setOnEdit}) => {

    const dispatch = useDispatch();


    const handleUpdateUsername = async (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newUserName = (formData.get("username") as string);

        if(!newUserName || newUserName.trim() === "") {
            setOnEdit(false);
            return;
        }

        const token = localStorage.getItem("token");
        const update = await updateData("user/profile", token, newUserName);

        console.log(update);
        dispatch(updateUser({ userName: newUserName}));

        setOnEdit(false);
    }

    const handleCancelUpdate = () =>{
        setOnEdit(false);
    }

    return (
        <>
            <h1>Edit user info</h1><br/>
            <form className="edit-form" onSubmit={handleUpdateUsername} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div className="input-wrapper" style={{display: "flex",flexDirection: "row",gap: 12, alignItems: "center"}}>
                    <label htmlFor="username">
                        User name
                    </label>
                    <input type="text" placeholder={user?.userName} name="username" />
                </div>

                <div className="input-wrapper" style={{display: "flex",flexDirection: "row",gap: 12, alignItems: "center"}}>
                    <label htmlFor="firstname">
                        First name
                    </label>
                    <input type="text" placeholder={user.firstName} value={user.firstName} name="firstname" disabled={true}/>
                </div>

                <div className="input-wrapper" style={{display: "flex",flexDirection: "row",gap: 12, alignItems: "center"}}>
                    <label htmlFor="lastname">
                        Last name
                    </label>
                    <input type="text" placeholder={user.lastName} value={user.lastName} name="lastname" disabled={true}/>
                </div>

                <div style={{display: "flex", gap: 12}}>
                    <button type="submit" className="sign-in-button" style={{width: "100px"}}>Save</button>
                    <button type="button" className="sign-in-button" style={{width: "100px"}} onClick={() => handleCancelUpdate()}>Cancel</button>
                </div>
            </form>
        </>
    );
}
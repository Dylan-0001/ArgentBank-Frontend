import { AccountItem } from "../components/AccountItem"
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {isEmpty} from "../utils/Utils.ts";
import {EditForm} from "../components/EditForm.tsx";

export const User = () => {
    const navigate = useNavigate();

    // @ts-ignore
    const isConnected = useSelector(state => state.auth.isConnected);
    // @ts-ignore
    const user = useSelector(state => state.auth.userProfile)
    const [isOnEdit, setOnEdit] = useState(false);

    useEffect(() => {
        if (!isConnected) {
            navigate("/sign-in")
        }
    }, [isConnected, navigate])

    if (!isConnected) {
        return null
    }

    const accounts = [
        {
            account_name: "Argent Bank Checking (x8349)",
            account_value: "$2,082.79",
            is_current: true,
        },
        {
            account_name: "Argent Bank Savings (x6712)",
            account_value: "$10,928.42",
            is_current: true,
        },
        {
            account_name: "Argent Bank Credit Card (x8349)",
            account_value:"$184.30",
            is_current: false,
        }
    ];

    const handleEdit = () => {
        setOnEdit(true)
    }

    return (
        <main className="main bg-dark">
            <div className="header">
                {!isOnEdit ? (
                    <>
                        <h1>Welcome back<br />{!isEmpty(user) && user.userName}</h1>
                        <button className="edit-button" onClick={() => handleEdit()}>Edit Name</button>
                    </>
                    ):(

                        <EditForm user={user} setOnEdit={setOnEdit} />

                    )
                }
            </div>
            <h2 className="sr-only">Accounts</h2>

            {accounts.map((account, index) => (
                <AccountItem
                    key={index}
                    accountName={account.account_name}
                    accountValue={account.account_value}
                    isCurrentBalance={account.is_current}
                />
            ))}
        </main>
    )
}
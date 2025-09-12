import { AccountItem } from "../components/AccountItem"
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {isEmpty} from "../utils/Utils.ts";

export const User = () => {
    const navigate = useNavigate();

    // @ts-ignore
    const isConnected = useSelector(state => state.auth.isConnected);
    // @ts-ignore
    const user = useSelector(state => state.auth.userProfile)

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

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{!isEmpty(user) && user.userName}</h1>
                <button className="edit-button">Edit Name</button>
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
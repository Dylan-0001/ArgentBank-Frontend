import { AccountItem } from "../components/AccountItem"

export const User = () => {

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
                <h1>Welcome back<br />Tony Jarvis!</h1>
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
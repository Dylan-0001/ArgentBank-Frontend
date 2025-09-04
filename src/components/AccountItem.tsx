
// @ts-ignore
export const AccountItem = ({accountName, accountValue, isCurrentBalance} : {accountName: string, accountValue: string, isCurrentBalance: boolean}) => {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{accountName}</h3>
                <p className="account-amount">{accountValue}</p>
                <p className="account-amount-description">{isCurrentBalance ? "Available Balance" : "Current Balance"}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
      </section>
    )
}
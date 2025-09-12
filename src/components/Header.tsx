import logo from './../assets/img/argentBankLogo.png'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../store/slices";
import {isEmpty} from "../utils/Utils.ts";


export const Header = () => {
    const dispatch = useDispatch();

    // @ts-ignore
    const isConnected = useSelector(state => state.auth.isConnected);
    // @ts-ignore
    const user = useSelector(state => state.auth.userProfile);

    const handleDisconnected = () => {
        dispatch(logout());
    }

    return (
        <header>
            <nav className="main-nav">
                <Link to="/">
                    <img
                        className="main-nav-logo-image"
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>

                {isConnected  ? (
                    <div>
                        <Link to="/user" className="main-nav-item">
                            <i className="fa fa-user-circle"></i>
                            {!isEmpty(user) && user.firstName}
                        </Link>

                        <Link to="/" className="main-nav-item" onClick={handleDisconnected}>
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                            {}
                        </Link>
                    </div>
                ) : (
                    <div>
                        <Link to="/sign-in">
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </Link>
                    </div>
                )}

            </nav>
        </header>
    );
}
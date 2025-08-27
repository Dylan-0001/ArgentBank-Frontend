import {Link} from "react-router-dom";
import logo from './../assets/img/argentBankLogo.png';

export const ErrorPage = () => {
    return (
        <div style={{ padding: "2rem", textAlign: "center", marginTop: "2rem" }}>
            <img src={logo}/>
            <p style={{ fontSize: "20px" }}>Une erreur est survenue...</p>
            <Link to="/">Retour à l'accueil</Link>
        </div>
    )
}
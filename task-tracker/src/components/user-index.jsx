import { Link } from "react-router-dom";


export function UserIndex(){
    return(
        <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            <div>
                <Link to="/user-login" className="btn btn-primary"> User Login </Link>
                <Link to="/user-register" className="btn btn-warning ms-2"> User Registration </Link>
            </div>
        </div>
    )
}
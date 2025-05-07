import axios from "axios";
import { useFormik } from "formik";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

export function UserLogin(){

    const [cookies, setCookies, removeCookies] = useCookies(['username']);

    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            UserName: '',
            Password:''
        },
        onSubmit : (user)=> {
            axios.get(`http://127.0.0.1:4050/users`)
            .then(response=>{
                var result = response.data.find(item=> item.UserName===user.UserName);
                if(result) {
                    if(user.Password===result.Password) {
                        setCookies('username', user.UserName);
                        navigate('/user-dash');          
                    } else {
                        alert('Invalid Password');
                    }
                } else {
                    alert('Invalid Username');
                }
            })
        }
    })

    return(
        <div className="border border-4 p-2 text-start d-flex justify-content-center">
            <form className="w-100 bg-light p-3 mt-4" onSubmit={formik.handleSubmit}>
                <h3 className="bi bi-person-fill">User Login</h3>
                <dl>
                    <dt>UserName</dt>
                    <dd><input type="text" onChange={formik.handleChange} className="form-control" name="UserName" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" onChange={formik.handleChange} className="form-control" name="Password" /></dd>
                </dl>
                <button type="submit" className="btn btn-warning w-100">Login</button>
                <Link to="/user-register">New User Register</Link>
            </form>
        </div>
    )
}
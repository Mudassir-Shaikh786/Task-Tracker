import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useCallback } from "react";

export function UserRegister(){


    let navigate = useNavigate();

    function ValidateUser(formData){
        var errors = { UserName:'', Password:'', Email:'', Country:''};

        if (formData.UserName.length===0){
            errors.UserName = 'User Name Required';
        }else {
            if(formData.UserName.length<4){
                errors.UserName = 'Name Too Short';
            }
        }

        if(formData.Password.length<3){
            errors.Password = 'Password Too Short'
        }

        if(formData.Email.length===0){
            errors.Email = 'Email Required'
        }

        if(formData.Country.length===0){
            errors.Country = 'Country Name Required'
        }

    }

    const formik = useFormik({
         initialValues: {
            UserName:'',
            Password:'',
            Email:'',
            Country:''
         },
         validate: ValidateUser,
       
         onSubmit : useCallback((user) => {
            axios.post(`http://127.0.0.1:4050/register-user`, user)
            .then(()=>{
                alert("Registered Successfully..");
                navigate("/user-login");
            })
        },[])
    })


    return(
        <div className="text-start d-flex justify-content-center">
            <form className="bg-light p-3 mt-4" onSubmit={formik.handleSubmit}>
                <h3>Register User</h3>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" name="UserName" onChange={formik.handleChange} className="form-control" /></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Password</dt>
                    <dd><input type="password" name="Password" onChange={formik.handleChange} className="form-control" /></dd>
                    <dd className="text-danger">{formik.errors.Password}</dd>
                    <dt>Email</dt>
                    <dd><input type="email" name="Email" onChange={formik.handleChange} className="form-control" /></dd>
                    <dd className="text-danger">{formik.errors.Email}</dd>
                    <dt>Country</dt>
                    <dd><input type="text" name="Country" onChange={formik.handleChange} className="form-control" /></dd>
                    <dd className="text-danger">{formik.errors.Country}</dd>
                </dl>
                <button type="submit" className="btn btn-warning w-100">Register</button>
                <Link to="/" className="mx-4"> Home </Link>
                <Link to="/user-login" >Have account?</Link>
            </form>
        </div>
    )
}
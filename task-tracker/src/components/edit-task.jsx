import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import { useCookies } from "react-cookie";


export function EditTask(){


    const [task, setTask] = useState([{UserId:0, Title:'', Description:'',Status:'', Date:new Date() }]);
    const [cookies, setCookie, removeCookie] = useCookies(['username']);

    let params = useParams();
    let navigate = useNavigate();

    useEffect(()=>{

        axios.get(`http://127.0.0.1:4050/get-task/${params.id}`)
        .then(response=>{
            setTask(response.data);
        })

    },[])

    const formik = useFormik({
        initialValues: {
            UserId: task[0].UserId ,
            Title: task[0].Title,
            Description: task[0].Description ,
            Status:task[0].Status,
            Date: task[0].Date 
        },
        onSubmit:(task)=> {
            axios.put(`http://127.0.0.1:4050/edit-task/${params.id}`, task)
            .then(()=>{
                alert('Appointment Edited Successfully..');
                navigate('/user-dash');
            })
        },
        enableReinitialize: true
    })

    return(
        <div className="text-start d-flex justify-content-center">
            <form className="bg-light p-3 mt-4" onSubmit={formik.handleSubmit}>
                <h3>Edit Appointment</h3>
                <dl>
                    <dt>Title</dt>
                    <dd><input type="text" name="Title" onChange={formik.handleChange} value={formik.values.Title}  className="form-control" /></dd>
                    <dt>Description</dt>
                    <dd>
                        <textarea  name="Description" onChange={formik.handleChange} value={formik.values.Description} className="form-control"></textarea>
                    </dd>
                    <dt>Status</dt>
                    <select name="Status" className="form-select" onChange={formik.handleChange} value={formik.values.Status}>
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                    </select>
                    <dt>Date</dt>
                    <dd><input type="date" name="Date" onChange={formik.handleChange} value={formik.values.Date.toString().slice(0, formik.values.Date.toString().indexOf('T'))}  className="form-control" /></dd>
                </dl>
                <button className="btn btn-success">Save</button>
                <Link to="/user-dash" className="btn btn-danger ms-2">Cancel</Link>
            </form>
        </div>
    )
}
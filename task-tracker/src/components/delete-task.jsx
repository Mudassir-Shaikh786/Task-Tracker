import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


export function DeleteTask()
{
    let params = useParams();
    const [task, setTask] = useState([{UserId:0, Title:'', Description:'',Status:'', Date:new Date() }]);


    let navigate = useNavigate();

    useEffect(()=>{

        axios.get(`http://127.0.0.1:4050/get-task/${params.id}`)
        .then(response=>{
            setTask(response.data);
        })

    },[])

    function handleDeleteClick(){
        axios.delete(`http://127.0.0.1:4050/delete-task/${params.id}`)
        .then(()=>{
            navigate('/user-dash');
        })
    }

    return(
        <div className="bg-light mt-3 w-100 text-start p-2">
            <h3>Delete Task</h3>
            <dl>
                <dt>Title</dt>
                <dd>{task[0].Title}</dd>
                <dt>Description</dt>
                <dd>{task[0].Description}</dd>
            </dl>
            <button onClick={handleDeleteClick} className="btn btn-danger me-2">Yes</button>
            <Link className="btn btn-warning" to="/user-dash"> No </Link>
        </div>
    )
}
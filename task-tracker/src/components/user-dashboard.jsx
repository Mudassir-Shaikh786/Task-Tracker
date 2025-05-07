import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export function UserDashboard() {
  const [tasks, setTasks] = useState([{UserId:0, Title:'', Description:'',Status:'', Date:new Date(),}]);
  const [cookies, setCookie, removeCookie] = useCookies(['username']);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://127.0.0.1:4050/tasks')
      .then((response) => setTasks(response.data))
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []);

  function handleSignout() {
    removeCookie('username');
    navigate('/user-login');
  }

  return (
    <div className="p-2 mt-4 container-fluid">
      <nav className="d-flex justify-content-between p-2">
        <div className="text-primary fs-4 fw-bold">{cookies['username']}</div>
        <span className="fs-4">Task Dashboard</span>
      </nav>
      <section className="text-start mt-4" style={{ height: '100vh' }}>
        <div>
          <Link to="/add-task" className="bi bi-plus-circle w-100 btn btn-primary"> Add Task </Link>
        </div>
        <div>
          <table className="table table-hover border border-3 mt-2">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.length > 0 ? (
                tasks.map((task) => (
                  <tr key={task.UserId}>
                    <td>{task.Title}</td>
                    <td>{task.Description}</td>
                    <td>{task.Status}</td>
                    <td>{new Date(task.Date).toLocaleDateString()}</td>
                    <td>
                      <Link to={`/edit-task/${task.UserId}`} className="btn btn-warning me-2">Edit</Link>
                      <Link to={`/delete-task/${task.UserId}`} className="btn btn-danger"> Delete </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No tasks available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="mt-2">
          <button onClick={handleSignout} className="btn btn-danger ms-2 w-25">Signout</button>
        </div>
      </section>
    </div>
  );
}

import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function AddTask() {

    const navigate = useNavigate();

    const formik = useFormik({
    initialValues: {
      UserId: 0,
      Title: "",
      Description: "",
      Status: "Pending",
      Date: ""
    },

    onSubmit: async (values) => {
      try {
        await axios.post("http://127.0.0.1:4050/add-task", values);
        alert("Task Added Successfully!");
        navigate("/user-dash");
      } catch (error) {
        console.error("Error adding task:", error);
        alert("Failed to add task. Please try again.");
      }
    },
  });

  return (
    <div className=" mt-4 border border-3 p-4 text-start">
      <h3>Add New Task</h3>
      <form onSubmit={formik.handleSubmit} className="w-100">

        <div className="mb-3">
          <label className="form-label">UserId</label>
          <input type="number" name="UserId" className="form-control" required onChange={formik.handleChange} value={formik.values.UserId} />
        </div>

        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" name="Title" className="form-control" required onChange={formik.handleChange} value={formik.values.Title} />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea name="Description" className="form-control" required onChange={formik.handleChange} value={formik.values.Description}></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Status</label>
          <select name="Status" className="form-select" onChange={formik.handleChange} value={formik.values.Status}>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Date</label>
          <input type="date" name="Date" className="form-control" required onChange={formik.handleChange} value={formik.values.Date}/>
        </div>

        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </form>
    </div>
  );
}

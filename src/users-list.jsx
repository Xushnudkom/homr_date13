import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function UsersList() {
    const [data, setData] = useState([])
    const navigate = useNavigate();
    useEffect(()=> {
        axios.get('http://localhost:3000/users')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])

    const handleDelete = (id) => {
        const confirm = window.confirm("You really delete this info?");
        if (confirm) {
            axios.delete("http://localhost:3000/users/"+id)
            .then (res => {
                location.reload();
            }).catch(err => console.log(err));
        }
      }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100" >
        <h1 className="my-5" >Users</h1>
        <div className="w-75 rounded bg-white border shadow p-4 ">
            <div className="d-flex justify-content-end ">
                <Link to={"/create"} className="btn btn-success" >Add Users</Link>
            </div>
            <table className="table table-striped" >
                <thead>
                    <tr>
                        <th>T/R</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, i) => (
                            <tr key={i} >
                                <td>{i+1}</td>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.number}</td>
                                <td>
                                    <Link to={`/read/${item.id}`} className="btn btn-sm btn-info me-2" >Eye</Link>
                                    <Link to={`/update/${item.id}`} className="btn btn-sm btn-primary me-2" >Update</Link>
                                    <button onClick={ e =>  handleDelete(item.id)} className="btn btn-sm btn-danger" >Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default UsersList;

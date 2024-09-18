import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../redux/userReducer";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = (id) => {
        dispatch(deleteUser);
        navigate(0);
    }

    return (
        <div  className="container">
            <h2>Simple Crud App With Redux</h2>
            <Link to="/create" className="btn btn-success ny-3">Create +</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link to={`/edit/${user.id}`}  className='btn btn-sm btn-primary'>Edit</Link>
                                    <Link onClick={()=>handleDelete(user.id)} className='btn btn-sm btn-danger ms-2'>Delete</Link>
                                </td>
                            </tr>
                        ))
                    }
                   
                </tbody>
            </table>
        </div>
    )
}

export default Home;
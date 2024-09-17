import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
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
                    <td>
                        {/* <Link to={`/edit/${users.id}`}  className='btn btn-sm btn-primary'>Edit</Link>
                        <Link onChange={() => handleDelet(user.id)} className='btn btn-sm btn-danger ms-2'>Delete</Link> */}
                    </td>
                </tbody>
            </table>
        </div>
    )
}

export default Home;
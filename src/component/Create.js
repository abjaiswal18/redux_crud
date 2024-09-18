import React from "react";

const Create = () => {
    return (
        <div className='d-flex w-100 vh-50 justify-content-center align-item-center mt-5'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h3>Add New User</h3>
                <form>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' name='name' className='form-control' placeholder='Enter name'/>
                    </div>
                    <div>
                        <label htmlFor='email'>Email:</label>
                        <input type='email' name='email' className='form-control' placeholder='Enter email' />
                    </div>
                    <br/>
                    <button className='btn btn-info'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create;
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function Read() {
    const [data, setData] = useState([])
    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:3000/users/' + id)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light ">
            <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
                <h3 className='d-flex justify-content-center'>Info</h3>
                <div className="mb-2">
                    <strong>ID: {data.id}</strong>
                </div>
                <div className="mb-2">
                    <strong>Name: {data.name}</strong>
                </div>
                <div className="mb-2">
                    <strong>Email: {data.email}</strong>
                </div>
                <div className="mb-3">
                    <strong>Number: {data.number}</strong>
                </div>
                <div className="mb-3">
                    <strong>Address: {data.Address}</strong>
                </div>
                <Link to={`/update/${id}`} className='btn btn-success'>Update</Link>
                <Link to="/" className='btn btn-primary ms-3'>Cancel</Link>
            </div>
        </div>
    )
}

export default Read

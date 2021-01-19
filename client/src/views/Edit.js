import React, { useState, useEffect } from 'react';
import AuthorForm from '../components/AuthorForm';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const Edit = ({ id }) => {
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
            .catch(err => navigate(`/${id}/404`))
    }, [id])

    const updateAuthor = author => {
        axios.put(`http://localhost:8000/api/authors/${id}`, author)
            .then(res => navigate("/"))
            .catch(err => setErrors(err.response.data.errors))
    }

    return (
        <div className="container">
            <Link to="/">Home</Link>
            <h2>Edit this author:</h2>
            {
                loaded &&
                <AuthorForm onSubmitProp={updateAuthor}
                    initName={author.name}
                    initBook1={author.book1}
                    buttonName="Update"
                    buttonClass="btn btn-success"
                    errors={errors} />
            }
        </div>
    )
}

export default Edit;
import React, { useState } from 'react';
import AuthorForm from '../components/AuthorForm';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const New = () => {
    const [errors, setErrors] = useState({});

    const createAuthor = author => {
        axios.post(`http://localhost:8000/api/authors/create`, author)
            .then(res => navigate("/"))
            .catch(err => setErrors(err.response.data.errors))
    }

    return (
        <div className="container">
            <Link to="/">Home</Link>
            <h2>Add a new author:</h2>
            <AuthorForm onSubmitProp={createAuthor}
                initName=""
                initBook1=""
                buttonName="Create"
                buttonClass="btn btn-primary"
                errors={errors} />
        </div>
    )
}

export default New;
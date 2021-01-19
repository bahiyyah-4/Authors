import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthorsList from '../components/AuthorsList';
import { Link } from '@reach/router';

const Main = () => {
    const [authors, setAuthors] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors`)
            .then(res => {
                setAuthors(res.data.sort((a1, a2) =>
                    a1.name > a2.name ? 1 : -1
                ));
                setIsLoaded(true);
            })
            .catch(err => console.log(err))
    }, [isLoaded])

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId));
    }

    return (
        <div className="container">
            <h1>Favorite authors</h1>
            <Link to="/new">Add an author</Link>
            {
                isLoaded && <AuthorsList authors={authors} removeFromDom={removeFromDom} />
            }
        </div>

    )
}

export default Main;
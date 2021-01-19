import React from 'react';
import { navigate } from '@reach/router';
import Axios from 'axios';

const AuthorsList = ({ removeFromDom, authors }) => {
    const deleteAuthor = authorId => {
        Axios.delete(`http://localhost:8000/api/authors/${authorId}`)
            .then(res => removeFromDom(authorId))
            .catch(err => console.log(err))
    }

    return (
        <div >
            <table >
                <thead >
                    <tr>
                        <th >Name</th>
                        <th >Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map((a, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{a.name}</td>
                                    <td>
                                        <button onClick={() => { navigate(`/edit/${a._id}`) }}>Edit</button>
                                        <button onClick={(e) => deleteAuthor(a._id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default AuthorsList;
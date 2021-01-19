import React from 'react';
import { Link } from '@reach/router';

const Unrecognized = () => {
    return (
        <div className="container">
            <h2>404: Page not found</h2>
            <h4>We couldn't find the author your were looking for</h4>
            <h4>Would you like add this author?</h4>
            <Link to="/new">Yes</Link>
            <span>&nbsp;</span>
            <Link to="/">No</Link>
        </div>
    )
}

export default Unrecognized;
import React from 'react';

//this will be routed and diplayed when the search yields no results.

const NotFound = () => (
    <li className='not-found'>
        <h2> No Results Found </h2>
        <p> Oh rats! Your search did not match any results. Try another search, babes.</p>
    </li>
);

export default NotFound;
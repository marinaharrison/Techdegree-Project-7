import React from 'react';

//this will be routed and diplayed when the search yields no results/page doesn't exist

const NotFound = () => (
    <li className='not-found'>
        <h2> Oops! </h2>
        <h1>That page doesn't exist.</h1>
        <p>Move along, nothing to see here...</p>
    </li>
);

export default NotFound;
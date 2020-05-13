import React from 'react';
import {useParams} from 'react-router-dom';

function params_experimentation () {
    let {params} = useParams();
    return (
        <div className="params experimentation">
            <p>Displaying: {params}</p>
        </div>
    )
}

export default params_experimentation;
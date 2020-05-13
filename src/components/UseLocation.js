import React, { useEffect } from 'react';
import {useLocation} from 'react-router-dom';

function UseLocation (){
    let location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname;
        const searchParams = new URLSearchParams(location.search);
    }, [location]);

    console.log(location)
    return (
        <p>UseLocation</p>
    );
};

export default UseLocation;
import React, { useState, useEffect } from 'react';

import { useHistory, useLocation} from 'react-router-dom';

const UseEffect = (props) => {

    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    let history = useHistory();
    const handleClick = () =>{
        history.push("/");
    }

    let location = useLocation();

    console.log(location.pathname)
    return (
        <div className="useeffect">
            <p>use effect hook: {count}</p>
            <button onClick={() => setCount(count + 1)}>Press</button>
            <button onClick={handleClick}>Click</button>
        </div>
    );
}

export default UseEffect;
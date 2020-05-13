import React, {useState,useEffect} from 'react';

const UseEffect = (props) => {

    const [count,setCount] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });
    return (
        <div className="useeffect">
            <p>use effect hook: {count}</p>
            <button onClick={() => setCount(count + 1)}>Press</button>
        </div>
    );
}

export default UseEffect;
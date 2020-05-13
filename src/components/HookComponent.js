import React, { useState } from 'react';

const HookComponent = (props) => {

    const [setCount, updateCount] = useState(0);

    const [setC, updateC] = useState('');

    const [setD, updatedD] = useState();

    const [setE,updatedE] = useState([]);

    // console.log(setC,setD);

    // const [] = useState();
    return (
        <div className="hookedClass">
            <p>array is : {setE}</p>
            <p>Count will be: {setCount}</p>
            <p>setc value: {setC}</p>
            <p>setD value: {setD}</p>
            <button onClick={() => { updateCount(setCount + 1) }}>Press</button>
            <button onClick={() => updateC('cool')}>Hook1</button>
            <button onClick={() => updatedE([{1:'A', 2:'C'}])}>Hook3</button>
            <button onClick={() => { updatedD(2) }}>Hook2</button>
        </div>
    );
}

export default HookComponent;
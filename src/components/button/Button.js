import React from 'react';
import {css} from 'emotion';

//const bgm;

function Button({label}) {
    return <div data-testid="button" className= {css `
        border: 1px solid gray;
        padding: 10px
    `}>Hi: {label}</div>
}

export default Button;
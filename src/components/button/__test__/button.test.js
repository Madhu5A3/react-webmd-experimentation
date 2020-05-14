import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button';
import { render, cleanup } from '@testing-library/react'
// import "jest-dom/extend-expect";
import '@testing-library/jest-dom'

import renderer from 'react-test-renderer';

// cleaning up mess after each render
afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div)
})

it("renders button correctly", () => {
    const {getByTestId} = render(<Button label="CLICK"></Button>)
    expect(getByTestId('button')).toHaveTextContent("CLICK")
})

it("renders button correctly", () => {
    const {getByTestId} = render(<Button label="PRESS"></Button>)
    expect(getByTestId('button')).toHaveTextContent("PRESS")
})

/*
jest-dom has moved to @testing-library/jest-dom. 
Please uninstall jest-dom and install @testing-library/jest-dom instead, 
or use an older version of jest-dom. 
If you do upgrade to @testing-library/jest-dom, 
make sure to update your usage of jest-dom to use @testing-library/jest-dom/extend-expect 
rather than simply jest-dom/extend-expect
*/

it("matches snapshot-1", ()=> {
    const tree = renderer.create(<Button label="CLICK"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
})
it("matches snapshot-2", ()=> {
    const tree = renderer.create(<Button label="CLICK ME"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
})
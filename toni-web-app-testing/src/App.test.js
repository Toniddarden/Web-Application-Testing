import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  // ready to test!
});


const {App} = require('./App');
test('if statement is working', () => {
  expect(App).not.toBeTruthy();
})

const {Display} = require("./Components/Display");
test('component Display did mount', () => {
    expect(Display).not.toBeNull();
})


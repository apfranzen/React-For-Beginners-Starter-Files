import React from 'react';
import { render } from 'react-dom';
import './css/style.css';
import App from './components/App'
// if this is just a string, it will try to look for a NPM package
import StorePicker from './components/StorePicker';

//targer tp the react element, query selector
render(<App/>, document.querySelector('#main'))

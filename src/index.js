import React, { createElement } from 'react';
import ReactDOM from 'react-dom';

// creating a new heading with your name
const title = React.createElement('h1', null, 'Amy Wilson');

// creating a new paragraph element with some text
const paragraph = React.createElement('p', null, 'Aspiring Software Developer');

// creating a header for the h1 and p elements
const header = React.createElement('div', {id: 'header'}, [title, paragraph]);

// create an array of three strings describe attributes about yourself and use the map function
const attributes = ['Calm', 'Hard-working', 'Good Listener'];
const listItems = attributes.map((item) =>
React.createElement('li', null, item));
const newList = React.createElement('ul', null, [listItems]);

const anchor = React.createElement('a', {href: 'https://github.com/AmyM6/109-git.git'}, "Amy's GitHub");
const footer = React.createElement('div', {id: 'footer'}, anchor)

const container = React.createElement('div', null, [header, newList, footer])

ReactDOM.render(
  container, 
  document.getElementById('root')
  );
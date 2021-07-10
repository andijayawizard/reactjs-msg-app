import React from 'react'
import { Component } from 'react';

export default class TodoList extends Component {
  render() {
    return (
      <>
      <h1 className="todo">Todo</h1>
        <ul>
          <li>anton</li>
          <li>budi</li>
          <li>cepot</li>
        </ul>
      </>
    );
  }
}
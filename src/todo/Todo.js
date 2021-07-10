import { Component } from "react";
import TodoList from "../todo-list/TodoList";
import "./Todo.scss";

export default class Todo extends Component {
  render() {
    const todo = [
      { id: 1, nama: "anton", alamat: "depok" },
      { id: 2, nama: "budi", alamat: "bogor" },
      { id: 3, nama: "cepot", alamat: "ciawi" },
    ];
      return (
        <>
          <TodoList />
        </>
      );
    // return todo;
    // <>
    //   <h1 className="todo">Todo</h1>
    //   <TodoList />
    // </>
  }
}
// export default Todo;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import TodoInput from './components/todoInput';
import TodoItem from './components/todoItem';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      todos: [
        {id: 0, text: "Make dinner"},
        {id: 1, text: "Shop for food"},
        {id: 2, text: "Learn react js"}
      ],
      nextId: 3
    }
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

addTodo(todoText){
  console.log("Todo added: ", todoText);
}

removeTodo(id){
  console.log("Removed: ", id);
}

  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
        <Header />
        <TodoInput todoText="" addTodo={this.addTodo}/>
        <ul>
          {
            this.state.todos.map(
              (todo) => {
                return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
              }
            )
          }
        </ul>
        </div>
      </div>
    );
  }
}

export default App;

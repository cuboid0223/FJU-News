import React, { Component } from 'react'
import TodoItem from './TodoItem'

export class Todos extends Component {
    render() {
        return this.props.todos.map((todo) =>(
            <TodoItem 
            todo={todo} 
            key={todo.id}
            markcompleted={this.props.markcompleted}
            delTodo={this.props.delTodo} 
            />
        ));
    }
}

export default Todos

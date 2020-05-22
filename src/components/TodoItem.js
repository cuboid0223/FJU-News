import React, { Component } from 'react'

export class TodoItem extends Component {
    getStyle=()=>{
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    render() {
         const {id, title} =this.props.todo;
         const btnStyle = {
             background: 'red',
             color: 'white',
             border: 'none',
             padding: '5px 9px',
             borderRadius: '50%',
             cursor: 'pointer',
             float: 'right'
         }

        return (
            <div style={this.getStyle()}>
            <input 
                type="checkbox" 
                checked={this.props.completed} 
                onChange={this.props.markcompleted.bind(this,this.props.todo.id)}
                checked={this.props.todo.completed}
            />
            {this.props.todo.title}
            
            <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)} >x</button>
            
            </div>
        )
        
        
    }
    
    
}

export default TodoItem

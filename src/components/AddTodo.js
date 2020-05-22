import React, { Component } from 'react'

export class AddTodo extends Component {
     // 存輸入框輸入的內容
     state = {
         title: ''
     }

     onSubmit = (e) => {
         e.preventDefault(); //取消送出預設請求
         this.props.addTodo(this.state.title);
         this.setState({
             title: ''
         })
     }

     onChange = (e) => this.setState({
         title: e.target.value
     });



    render() {
        
        return (
             <form onSubmit = {this.onSubmit} style = {{display: 'flex'}} >
                <input 
                    type="text"
                    name="title"
                    style={{flex: '10'}}
                    placeholder="Add Todo ..."
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input 
                    type="submit"
                    name="submit"
                    className="btn"
                    style={{flex: '1'}}
                />
            </form>
        )
    }
}

export default AddTodo

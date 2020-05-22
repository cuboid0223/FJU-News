import React, { Component } from 'react'
export class New extends Component {
    // 存輸入框輸入的內容
    state = {
        title: "",
        body: ""
    }

    onChangeTitle = (e) => this.setState({
        title: e.target.value
    });
    onChangeBody = (e) => this.setState({
        body: e.target.value
    });

    onSubmit = (e) => {
        e.preventDefault(); //取消送出預設請求
        this.props.addPost(this.state.title, this.state.body); //改
        this.setState({
            title: "",
            body:""
        })
    }
    render() {
        return (
            <div className="new">
                <form onSubmit = {this.onSubmit} >
                    <p>Title</p>
                    <input 
                        className="title-box" 
                        type="text" 
                        name="title"
                        value={this.state.title}
                        onChange={this.onChangeTitle}/> 
                    <p>Content</p>
                    <textarea 
                        className="content-box" 
                        type="text" 
                        name="content" 
                        value={this.state.body}
                        onChange={this.onChangeBody}
                    />
                    <input 
                        className="submit-btn" 
                        type="submit" 
                        name="submit" 
                    />
                </form>
            </div>
        )
    }
}

export default New

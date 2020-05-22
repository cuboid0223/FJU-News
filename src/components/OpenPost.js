import React, { Component } from 'react'
import Header from './layout/Header'
import axios from 'axios';
export class OpenPost extends Component {
    state={
        title:"",
        body:""
    }

    componentDidMount() {
    const {params:{postId}}= this.props.match
    axios.get(`http://localhost:4000/posts/${postId}`)
      .then(res => this.setState({
        title: res.data.title,
        subtitle: res.data.body.split('\n')[0],
        body: res.data.body
      }))
    }
    render(){
        return (
            <React.Fragment>
             <Header title={this.state.title}  subtitle={this.state.subtitle}/>
                {console.log(this.state.title)}
                <div className="openpost">
                    <h2>{this.state.title}</h2>
                    <pre>
                        {this.state.body}
                    </pre>
                </div>
            </React.Fragment>
        )
    }
}

export default OpenPost;
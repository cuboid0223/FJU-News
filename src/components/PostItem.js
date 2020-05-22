import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export class PostItem extends Component {

    render() {
         const {id, title,body} =this.props.post;
        return (
            <div className="postitem">
                <div className="container">
                    <Link className="link" to={`/post/${id}`}><h2>{title}</h2></Link>
                     {console.log(body.split('\n').slice(0,2))} 
                    <p>{body.split('\n').slice(0,2)[0]}</p>
                      <p>{body.split('\n').slice(0,2)[1]}</p>
                    <button className="btn" onClick={this.props.delPost.bind(this, id)}>Delete</button>
                </div>
            </div>
        )
    }
}

export default PostItem;

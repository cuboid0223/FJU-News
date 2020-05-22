import React, { Component } from 'react'
import PostItem from './PostItem'
export class Post extends Component {
    render() {
         
        return this.props.posts.map((post) => (
            <React.Fragment>
            <PostItem  
            post={post} 
            key={post.id}
            delPost={this.props.delPost}  />
            </React.Fragment>
            // <div className="post">
            //     <div className="container">
            //         <h2>Title</h2>
            //         <pre>
            //         ppppppppp 
            //         pppppp
            //         </pre>
            //         <button className="btn">Delete</button>
            //     </div>
              
            //     <div className="container">
            //         <h2>Title</h2>
            //         <pre>
            //         ppppppppp 
            //         pppppp
            //         </pre>
            //         <button className="btn">Delete</button> 
            //     </div>
            // </div>
        ));
    }
}

export default Post

import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Header from './components/layout/Header';
import Post from './components/Post'
import New from './components/New'
import About from './components/pages/About'
import OpenPost from './components/OpenPost';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';


class App extends Component{
   state1 = {
     header: "FJU Times",
     subtitle: "Your best online news paper"
   }
  //  state={
  //    posts:[
  //      {
  //         id:"1",
  //         title: "1",
  //         body: "111",
  //         completed: false
  //      },
  //      {  
  //         id:"2",
  //         title: "2",
  //         body: "222",
  //         completed: false
  //      },
  //      {  
  //         id:"3",
  //         title: "3",
  //         body: "333",
  //         completed: false
  //      }
  //    ]
     
  //  }  
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get('http://localhost:4000/posts?sort=id&_order=desc&_limit=5')
      .then(res => this.setState({
        posts: res.data
      }))
  }

  delPost = (id) => {
    axios.delete(`http://localhost:4000/posts/${id}`)
      .then(res => {
        let newState = {
          posts: this.state.posts.filter((post) => {
            return post.id !== id
          })
        }

        this.setState(newState)
      })
  }

 addPost = (title,body) => {
    axios.post('http://localhost:4000/posts', {
      title,
      body,
      completed: false
    }).then(res => {
      this.setState({ posts: [...this.state.posts, res.data] }); //前後同步更新資料
    })
  }

  openPost=(id)=>{
    axios.post('http://localhost:4000/posts', {
      id
    }).then(res => {
      console.log(id)
      this.setState({ posts: [...this.state.posts, res.data] }); //前後同步更新資料
    })
  }
  render(){
  return(
    
   
   
    <Router>
      <div>
       <Navbar />
       <Route exact path="/" render={props => (
          <React.Fragment>
            <Header title={this.state1.header} subtitle={this.state1.subtitle} />
            <Post posts={this.state.posts}  delPost={this.delPost} />
          </React.Fragment>
       )}/>
       
        <Route path="/new" component={() => <New addPost={this.addPost} />} />
        <Route path="/about" component={About}/>
        <Route path="/post/:postId" render = {this.openPost} component={OpenPost}/>
      </div>
    </Router>
   
   
    
  )
  }
}

export default App;

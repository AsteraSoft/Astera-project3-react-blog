import React, { Component } from 'react';
import axios from "axios";


class Todo{
constructor(text){
this.text=text;
}
}
class Comments extends Component {
  state = {
    newToText: '',
    totabs: [],
    newComment: {
      
    }
  }
  addToTable = () => {
    this.setState({
      totabs: [...this.state.totabs, new Todo(this.state.newTodoText)],
      newComment: ''
    })
  }



  render() {
    return (
      <div className="container">
       <div className="row">
      
       <div className="cols-md-8">
           <input type="text" value={this.state.newComment.body}
            onChange={e => this.setState({newComment: {...this.state.newComment, body: e.target.value}})}
            className=" mt-2 form-control"  required placeholder="Body" />
      </div>
      </div>
     
     <div className="row">
     <div className="cols-md-8">
      <input type="number"
      value={this.state.newComment.postId}
      onChange={e=> this.setState({newComment:{...this.state.newComment, postId:e.target.value}})}
      className=" mt-2 form-control" required placeholder="Post Id"  />
      </div>
      </div>

       <div className="row">
     <div className="cols-md-8">
      <input type="number" 
      value={this.state.newComment.userId}
      onChange={e=> this.setState({newComment:{...this.state.newComment, userId:e.target.value}})}
      className=" mt-2 form-control" required placeholder="User Id"  />
      </div>
      </div>
     
      <div className="row">
      <div className="col-md-8 mt-2 mb-2">
      <button  class="btn btn-outline-success"
      onClick={this.addTodo}
      >Add</button>
      </div>
      </div>
     
     <div className="col-md-12">
                 <div className="table-responsive">
                   <table className="table">
                     <thead>
                       <tr>
                         <th>#</th>
                         <th>Body</th>
                         <th>Post ID</th>
                         <th>User ID</th>
                         <th>Actions</th>
                       </tr>
                     </thead>
                     <tbody>
                      
                     </tbody>
                   </table>
                 </div>
      </div>
      </div>
     
    );
  }
}

export default Comments;

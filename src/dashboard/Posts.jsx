import React, { Component } from 'react';
import axios from "axios";
class Posts extends Component {
  state={
newPost:{

}
  }
  render() {
    return (
     
      <div className="container">
      <div className="row">
      <div className="cols-md-8">
           <input type="number"
           value={this.state.newPost.userId}
           onChange={e=> this.setState({newPost:{...this.state.newPost, userId:e.target.value}})}
           className=" mt-2 form-control"  required placeholder="User Id" />
      </div>
      </div>
     
     <div className="row">
     <div className="cols-md-8">
      <input type="text" 
      value={this.state.newPost.title}
      onChange={e=> this.setState({newPost:{...this.state.newPost, title:e.target.value}})}
      className=" mt-2 form-control" required placeholder="Title"  />
      </div>
      </div>

       <div className="row">
     <div className="cols-md-8">
      <input type="text" 
      value={this.state.newPost.body}
      onChange={e=>this.setState({newPost:{...this.state.newPost,body:e.target.value}})}

      className=" mt-2 form-control" required placeholder="Body"  />
      </div>
      </div>
      <div className="row">
     <div className="cols-md-8">
      <input type="number"
      value={this.state.newPost.categoryId}
      onChange={e=>this.setState({newPost:{...this.state.newPost, categoryId:e.target.value}})}
      className=" mt-2 form-control" required placeholder="Category Id"  />
      </div>
      </div>
      <div className="row">
      <div className="col-md-8 mt-2 mb-2">
      <button  class="btn btn-outline-success">Add</button>
      </div>
      </div>
     
     <div className="col-md-12">
                 <div className="table-responsive">
                   <table className="table">
                     <thead>
                       <tr>
                         <th>#</th>
                         <th>User Id</th>
                         <th>Title</th>
                         <th>Body</th>
                         <th>Category Id</th>
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

export default Posts;


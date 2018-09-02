import React, { Component } from 'react';
import axios from "axios";
class Categories extends Component {
state={
  newCategorise:{

  }
}


  render() {
    return (
      <div className="container">
      <div className="row">
      <div className="cols-md-8">
           <input type="text" 
            value={this.state.name}
            onChange={e => this.setState({...this.state.newCategorise, name:e.target.value})}
           className=" mt-2 form-control"  required placeholder="Name of Category" />
      </div>
      <div className="row">
      <div className="col-md-12 ml-2 mb-2 mt-2">
      <button  className="btn btn-outline-success btn-block">Add</button>
      </div>
      </div>


<div className="col-md-12">
                 <div className="table-responsive">
                   <table className="table">
                     <thead>
                       <tr>
                         <th>#</th>
                         <th>Categories</th>
                         <th>Actions</th>
                       </tr>
                     </thead>
                     <tbody>
                      
                     </tbody>
                   </table>
                 </div>
      </div>
      </div>
      </div>
      
    );
  }
}

export default Categories;

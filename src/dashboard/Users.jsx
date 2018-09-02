import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {

  state = {
    users: []
  }

  componentDidMount() {
    // Ofc, you should use the local not this link
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        this.setState({
          users: res.data
        })

        // Now the state will be updated with the data received from response
      })
  }
  render() {
    return (
      <div className="container">
 <div className="row">
 <div className="cols-md-8">
      <input type="text"className=" mt-2 form-control"  required placeholder="Username" />
 </div>
 </div>

<div className="row">
<div className="cols-md-8">
 <input type="email" className=" mt-2 form-control" required placeholder="Email"  />
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
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {this.state.todos.map((todo, i) => (
                    <tr key={i}>
                      <td>{i}</td>
                      <td>{todo.text}</td>
                      <td>{todo.done ? 'Yes' : 'No'}</td>
                      <td>
                        <button onClick={() => this.toggleTodo(todo)}
                         className="btn btn-info">
                          Toggle
                        </button>
                        <button onClick={() => this.removeTodo(todo)}
                         className="btn btn-danger">
                          Remove
                        </button>
                        
                      </td>
                    </tr>
                  ))} */}
                </tbody>
              </table>
            </div>
          </div>

</div>
   

    
     
    );
    
  }
}

export default Users;

import React, { Component } from 'react'

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      task: 'default task',
      completed: false,
      // id: 

    }
  }


  // props.task

  render() {
    return (
      <div>
        {this.state.task}
      </div>
    )
  }

}


export default Todo;
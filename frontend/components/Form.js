import React from 'react'

class Form extends React.Component{
  constructor() {
  super();
  this.state = {
    input: ''
  }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAdd(this.state.input);
    this.setState({...this.state, input: '' })
    }
    
  handleChange= (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      input: e.target.value
    });
  }  

  render() {
    return ( <form onClick={this.handleSubmit}>
      <input type='text' name='todo' value={this.state.todo} onChange={this.handleChange} />
      <button >Add</button>
    </form>)
  }
}

export default Form

import React, { Component } from 'react';
import Button from '../../App/styles/Button';
import Card from '../../App/styles/Card';

class FriendForm extends Component {
  state = {
    name : '',
    age  : 0,
    email: ''
  };

  onHandleChange = e => {
    this.setState( {[e.target.name]: e.target.value} );
  };

  onHandleSubmit = e => {
    e.preventDefault();
    this.props.newFriend(this.state);
    this.setState({
      name: '',
      age: 0,
      email: ''
    })
  };

  render() {
    return (
      <Card displayForm>
        <form onSubmit={this.onHandleSubmit}>
          <h2>Add / Modify a Friends Details</h2>
          <label>{`Friend's Name`}</label>
          <input type='text' placeholder={`Friend's Name`}
                 value={this.state.name}
                 onChange={this.onHandleChange} name='name' />
          <label>{`Friend's Age`}</label>
          <input type='number' value={this.state.age}
                 onChange={this.onHandleChange} name='age' />
          <label>{`Friend's Email`}</label>
          <input type='email' placeholder={`Friend's Email`}
                 value={this.state.email}
                 onChange={this.onHandleChange} name='email' />

          <Button clickMe>Submit</Button>
        </form>
      </Card>
    );
  }
}

export default FriendForm;
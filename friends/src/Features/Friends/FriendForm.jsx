import React, { Component } from 'react';
import Button from '../../App/styles/Button';
import Card from '../../App/styles/Card';
import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid #fbf7f5;
  height: 30px;
  border-radius: 10px;
  padding: 10px 0;
`;

class FriendForm extends Component {
  state = {
    name : '',
    age  : 0,
    email: ''
  };

  componentDidMount() {
    if (this.props.match.params.id) {
      const updatedState = this.props.friends.friends.filter( friend => {
        console.log( friend );
        return friend.id.toString() === this.props.match.params.id;
      } )[0];
      this.setState( updatedState );
    } else {
      this.setState( {
        name : '',
        age  : 0,
        email: ''
      } );
    }
  }

  onHandleChange = e => {
    this.setState( {[e.target.name]: e.target.value} );
  };

  onHandleSubmit = e => {
    e.preventDefault();
    if (this.state.id) {
      this.props.updateFriend( this.state.id, this.state );
    } else {
      this.props.newFriend( this.state );
    }
    this.setState( {
      name : '',
      age  : 0,
      email: ''
    } );
  };

  render() {
    return (
      <Card displayForm>
        <form onSubmit={this.onHandleSubmit}>
          <h2>Add / Modify a Friends Details</h2>
          <label>{`Friend's Name`}</label>
          <Input type='text' placeholder={`Friend's Name`}
                 value={this.state.name}
                 onChange={this.onHandleChange} name='name' />
          <label>{`Friend's Age`}</label>
          <Input type='number' value={this.state.age}
                 onChange={this.onHandleChange} name='age' />
          <label>{`Friend's Email`}</label>
          <Input type='email' placeholder={`Friend's Email`}
                 value={this.state.email}
                 onChange={this.onHandleChange} name='email' />

          <Button clickMe>{this.state.id ? 'Update' : 'Submit'}</Button>
        </form>
      </Card>
    );
  }
}

export default FriendForm;
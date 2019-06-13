import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '../../App/styles/Button';
import Card from '../../App/styles/Card';

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
    const {match, friends} = this.props;
    if (match.params.id) {
      const updatedState = friends.filter( friend => {
        return friend.id.toString() === match.params.id;
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
    const {name, value} = e.target;
    this.setState( {[name]: value} );
  };

  onHandleSubmit = e => {
    const {updateFriend, newFriend} = this.props;
    const {id}                      = this.state;
    e.preventDefault();
    id ? updateFriend( id, this.state ) : newFriend( this.state );
    this.setState( {
      id   : '',
      name : '',
      age  : 0,
      email: ''
    } );
  };

  render() {
    const {name, age, email, id} = this.state;
    return (
      <Card displayForm>
        <form onSubmit={this.onHandleSubmit}>
          <h2>Add / Modify a Friends Details</h2>
          <label>{`Friend's Name`}</label>
          <Input type='text' placeholder={`Friend's Name`}
                 value={name}
                 onChange={this.onHandleChange} name='name' />
          <label>{`Friend's Age`}</label>
          <Input type='number' value={age}
                 onChange={this.onHandleChange} name='age' />
          <label>{`Friend's Email`}</label>
          <Input type='email' placeholder={`Friend's Email`}
                 value={email}
                 onChange={this.onHandleChange} name='email' />

          <Button clickMe>{id ? 'Update' : 'Submit'}</Button>
        </form>
      </Card>
    );
  }
}

FriendForm.propTypes = {
  props: PropTypes.shape( {
    friends: PropTypes.shape( {
      id   : PropTypes.number,
      name : PropTypes.string,
      age  : PropTypes.number,
      email: PropTypes.string
    } )
  } )
};
export default FriendForm;
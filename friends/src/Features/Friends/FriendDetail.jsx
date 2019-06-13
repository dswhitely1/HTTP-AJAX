import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from '../../App/styles/Card';
import Friend from './Friend';
import Container from '../../App/styles/Container';

class FriendDetail extends Component {
  state = {
    friend: []
  };

  componentDidMount() {
    try {
      const {friends, catFacts: {all}, match: {params: {id}}} = this.props;
      const randomFactIndex                                   = Math.ceil( Math.random() * all.length );
      this.setState( {
        friend : friends.filter( friend => friend.id.toString() === id ),
        catFact: all[randomFactIndex]
      } );
    } catch (error) {
      this.props.history.push( '/' );
    }
  }

  render() {
    const {deleteFriend} = this.props;
    const {friend}       = this.state;
    return (
      <Card displayForm>
        <Container FriendDetail>
          {friend.map( friend => <Friend friend={friend}
                                         deleteFriend={deleteFriend}
                                         key={friend.id} /> )}
          <Card catFact>
            <h1>Random Cat Fact</h1>
            <p>{this.state.catFact && this.state.catFact.text}</p>
          </Card>
        </Container>
      </Card>
    );
  }
}

FriendDetail.propTypes = {
  props: PropTypes.shape( {
    friends : PropTypes.object,
    catFacts: PropTypes.arrayOf( PropTypes.object )
  } )
};

export default FriendDetail;

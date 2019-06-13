import React from 'react';
import PropTypes from 'prop-types';
import Friend from './Friend';
import Container from '../../App/styles/Container';

const Friends = ( {friends, deleteFriend} ) => {
  return (
    <Container Card>
      {friends.map( friend => <Friend friend={friend} key={friend.id}
                                      deleteFriend={deleteFriend} /> )}
    </Container>
  );
};

Friends.propTypes = {
  props: PropTypes.shape( {
    friends: PropTypes.shape( {
      id   : PropTypes.number,
      name : PropTypes.string,
      age  : PropTypes.number,
      email: PropTypes.string
    } )
  } )
};

export default Friends;

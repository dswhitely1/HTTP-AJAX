import React from 'react';
import PropTypes from 'prop-types';
import Friend from './Friend';
import Container from '../../App/styles/Container';
import FriendForm from './FriendForm';

const Friends = ( {friends, newFriend, updateFriend, deleteFriend} ) => {
  return (
    <Container Card>
      {friends.map( friend => <Friend friend={friend} key={friend.id}
                                      deleteFriend={deleteFriend} /> )}
      <FriendForm newFriend={newFriend} updateFriend={updateFriend} />
    </Container>
  );
};

Friends.propTypes = {
  props: PropTypes.shape( {
    friends: PropTypes.shape( {
      name : PropTypes.string,
      age  : PropTypes.number,
      email: PropTypes.string
    } )
  } )
};

export default Friends;

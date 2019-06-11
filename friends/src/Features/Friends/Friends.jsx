import React from 'react';
import PropTypes from 'prop-types';
import Friend from './Friend';

const Friends = ( {friends} ) => {
  return (
    <div>
      {friends.map( friend => <Friend friend={friend} key={friend.id} /> )}
    </div>
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

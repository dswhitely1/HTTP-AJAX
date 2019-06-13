import React from 'react';
import PropTypes from 'prop-types';
import Friends from './Friends';

const FriendContainer = props => {
  const {friends} = props;
  return (
    <>
      {friends && <Friends {...props} />}
    </>
  );
};

FriendContainer.propTypes = {
  props: PropTypes.shape( {
    friends: PropTypes.object
  } )
};

export default FriendContainer;

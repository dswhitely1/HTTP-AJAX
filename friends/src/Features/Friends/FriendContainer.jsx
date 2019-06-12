import React from 'react';
import Friends from './Friends';

const FriendContainer = props => {
  const {friends} = props;
  return (
    <>
      {friends && <Friends {...props} />}
    </>
  );
};

export default FriendContainer;

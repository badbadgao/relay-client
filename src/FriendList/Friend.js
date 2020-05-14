import React from 'react';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

const Friend = props => {
  return (
    <div>
      {props.current.name}
    </div>
  ) 
};

const FriendFragment =  createFragmentContainer(Friend, {
  current: graphql`
    fragment Friend_current on User {
      id
      name
      desc1
    }
  `,
});

export default FriendFragment;
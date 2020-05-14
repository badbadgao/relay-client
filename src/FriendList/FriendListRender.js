import React from 'react';
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../environment';
import FriendList from './FriendList';

const FriendListRender = props => {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query FriendListRenderQuery {
          friends {
            id
            name
            desc1
          }
        }
        `}
      render={({error, props}) => {
        if (error) {
          return <div>{error.message}</div>;
        } else if (props) {
          return (
            <FriendList {...props}/>
          )
        }
        return <div>Loading...</div>;
      }}
    />
  )
};

export default FriendListRender;
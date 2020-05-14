import React from 'react';
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../environment';
import Friend from './Friend';

const FriendRender = props => {
  console.log(props)
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query FriendRenderQuery($id: ID!) {
          current(id: $id) {
            ...Friend_current
          }
        }
      `}
      variables={{
        id: props.id,
      }}
      render={({error, props}) => {
        if (error) {
          return <div>{error.message}</div>;
        } else if (props) {
          return (
            <Friend {...props}/>
          )
        }
        return <div>Loading...</div>;
      }}
    />
  )
};

export default FriendRender;
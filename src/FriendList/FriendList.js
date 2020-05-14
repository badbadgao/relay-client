import React from 'react';
import FriendRender from './FriendRender';

const FriendList = (props) => {
  console.log(props);
  const list = props.friends.map(friend => (
    <div key={friend.name}>
      <FriendRender id={friend.id}/>
    </div>
  ))
  return (
    <div>
      list of friend

      {list}
    </div>
  )
};

export default FriendList;
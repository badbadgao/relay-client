import React from 'react';
import './App.css';

import FriendRender from './FriendList/FriendRender';
import FriendListRender from './FriendList/FriendListRender';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  hello: {
    margin: '8px',
  },
  friendList: {
    margin: '8px',
    backgroundColor: '#dd66ff',
  }
})

const App = () => {
  return (
    <div className="App">
      <div className={css(styles.friendList)}>
        {/* <FriendRender /> */}
        <FriendListRender />
      </div>
    </div>
  );
}

export default App;

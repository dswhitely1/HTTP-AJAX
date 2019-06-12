import React, { Component } from 'react';

import API from '../common/api/api';
import Container from '../styles/Container';
import Friends from '../../Features/Friends/Friends';
import GlobalStyle from '../styles/Global';
import Navbar from '../../Features/Navbar/Navbar';

class App extends Component {
  state = {};

  componentDidMount() {
    API.get( '/friends' ).then( res => {
      this.setState( {friends: res.data} );
    } ).catch( err => console.log( err ) );
  }

  handleNewFriend = newFriend => {
    API.post( '/friends', newFriend ).then( res => this.setState( {friends: res.data} ) ).catch( err => console.log( err ) );
  };

  handleUpdateFriend = (id,updateFriend) => {
    API.put( `/friends/${id}`, updateFriend ).then( res => this.setState( {friends: res.data} ) ).catch( err => console.log( err ) );
  };

  handleDeleteFriend = id => {
    API.delete( `/friends/${id}` ).then( res => this.setState( {friends: res.data} ) ).catch( err => console.log( err ) );
  };

  render() {
    return (
      <>
        <Navbar />
        <Container>
          <GlobalStyle />
          {this.state.friends && <Friends friends={this.state.friends}
                                          newFriend={this.handleNewFriend}
                                          updateFriend={this.handleUpdateFriend}
                                          deleteFriend={this.handleDeleteFriend} />}
        </Container>
      </>
    );
  }
}

export default App;
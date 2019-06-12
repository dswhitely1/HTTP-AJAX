import React, { Component } from 'react';
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import API from '../common/api/api';
import Container from '../styles/Container';
import GlobalStyle from '../styles/Global';
import Navbar from '../../Features/Navbar/Navbar';
import FriendContainer from '../../Features/Friends/FriendContainer';
import FriendForm from '../../Features/Friends/FriendForm';

class App extends Component {
  state = {};

  componentDidMount() {
    API.get( '/friends' )
       .then( res => {
         this.setState( {friends: res.data} );
       } )
       .catch( err => console.log( err ) );

  }

  handleNewFriend = newFriend => {
    API.post( '/friends', newFriend )
       .then( res => this.setState( {friends: res.data} ) )
       .catch( err => console.log( err ) );
    this.props.history.push( '/' );

  };

  handleUpdateFriend = ( id, updateFriend ) => {
    API.put( `/friends/${id}`, updateFriend )
       .then( res => this.setState( {friends: res.data} ) )
       .catch( err => console.log( err ) );
    this.props.history.push( '/' );
  };

  handleDeleteFriend = id => {
    API.delete( `/friends/${id}` )
       .then( res => this.setState( {friends: res.data} ) )
       .catch( err => console.log( err ) );
  };

  render() {
    return (
      <>
        <Navbar />
        <Container>
          <GlobalStyle />
          <Switch>
            <Route exact path="/"
                   render={() => <FriendContainer friends={this.state.friends}
                                                  newFriend={this.handleNewFriend}
                                                  updateFriend={this.handleUpdateFriend}
                                                  deleteFriend={this.handleDeleteFriend} />} />
            <Route path="/addfriend" render={props => <FriendForm {...props}
                                                                  updateFriend={this.handleUpdateFriend}
                                                                  newFriend={this.handleNewFriend} />} />
            <Route path="/editfriend/:id"
                   render={props => <FriendForm {...props}
                                                newFriend={this.handleNewFriend}
                                                updateFriend={this.handleUpdateFriend}
                                                friends={this.state} />} />
          </Switch>
        </Container>
      </>
    );
  }
}

export default withRouter( App );
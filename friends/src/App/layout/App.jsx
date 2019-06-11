import React, { Component } from 'react';

import API from '../common/api';
import Container from '../styles/Container';
import Friends from '../../Features/Friends/Friends';

class App extends Component {
  state = {};

  componentDidMount() {
    let response = API.get( '/friends' ).then( res => {
      response = res.data;
      this.setState( {friends: response} );
    } ).catch( err => console.log( err ) );

  }

  render() {
    return (
      <Container>
        {this.state.friends && <Friends friends={this.state.friends} />}
      </Container>
    );
  }
}

export default App;
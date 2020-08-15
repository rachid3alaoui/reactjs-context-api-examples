import React, { Component } from 'react';
import { AuthContext } from '../contexts/AuthContext';

class AuthToggle extends Component {
  static contextType = AuthContext;
  render() {
    const { toggleAuth } = this.context;
    return <button onClick={toggleAuth}>Toggle Auth</button>;
  }
}

export default AuthToggle;

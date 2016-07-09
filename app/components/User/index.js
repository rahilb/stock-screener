import React from 'react';

var User = React.createClass({
  getInitialState: function() {
    return this.props.userData;
  },
  selectUser: function() {
    this.props.glEventHub.emit( 'user-select', this.state );
  },
  render: function() {
    return (
      <li onClick={this.selectUser}>{this.state.name}</li>
    )
  }
});

export default User;
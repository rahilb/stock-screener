import React from 'react';

import styles from './styles.css';
import User from '../User/index.js';

var UserDetail = React.createClass({
  componentWillMount: function() {
    this.props.glEventHub.on( 'user-select', this.setUser );
  },
  componentWillUnmount: function() {
    this.props.glEventHub.off( 'user-select', this.setUser );
  },
  setUser: function( userData ) {
    this.setState( userData );
  },
  render: function() {
    if( this.state ) {
      var imgUrl = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/152047/' + this.state.img;
      return (
        <div className={styles.userdetails}>
          <img src={imgUrl} width="100" height="100" />
          <h2>{this.state.name}</h2>
          <p>{this.state.street}</p>
        </div>
      )
    } else {
      return (<div className={styles.userdetails}>No user selected</div>)
    }
  }
});

export default UserDetail;
import React from 'react';

import styles from './styles.css';
import User from '../User/index.js';

var UserList = React.createClass({
  getInitialState: function() {
    return { users: [
            { name: 'Jackson Turner', street: '217 Tawny End', img: 'men_1.jpg' },
            { name: 'Megan Perry', street: '77 Burning Ramp', img: 'women_1.jpg' },
            { name: 'Ryan Harris', street: '12 Hazy Apple Route', img: 'men_2.jpg' },
            { name: 'Jennifer Edwards', street: '33 Maple Drive', img: 'women_2.jpg' },
            { name: 'Noah Jenkins', street: '423 Indian Pond Cape', img: 'men_3.jpg' }
        ]};
  },
  render: function() {
    var eventHub = this.props.glEventHub;
    return (
      <ul className={styles.userlist}>
        {this.state.users.map(function( user ){
          return <User
            key={user.name}
            userData={user}
            glEventHub={eventHub} />
        })}
      </ul>
    )
  }
});

export default UserList;
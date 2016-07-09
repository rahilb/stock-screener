/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import $ from "jquery";
import React from 'react';
import ReactDOM from 'react-dom';
import GoldenLayout from 'golden-layout';
import UserList from '../../components/UserList/index.js'
import UserDetail from '../../components/UserDetail/index.js'

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    /***************************
    * GoldenLayout Init
    ***************************/
    var config = {
      content: [{
        type: 'row',
        content: [{
          title: 'Users',
          type:'react-component',
          component: 'user-list'
        },{
          title: 'User Detail',
          type:'react-component',
          component: 'user-detail'
        }]
      }]
    };

    var myLayout = new GoldenLayout( config );
    myLayout.registerComponent( 'user-list', UserList );
    myLayout.registerComponent( 'user-detail', UserDetail );
    myLayout.init();

    return (
      <div className='app'>
        <div ref="layout" className="layout-container"></div>
      </div>
    );
  }
}

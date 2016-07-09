import React from 'react';

import styles from './styles.css';

var StockDetail = React.createClass({
  componentWillMount: function() {
    this.props.glEventHub.on( 'stock-select', this.setStock );
  },
  componentWillUnmount: function() {
    this.props.glEventHub.off( 'stock-select', this.setStock );
  },
  setStock: function( stockData ) {
    this.setState( stockData );
  },
  render: function() {
    if( this.state ) {
      return (
        <div className={styles.userdetails}>
          <h2>{this.state.ticker}</h2>
        </div>
      )
    } else {
      return (<div className={styles.userdetails}>No stock selected</div>)
    }
  }
});

export default StockDetail;
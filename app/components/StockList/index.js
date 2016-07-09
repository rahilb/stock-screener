import React from 'react';

import styles from './styles.css';
import Stock from '../Stock/index.js';

var StockList = React.createClass({
  getInitialState: function() {
    return { stocks: [
            { ticker: 'AAPL'}
        ]};
  },
  render: function() {
    var eventHub = this.props.glEventHub;
    return (
      <ul className={styles.userlist}>
        {this.state.stocks.map(function( stock ){
          return <Stock
            stockData={stock}
            glEventHub={eventHub} />
        })}
      </ul>
    )
  }
});

export default StockList;
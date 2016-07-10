import React from 'react';

import styles from './styles.css';
import Stock from '../Stock/stock.js';

var StockList = React.createClass({
  getInitialState: function() {
    return { 
      stocks: [
        { ticker: 'SGYP'},
        { ticker: 'AMPE'}
      ]};
  },
  render: function() {
    var eventHub = this.props.glEventHub;
    return (
      <ul className={styles.userlist}>
        {this.state.stocks.map(function( stock ){
          return <Stock
            stockData={stock}
            glEventHub={eventHub} 
            key={stock.ticker}
            />
        })}
      </ul>
    )
  }
});

export default StockList;
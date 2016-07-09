import React from 'react';

var Stock = React.createClass({
  getInitialState: function() {
    return this.props.stockData;
  },
  selectStock: function() {
    this.props.glEventHub.emit( 'stock-select', this.state );
  },
  render: function() {
  console.log(this.props);
    return (
      <li onClick={this.selectStock}>{this.props.stockData.ticker}</li>
    )
  }
});

export default Stock;
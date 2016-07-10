import React from 'react';
import styles from './styles.css';

var Stock = React.createClass({

  getInitialState: function() { 
    return {
      ticker: this.props.stockData.ticker, 
      price: '',
      name: '',
      change_percent: ''
    };
  },

  selectStock: function() {
    this.props.glEventHub.emit( 'stock-select', this.state );
  },

  componentDidMount: function() {
    let query = `select * from yahoo.finance.quote where symbol in ("${this.props.stockData.ticker}")`;
    let env = `store://datatables.org/alltableswithkeys`;
    let url = "https://query.yahooapis.com/v1/public/yql?";
    let encodedUrl = url + `q=${encodeURIComponent(query)}&env=${encodeURIComponent(env)}&format=json&callback=`

    $.get(encodedUrl, function (result) {
      var values = result.query.results.quote; 
      console.log(values);
      this.setState({
        price: values.LastTradePriceOnly,
        name: values.Name,
        change_percent: values.Change
      })
    }.bind(this));
    console.log(this.state.change_percent);
  },

  render: function() {
    let isNeg = this.state.change_percent.startsWith("-");
    return (
      <li onClick={this.selectStock}>
      <span>{this.state.ticker} - {this.state.name}</span>
      <span className={isNeg ? styles.neg : styles.pos}>{this.state.change_percent}%</span>
      </li>
    )
  }

});

export default Stock;
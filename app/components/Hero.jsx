var React = require('react');
var SearchForm = require('./parts/SearchForm.jsx');

function Hero(props){
  return(
      <div className="hero container-fluid">
        <div className="row">
          <div className="content col-sm-12">
            <h1>Track your Favorite CryptoCurrency Sentiment with Twitter</h1>
            <h2>Whats the word on the streets?</h2>
            <h2 className="text-logo"><img id="logo" src="/img/CryptoFeels.png" />CryptoFeels</h2>
            <SearchForm emit={ props.emit } initTimestamp={ props.initTimestamp } />
          </div>
        </div>
      </div>
    );
}

module.exports = Hero;

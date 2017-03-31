var fetch = require('node-fetch');

function getStockData(ticker, callback) {
    fetch(`http://www.afr.com/public/afr/market/quote?action=detail&company=${ticker}&_=${Date.now()}`)
        .then(res => res.json())
        .then(json => callback(json))
        .catch(err => console.error(err));
}

function processData(ticker, stockData) {
    var tickerData = stockData.marketData[ticker];
    return {
        priceLast: tickerData.priceLast,
        lastUpdated: new Date(tickerData.lastUpdated)
    };
}

function getAndProcessData(ticker, callback) {
    getStockData(ticker,
        (json) => {
            callback(processData(ticker, json));
        }
    );
}

module.exports = {
    getAndProcessData: getAndProcessData
}
const fetch = require("node-fetch");
const pricesUSD = require('./stubs/coins/coins-USD.json');

const API_ENDPOINT = "/simple/price";

exports.handler = async (event, context) => {
  return fetch(API_ENDPOINT, { headers: { Accept: "application/json" } })
    .then((response) => response.json())
    .catch((error) => ({ statusCode: 200, body: pricesUSD }));
};
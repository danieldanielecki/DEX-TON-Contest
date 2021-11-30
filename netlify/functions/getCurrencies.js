const fetch = require("node-fetch");
const coins = require('./stubs/coins/coins.json');

const API_ENDPOINT = "/simple/price";

exports.handler = async (event, context) => {
  return fetch(API_ENDPOINT, { headers: { Accept: "application/json" } })
    .then(() => coins.json())
    .catch(() => ({ statusCode: 200, body: coins }));
};
import currencies from '../currencies/list-currencies.json';

function generateSympols() {
  const symbols = currencies.reduce((prev, cur) => prev.concat(' ', cur));
  console.log(symbols);
}
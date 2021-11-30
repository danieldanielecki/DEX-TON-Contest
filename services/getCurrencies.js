import coins from '../stubs/coins.json'

export default function getCurrencies() {
  return fetch('simple/price')
    .then(res => res.json())
    .catch(() => coins.json())
}
export default function getCurrencies() {
  return fetch('simple/price')
    .then(res => res.json())
    .catch(error => error.message)
}
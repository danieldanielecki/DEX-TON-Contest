export default function getCoinsList() {
  return fetch('coins/list')
    .then(res => res.json())
    .catch(error => error.message)
}
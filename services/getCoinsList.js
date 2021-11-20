function getCoinsList() {
  fetch('coins/list')
    .then(res => res.json())
    .catch(error => error.message)
}
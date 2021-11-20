function getCurrenciesList() {
  fetch('/simple/supported_vs_currencies')
    .then(res => res.json())
    .catch(error => error.message)
}
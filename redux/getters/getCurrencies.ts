import store from '../store';

export default async function getCurrencies() {
  const currencies = await store.getState().fetched.currencies;
  return currencies;
}
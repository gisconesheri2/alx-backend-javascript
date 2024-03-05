export default function handleResponseFromAPI(promise) {
  promise
    .then((obj) => {
      console.log('Got a response from the API');
      return obj;
    })
    .catch(() => Error());
}

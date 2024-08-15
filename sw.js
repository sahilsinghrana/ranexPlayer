if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/scripts/cacherSw.js?v2")
    .then(function () {})
    .catch(function (_) {});
}

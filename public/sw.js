if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/scripts/cacherSw.js?v1.1")
    .then(function () {})
    .catch(function (_) {});
}

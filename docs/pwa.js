(function () {
  if (!('serviceWorker' in navigator) || location.protocol === 'file:') return;
  window.addEventListener('load', () => {
    const scriptUrl = document.currentScript && document.currentScript.src ? document.currentScript.src : new URL('pwa.js', location.href).href;
    const swUrl = new URL('sw.js', scriptUrl).href;
    navigator.serviceWorker.register(swUrl).catch(() => {});
  });
})();

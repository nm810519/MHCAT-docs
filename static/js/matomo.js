var _paq = window._paq = window._paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var u = "https://okp4.matomo.cloud/";
  _paq.push(['setTrackerUrl', u + 'matomo.php']);
  _paq.push(['setSiteId', '3']);
  var d = document,
      g = d.createElement('script'),
      s = d.getElementsByTagName('script')[0];
  g.async = true;
  g.src = '//cdn.matomo.cloud/okp4.matomo.cloud/matomo.js';
  s.parentNode.insertBefore(g, s);
})();

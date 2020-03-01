// Mobile Browsers
export const isMobile = () => {
  const ua = (navigator || {}).userAgent;
  if (ua) {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua));
  }
  return false;
};

// Opera 8.0+
export const isOpera = () => {
  const opr = window.opr || {};
  return (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.includes(" OPR/");
};

// Firefox 1.0+
export const isFirefox = () => typeof InstallTrigger !== "undefined";

// Safari 3.0+ "[object HTMLElementConstructor]"
export const isSafari = () => {
  const safari = window.safari || {};
  return /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; }(!window.safari || (typeof safari !== "undefined" && safari.pushNotification)));
};

// Internet Explorer 6-11
export const isIE = () => /* @cc_on!@ */false || !!document.documentMode;

// Edge 20+
export const isEdge = () => !isIE && !!window.StyleMedia;

// Chrome 1+
export const isChrome = () => !!window.chrome && !!window.chrome.webstore;

// Blink engine detection
export const isBlink = () => (isChrome || isOpera) && !!window.CSS;

export const allBrowsers = ["chrome", "firefox", "safari", "opera", "ie", "edge", "blink", "mobile"];

export default {
  isOpera,
  isFirefox,
  isSafari,
  isIE,
  isEdge,
  isChrome,
  isBlink,
  isMobile,
  allBrowsers
};

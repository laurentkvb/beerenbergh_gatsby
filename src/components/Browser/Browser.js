import React from "react";
import { allBrowsers, isBlink, isChrome, isEdge, isFirefox, isIE, isMobile, isOpera, isSafari } from "./browser-check";

const getBrowsersArr = () => {
  const browsers = [
    { name: "mobile", isCurrentBrowser: isMobile() },
    { name: "chrome", isCurrentBrowser: isChrome() },
    { name: "firefox", isCurrentBrowser: isFirefox() },
    { name: "safari", isCurrentBrowser: isSafari() },
    { name: "opera", isCurrentBrowser: isOpera() },
    { name: "ie", isCurrentBrowser: isIE() },
    { name: "edge", isCurrentBrowser: isEdge() },
    { name: "blink", isCurrentBrowser: isBlink() }
  ];
  return browsers;
};

const shouldRenderForBrowser = (props, browsers) => {
  const restrictedBrowsers = [];
  let allowedBrowsers = [];

  const only = props.only === true || typeof props.only === "undefined";
  const except = props.except === true;

  if (except) {
    allBrowsers.forEach((browser) => {
      if (props[browser]) restrictedBrowsers.push(browser);
      else allowedBrowsers.push(browser);
    });
  } else if (only) {
    allBrowsers.forEach((browser) => {
      if (props[browser]) allowedBrowsers.push(browser);
      else restrictedBrowsers.push(browser);
    });
  } else {
    // never goes here
    allowedBrowsers = allBrowsers.slice();
  }

  const currentBrowser = browsers.find(
    (browser) => browser.isCurrentBrowser === true
  );
  if (currentBrowser && restrictedBrowsers.includes(currentBrowser.name)) return false;
  if (currentBrowser && allowedBrowsers.includes(currentBrowser.name)) return true;
  return false;
};

const Browser = (props) => {
  const { children } = props;
  const browsers = getBrowsersArr();
  const shouldRender = shouldRenderForBrowser(props, browsers);

  if (shouldRender) {
    return <div className="browser">{children}</div>;
  }
  return null;
};

export default Browser;

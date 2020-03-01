import React, { Component } from "react";
import { toElement as scrollToElement } from "../../utils/scroll";

import "./style.scss";

class ScrollToNext extends Component {
  scrollToNext() {
    const { pageSelector } = this.props;
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  // TODO THEME / COLOR
  render() {
    // const { theme: { colorPrimary } } = this.context;
    return (
      <div className="scroll-to-next" onClick={(e) => this.scrollToNext()}>
        <div className="arrow bounce" style={{ color: "red" }}>
          <div className="scroll-text">Click Me</div>
          <button className="fas fa-chevron-down fa-2x" href="#" />
        </div>
      </div>
    );
  }
}


export default ScrollToNext;

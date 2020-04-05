import React, { ReactNode, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { Spring } from "react-spring/renderprops-universal";

/**
 * Fade in and fadeout animation for a ReactNode component
 *
 * @param children HTML tags / React Node's
 * @param changeAlreadyAnimated() which ideally sets the
 * @param hasAnimatedAlready in the component that calls this method.
 * hasAnimatedAlready variable should be set to true, if the animation has
 * been started for the first time.
 * @param partialVisibility is false when..
 */
export const FadeInOutAnimation = (
  children : ReactNode,
  changeAlreadyAnimated: Function,
  hasAnimatedAlready: boolean,
  partialVisibility = false
) => {
  const [visisble, setVisibility] = useState(false);

  const onChange = (isVisible: boolean) => {
    setVisibility(isVisible);
    if (visisble && changeAlreadyAnimated !== undefined) {
      changeAlreadyAnimated();
    }
  };

  return (
    <VisibilitySensor onChange={onChange} partialVisibility={partialVisibility}>
      {() => (
        <Spring
          delay={200}
          to={{ opacity: (visisble || hasAnimatedAlready) ? 1 : 0 }}
        >
          {(props) => <div style={props}>{children}</div>}
        </Spring>
      )}

    </VisibilitySensor>
  );
};

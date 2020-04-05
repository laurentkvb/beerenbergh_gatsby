import React, { CSSProperties, useState } from "react";
import { animated } from "react-spring";
import { useAudioPlayer } from "../../audioPlayer/AudioPlayer";
import { FadeInOutAnimation } from "../../animations/FadeInAndOutAnimation";

interface Props {
  stickyStyles: CSSProperties;
}

const AudioToggleButton: React.FC<Props> = ({ stickyStyles } : Props) => {
  const audioToggler = useAudioPlayer();
  const [alreadyAnimated, setAlreadyAnimated] = useState(false);

  const changeSetAnimated = () => {
    setAlreadyAnimated(true);
  };

  return FadeInOutAnimation(
    <animated.div
      className="magic-wand bounce-xy"
      onClick={() => audioToggler.togglePlayer()}
      style={stickyStyles}
    >
      <button className={audioToggler.shouldPlay ? "fas fa-volume-up" : "fas fa-volume-mute"} type="button" />
      <div className="magic-text">Turn on/off audio</div>
    </animated.div>,
    changeSetAnimated, alreadyAnimated
  );
};

export default AudioToggleButton;

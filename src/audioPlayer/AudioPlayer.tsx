import React, { useEffect, useState } from "react";

import Sound from "react-sound";
import { graphql, useStaticQuery } from "gatsby";
import { detect } from "detect-browser";

export interface AudioPlayerContextProps {
  togglePlayer: Function;
  shouldPlay: boolean,
}

export const AudioPlayerContext = React.createContext<AudioPlayerContextProps>({
  togglePlayer: () => {},
  shouldPlay: true,
});


export const useAudioPlayer = () : AudioPlayerContextProps => React.useContext(AudioPlayerContext);

const AudioPlayer: React.FC = ({ children }) => {
  const [shouldPlay, setShouldPlay] = useState(false);
  const [isFirstRun, setIsFirstRun] = useState(true);
  const data = useStaticQuery(pageQuery);
  const { audio } = data.contentfulBeerenbergh;


  useEffect(() => {
    setTimeout(() => {
      if (isFirstRun) {
        const isChrome = detect()?.name === "chrome";
        const isSafari = detect()?.name === "safari";
        const isMobile = detect()?.os === "iOS" || detect()?.os === "Android OS";

        if (isChrome) {
          setShouldPlay(true);
          setIsFirstRun(false);
        } else if (isMobile || isSafari) {
          setShouldPlay(false);
          setIsFirstRun(false);
        } else {
          setShouldPlay(true);
          setIsFirstRun(false);
        }
      }
    }, 1000);
  }, [isFirstRun]);

  return (
    <AudioPlayerContext.Provider value={{
      togglePlayer: () => setShouldPlay(!shouldPlay),
      shouldPlay
    }}
    >
      <Sound
        url={audio.file.url}
        playStatus={shouldPlay ? "PLAYING" : "PAUSED"}
        onError={() => setShouldPlay(false)}
        loop
      />
      {children}
    </AudioPlayerContext.Provider>
  );
};

export const pageQuery = graphql`
  query audioQuery {
    contentfulBeerenbergh {
    
     audio {
      file {
        url
      }
    }
  
    }
  }
`;


export default AudioPlayer;

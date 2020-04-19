import React, { useState } from "react";

import Sound from "react-sound";
import { graphql, useStaticQuery } from "gatsby";

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
  const data = useStaticQuery(pageQuery);
  const { audio } = data.contentfulBeerenbergh;


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

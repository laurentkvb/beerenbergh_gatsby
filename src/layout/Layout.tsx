import * as React from "react";
import { ReactNode } from "react";

import "../styles/base.scss";
import "./layout.styles.css";

import "@fortawesome/fontawesome-free/css/all.css";

import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyle from "../styles/GlobalStyle";
import ThemeSwitcher from "@components/../theme/ThemeSwitcher/ThemeSwitcher";
import { SEO } from "@components/SEO";
import AudioPlayer from "../audioPlayer/AudioPlayer";

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string;
  };
  children: ReactNode;
}

const Layout: React.FC<DefaultLayoutProps> = ({
  children
}: DefaultLayoutProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <SEO />

    <AudioPlayer>

      <div>
        <ThemeSwitcher>
          <main>

            {children}
          </main>
        </ThemeSwitcher>
      </div>
    </AudioPlayer>

  </ThemeProvider>
);

export default Layout;

import React from "react";

// eslint-disable-next-line import/no-cycle
import styled from "styled-components";
import { Theme } from "../../theme/ThemeSwitcher/interfaces/Theme";

interface Props {
  theme: Theme;
}

const Wrapper: React.FC<Props> = styled.div<Props>`

    background-color: ${({ theme }) => `${theme.bgPrimary}`};
    
    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ol,
    ul {
        color: ${({ theme }) => `${theme.textPrimary}`};
    }
  `;

export default Wrapper;

import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ScrollTop from "../components/ScrollTop";
import ParallaxBackground from "../components/ParallaxBackground";
import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher";
import Browser from "../components/Browser";
import LandingPage from "../sections/LandingPage/LandingPage";
import AboutPage from "../sections/AboutPage";


const IndexPage: React.FC = () => {
  const data = useStaticQuery(pageQuery);

  console.log(data);

  return (
    <div className="dev-landing-page">
      <ThemeSwitcher>
        <Browser except firefox>
          <ParallaxBackground />
        </Browser>
        <LandingPage title="Hallo mongool" />
        <AboutPage />
        {/* <PortfolioPage portfolioItems={fields.portfolioItems} /> */}
        <ScrollTop />
      </ThemeSwitcher>
    </div>
  );
};

export const pageQuery = graphql`
query MyQuery {
  contentfulBeerenbergh {
    title {
      json
    } 
    portfolioItems{
      projectName
      description
      logoUrl
      websiteUrl
    }
    stack{
      programmingLanguages {
        skillName
        experienceInYears
      }
      devopsTechnologies {
        skillName
        experienceInYears
      }
      frameworks{
        skillName
        experienceInYears
      }
      databases {
        skillName
        experienceInYears
      }
    }
  }
}
`;

export default IndexPage;

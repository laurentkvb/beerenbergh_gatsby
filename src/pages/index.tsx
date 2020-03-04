import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ScrollTop from "../components/ScrollTop";
import ParallaxBackground from "../components/ParallaxBackground";
import LandingPage from "../sections/LandingPage/LandingPage";
import AboutPage from "../sections/AboutPage";
import PortfolioPage from "../sections/PortfolioPage/PortfolioPage";
import Helmet from "react-helmet";

const IndexPage: React.FC = () => {
  const data = useStaticQuery(pageQuery);

  console.log(data);

  return (
    <div className="dev-landing-page">
      <Helmet title="Laurent Kleering van Beerenbergh">
        <html lang="en" />
      </Helmet>

      {/*<Browser except firefox>*/}
        <ParallaxBackground />
      {/*</Browser>*/}
      <LandingPage title="Hello, I am Laurent
Kleering van Beerenbergh"
      />
      <AboutPage />
      <PortfolioPage data={data.contentfulBeerenbergh.portfolioItems} />
      <ScrollTop />
    </div>
  );
};

export const pageQuery = graphql`
  query MyQuery {
    contentfulBeerenbergh {
      title {
        json
      }
      portfolioItems {
        projectName
        description
        logoUrl
        websiteUrl
      }
      stack {
        programmingLanguages {
          skillName
          experienceInYears
        }
        devopsTechnologies {
          skillName
          experienceInYears
        }
        frameworks {
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

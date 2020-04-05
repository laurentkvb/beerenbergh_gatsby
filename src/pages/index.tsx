import * as React from "react";

import { graphql, useStaticQuery } from "gatsby";
import ScrollTop from "@components/ScrollTop";
import ParallaxBackground from "@components/ParallaxBackground";
import LandingSection from "@sections/Landing";
import AboutSection from "@sections/About";
import PortfolioSection from "@sections/Portfolio";

const IndexPage: React.FC = () => {
  const data = useStaticQuery(pageQuery);
  const { title, portfolioItems } = data.contentfulBeerenbergh;

  return (
    <div className="dev-landing-page">
      <ParallaxBackground />
      <LandingSection data={title} />
      <AboutSection />
      <PortfolioSection data={portfolioItems} />
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
        logoSrc {
          file {
               url
             }
          }
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

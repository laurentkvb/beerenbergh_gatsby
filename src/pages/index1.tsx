// import React, { useContext } from "react";
//
// // Components
// import { SEO } from "@components/SEO";
//
// // Sections
// import Hero from "../sections/LandingPage/Hero";
// import SellingPoints from "../sections/LandingPage/SellingPoints";
// import CallToAction from "../sections/LandingPage/CallToAction";
//
// // Companies
// import { FeaturedCompaniesSlider } from "@components";
//
// // Gatsby
// import { graphql, useStaticQuery, navigate } from "gatsby";
//
// // I18N
// import i18n from "../../config/i18n.js";
// import { LocaleContext } from "../layout";
//
// // Models
// import { Translations } from "@models/translations";
//
// import "./indexPage.scss";
// import { CaseDescription } from "../sections/LandingPage/CaseDescription";
// import Approach from "../sections/LandingPage/Approach";
//
// /**
//  * Homepage component.
//  * @author Matt Hamers;
//  */
// const IndexPage: React.FC = () => {
//   const data = useStaticQuery(pageQuery);
//   const lang = useContext(LocaleContext);
//   const { locale } = lang;
//   const translations: Translations = i18n[locale];
//
//   const {
//     seoData,
//     heroData,
//     logoSliderData,
//     caseDescriptionData,
//     approachSlider
//   } = data;
//
//   const onClickDemo = () => {
//     if (translations.default) {
//       return navigate("/contact");
//     }
//
//     return navigate(`${locale}/contact`);
//   };
//
//   const onClickContact = () => {
//     if (translations.default) {
//       return navigate("/contact");
//     }
//
//     return navigate(`${locale}/contact`);
//   };
//
//   return (
//     <>
//       <SEO
//         title={seoData && seoData.metaTitle}
//         description={seoData && seoData.metaDescription}
//       />
//
//       <Hero
//         heroData={heroData && heroData}
//         translations={translations.landingPage}
//         onClickDemo={() => onClickDemo()}
//         onClickContact={() => onClickContact()}
//       />
//       <FeaturedCompaniesSlider companies={logoSliderData.companies} />
//       <CaseDescription caseDescriptionData={caseDescriptionData} />
//       <Approach slides={approachSlider.approachSlides} />
//       <SellingPoints />
//       <CallToAction
//         translations={translations.landingPage}
//         onClickDemo={() => onClickDemo()}
//         onClickContact={() => onClickContact()}
//       />
//     </>
//   );
// };
//
// const pageQuery = graphql`
//   query {
//     seoData: contentfulLandingPageHome {
//       metaTitle
//       metaDescription
//     }
//     heroData: contentfulLandingPageHome {
//       heroHeading
//       heroText {
//         json
//       }
//     }
//     logoSliderData: contentfulBedrijfsSlider {
//       companies {
//         image {
//           title
//           file {
//             url
//             fileName
//             contentType
//           }
//         }
//       }
//     }
//     caseDescriptionData: contentfulLandingPageHome {
//       caseDescriptions {
//         ... on ContentfulProductBeschrijving {
//           label
//           headingText
//           description {
//             json
//           }
//           image {
//             title
//             file {
//               url
//             }
//           }
//         }
//       }
//     }
//     approachSlider: contentfulLandingPageHome {
//       approachSlides {
//         id
//         heading
//         description {
//           description
//         }
//         image {
//           title
//           file {
//             url
//           }
//         }
//       }
//     }
//   }
// `;
//
// export default IndexPage;

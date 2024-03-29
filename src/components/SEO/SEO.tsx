import React from "react";
import { Helmet } from "react-helmet";

import i18n from "../../../config/i18n";

interface SEOProps {
  title?: string;
  titleAlt?: string;
  description?: string;
  banner?: string;
}

/**
 * SEO data component
 */
export const SEO: React.FC<SEOProps> = ({
  title,
  titleAlt,
  description,
  banner
}: SEOProps) => {
  const { defaultSEO } = i18n;

  const metaData = {
    title: title || defaultSEO.title,
    titleAlt: titleAlt || defaultSEO.titleAlt,
    description: description || defaultSEO.description,
    ogLang: defaultSEO.ogLang,
    banner: `${defaultSEO.siteUrl}${banner || defaultSEO.defaultBanner}`
  };

  return (
    <>
      <Helmet title={metaData.title}>
        <html lang={metaData.ogLang} />
        <meta name="description" content={metaData.description} />
        <meta name="image" content={metaData.banner} />
      </Helmet>
    </>
  );
};

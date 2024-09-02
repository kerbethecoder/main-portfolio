import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

import favicon from '../images/favicon.png';

const SEO = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
    }
  `);

  const siteTitle = site.siteMetadata.title;
  const metaDescription = site.siteMetadata.description;
  const url = site.siteMetadata.siteUrl;

  return (
    <Helmet>
      <html lang="en" />
      <title>{siteTitle}</title>
      <link rel="icon" href={favicon} />
      <link rel="canonical" href={url} />
      <meta charSet="UTF-8" />
      <meta name="description" content={metaDescription} />
      <meta name="url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={metaDescription} />
    </Helmet>
  );
};

export default SEO;

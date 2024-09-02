import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

import favicon from '../images/favicon.png';

const NotFoundPage = () => {
  return (
    <div className="flexCenter h-screen flex-col gap-5">
      <Helmet>
        <html lang="en" />
        <title>Page Not Found</title>
        <link rel="icon" href={favicon} />
      </Helmet>
      <h1 className="font-secondaryFont text-4xl font-bold">404: Not Found</h1>
      <p className="text-center text-lg">
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
      <Link to="/">
        <button className="btn rounded-lg px-5 py-2.5 font-bold">
          Let's go back home, bud.
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;

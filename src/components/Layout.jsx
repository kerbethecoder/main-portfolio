import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

import { cornerLine } from '../images';
import Socials from './socials/Socials';

const Layout = ({ children }) => {
  return (
    <>
      <div className="absolute size-5 bg-primaryBg" id="hero" />
      <div className="sticky ml-80 size-12 bg-secondaryBg md:ml-28 lg:top-0 lg:ml-72" />
      <img
        src={cornerLine}
        alt="corner-line"
        className="sticky hidden lg:top-[86%] lg:ml-12 lg:block"
      />
      <div className="sticky hidden w-fit lg:top-[66%] lg:ml-8 lg:block">
        <Socials />
      </div>
      <p className="sticky hidden w-fit text-xs font-bold lg:top-[95.5%] lg:ml-16 lg:block lg:text-sm">
        © {new Date().getFullYear()} &middot; Kerby Cantos
      </p>
      <button
        className="sticky left-[97%] top-[94%] hidden animate-bounce hover:text-dimBlack lg:block"
        onClick={() => scrollTo('#hero')}
      >
        <ion-icon name="caret-up-circle" size="large"></ion-icon>
      </button>
      <main>{children}</main>

      <div className="flexCenter mb-3 lg:hidden">
        <Socials />
      </div>
      <p className="mb-2 text-center text-xs font-bold lg:hidden">
        © {new Date().getFullYear()} &middot; Kerby Cantos
      </p>
    </>
  );
};

export default Layout;

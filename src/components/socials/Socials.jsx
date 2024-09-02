import React from 'react';

const Socials = () => {
  return (
    <ul className="socialsUL flex gap-2 lg:flex-col">
      {[
        ['https://www.linkedin.com/in/krbycnts/', 'logo-linkedin'],
        ['https://github.com/kerbethecoder', 'logo-github'],
        ['https://www.facebook.com/kerbe.cantos', 'logo-facebook'],
        ['https://www.instagram.com/krby.cnts', 'logo-instagram'],
      ].map(([url, logo]) => (
        <li>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-dimBlack"
          >
            <ion-icon name={logo} size="large"></ion-icon>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;

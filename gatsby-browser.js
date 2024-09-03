/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

import './src/styles/global.css';
import './src/styles/styles.css';

export const onClientEntry = () => {
  const fontAwesomeScript = document.createElement('script');
  fontAwesomeScript.type = 'module';
  fontAwesomeScript.src = 'https://kit.fontawesome.com/bf264faa38.js';
  fontAwesomeScript.crossOrigin = 'anonymous';
  document.head.appendChild(fontAwesomeScript);

  const ionIconsModuleScript = document.createElement('script');
  ionIconsModuleScript.type = 'module';
  ionIconsModuleScript.src =
    'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
  document.head.appendChild(ionIconsModuleScript);

  const ionIconsNoModuleScript = document.createElement('script');
  ionIconsNoModuleScript.setAttribute('nomodule', true);
  ionIconsNoModuleScript.src =
    'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';
  document.head.appendChild(ionIconsNoModuleScript);
};

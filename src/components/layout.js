/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="h-screen overflow-scroll">
        <main className="overflow-scroll">{children}</main>
        <footer className="py-10 mb-20">
          <p className="text-base leading-[4.75rem] text-center mb-20 lg:mb-0">Copyright © 2022. Made with ❤️ in Lagos.</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;

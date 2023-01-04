import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => (
  <Layout>
    <div className="container flex justify-between items-center">
      <div className="">
        <h1 className="header1 text-black max-w-[766px]">
          I’m Eniola, Product Designer from Lagos, Nigeria
        </h1>
        <p className="text-primary subtitle2 max-w-[630px]">
          I have demonstrated history of delivering great experiences from
          concept till launch and throughout the product lifecycle
        </p>
      </div>
      <StaticImage
        src="../images/author_art_work.png"
        className="max-w-[436px]"
      />
    </div>
  </Layout>
);

export const Head = () => <Seo title="Eniola" description="Product Designer"/>;

export default IndexPage;

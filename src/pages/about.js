import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => (
  <Layout>
    <div className="border-b border-black">
      <div className="container mt-12 pb-[14px]">
        <div className="">
          <h2 className="header2 text-black max-w-[766px]">
            A bit about myself
          </h2>
          <p className="text-primary subtitle1 mt-5">
            Hi, I'm Eniola. ANY - UH-LAH (Pronounce). I’m a Lagos-based
            designer, curious and passionate about Digital products, Literature,
            Travel, Women’s rights, Tik-tok videos, Architecture, minimalism,
            Technology, Music, and shopping.
          </p>
          <StaticImage src="../images/me.png" className="w-full my-12" />
          <p className="text-primary subtitle1 text-justify">
            I have over four years of experience creating thoughtful digital
            experiences that lie at the intersection of great visual design,
            great UX, Product strategy, and User research, I’ve helped design
            some of the best Fintech products to come out of Africa.
            <p className="text-primary mt-5 subtitle1 text-justify">
              I currently work with Nigeria's first Fintech Unicorn, Flutterwave
              🦋. In my role, I lead the mobile design team, where I manage all
              the of the mobile products within my Company. I have worked in
              early-stage startups and established organizations on a wide
              variety of design-related needs from deisinging their first
              products to working on features to help products scale. While the
              majority of my experience has been working in Fintech, I’ve also
              done some fun projects in child management, E-commerce, Edutech,
              and very recently Events.
            </p>
            <p className="text-primary mt-5 subtitle1 text-justify">
              I also mentor designers on ADPLIST and previously at Kimoyo
              Fellowship.
            </p>
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export const Head = () => <Seo title="Eniola" description="Product Designer" />;

export default IndexPage;

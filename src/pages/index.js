import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// Components
import Layout from "../components/layout";
import Seo from "../components/seo";
import OtherProjects from "../components/otherProjects";

// Assets
import todlrImage from "../images/barter.png";
import cowrywiseImage from "../images/cowrywise.png";
import afriticketImage from "../images/afriticket.png";

const data = [
  {
    title: "Todlr",
    description:
      "Designing the future of remittances Designing the future of remittances. Designing the future of remittances.",
    illustration: "../images/afriticket.png",
  },
  {
    title: "Barter",
    description:
      "Designing the future of remittances Designing the future of remittances. Designing the future of remittances.",
    illustration: todlrImage,
  },
  {
    title: "Cowrywise - Onboarding",
    description:
      "Designing the future of remittances Designing the future of remittances. Designing the future of remittances.",
    illustration: cowrywiseImage,
  },
  {
    title: "Afritickets",
    description:
      "Designing the future of remittances Designing the future of remittances. Designing the future of remittances.",
    illustration: afriticketImage,
  },
];
const IndexPage = () => (
  <Layout>
    <div className="border-b border-black">
      <div className="container lg:flex justify-between items-center pt-14 pb-[14px]">
        <div className="">
          <h1 className="header1 text-black max-w-[766px]">
            I’m Eniola, Product Designer from Lagos, Nigeria
          </h1>
          <p className="text-primary subtitle2 max-w-[630px]">
            I have demonstrated history of delivering great experiences from
            concept till launch and throughout the product lifecycle
          </p>
          <div className="flex items-center gap-x-5 lg:gap-x-9 mt-6 mb-6 lg:mb-0">
            <Link to="/">
              <StaticImage src="../images/email.png" className="max-w-[24px]" />
            </Link>
            <Link to="/">
              <StaticImage
                src="../images/linkedin.png"
                className="max-w-[24px]"
              />
            </Link>
          </div>
        </div>
        <StaticImage
          src="../images/author_art_work.png"
          className="max-w-[436px]"
        />
      </div>
    </div>
    <div className="border-b border-black pb-20">
      <div className="container pt-14">
        <h3 className="opacity-60 mb-14">Recent Work</h3>
        <div className="grid lg:grid-cols-2 gap-x-[74px] gap-y-[90px]">
          <div className="card relative">
            <div className="mirror hidden absolute h-full w-full bg-black -z-10 -ml-5 -mt-5"></div>
            <h3 className="card-title">Todlr</h3>
            <p className="subtitle3 mt-3">
              Designing the future of remittances Designing the future of
              remittances. Designing the future of remittances.
            </p>
            <StaticImage
              src="../images/todlr.png"
              className="max-w-[246px] mx-auto block mt-[93px]"
            />
          </div>
          <div className="card relative">
            <div className="mirror hidden absolute h-full w-full bg-black -z-10 -ml-5 -mt-5"></div>
            <h3 className="card-title">Todlr</h3>
            <p className="subtitle3 mt-3">
              Designing the future of remittances Designing the future of
              remittances. Designing the future of remittances.
            </p>
            <StaticImage
              src="../images/barter.png"
              className="max-w-[246px] mx-auto block mt-[93px]"
            />
          </div>
          <div className="card relative">
            <div className="mirror hidden absolute h-full w-full bg-black -z-10 -ml-5 -mt-5"></div>
            <h3 className="card-title">Cowrywise - Onboarding</h3>
            <p className="subtitle3 mt-3">
              Designing the future of remittances Designing the future of
              remittances. Designing the future of remittances.
            </p>
            <StaticImage
              src="../images/cowrywise.png"
              className="max-w-[246px] mx-auto block mt-16"
            />
          </div>
          <div className="card relative">
            <div className="mirror hidden absolute h-full w-full bg-black -z-10 -ml-5 -mt-5"></div>
            <h3 className="card-title">Afritickets</h3>
            <p className="subtitle3 mt-3">
              Designing the future of remittances Designing the future of
              remittances. Designing the future of remittances.
            </p>
            <StaticImage
              src="../images/yellowcard.png"
              className="max-w-[246px] mx-auto block mt-16"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="border-b border-black pb-20">
      <div className="container pt-14 pb-20">
        <h3 className="opacity-60 mb-14">Other Projects</h3>
        <div className="grid lg:grid-cols-2 gap-x-[74px] gap-y-[90px]">
          <div className="">
            <div className="bg-white border-[3px] border-black px-[38px] pt-[64px]">
              <StaticImage
                src="../images/barter.png"
                className="max-w-[246px] mx-auto block"
              />
            </div>
            <h3 className="card-title mt-[50px]">Changelog - Cowrywise</h3>
            <p className="subtitle3 mt-3">
              I designed a simple way for users to see important updates to the
              product.
            </p>
          </div>
            <div className="w-full">
              <div className="bg-white border-[3px] border-black px-[38px] pt-[64px]">
                <StaticImage
                  src="../images/barter.png"
                  className="max-w-[246px] mx-auto block"
                />
              </div>
              <h3 className="card-title mt-[50px]">Kiddiebox</h3>
              <p className="subtitle3 mt-3">
                A better way to manage your preschool
              </p>
            </div>
        </div>
      </div>
    </div>
    <OtherProjects />
  </Layout>
);

export const Head = () => <Seo title="Eniola" description="Product Designer" />;

export default IndexPage;

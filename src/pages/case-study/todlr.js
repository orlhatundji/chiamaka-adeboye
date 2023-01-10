import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../../components/layout";
import Seo from "../../components/seo";

// Assets
// import todlrImage from "../images/barter.png";
// import cowrywiseImage from "../images/cowrywise.png";
// import afriticketImage from "../images/afriticket.png";

const IndexPage = () => (
  <Layout>
    <div className="border-b border-black pb-14">
      <div className="container mt-12 pb-[14px]">
        <h2 className="header2 text-black">
          Cowrywise - Redesigning the onboarding flow to reduce dropoffs
        </h2>
        <div className="card flex justify-center min-h-[508px] mt-10">
          <StaticImage src="../../images/9.png" className="max-w-[451px]" />
          <StaticImage
            src="../../images/8.png"
            className="max-w-[233px] mb-auto -mt-11"
          />
        </div>
        <p className="text-primary subtitle1 mt-7 leading-[3.25rem]">
          Cowrywise is a savings and investment product that helps Nigerians
          save and invest for their goals with as little as $1. Savings
          investment plans created must be locked for a minimum of 3 months in
          order to gain interets and enable users build better savings habits.
        </p>
        <div className="flex gap-x-[140px] mt-[100px]">
          <h4 className="header4 whitespace-nowrap">Project Details</h4>
          <div className="">
            <h5 className="header5">My Role</h5>
            <p className="subtitle3 leading-10 mt-4">
              I owned the research and design process, end-to-end. I set up a
              research and testing plan, extracting insights from customer
              feedback , to designing, prototyping the entire flow and working
              with engineers.
            </p>
            <h5 className="header5 mt-6">Duration</h5>
            <p className="subtitle3 leading-10 mt-4">One week</p>
            <h5 className="header5 mt-6">Team</h5>
            <p className="subtitle3 leading-10 mt-4">
              Myself, Mobile Enginners, Product Manager, Customer Success team.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="border-b border-black">
      <div className="container py-[4.5rem]">
        <p className="subtitle1 text-center">Problem Discovery</p>
        <h3 className="header3 text-black leading-[70px] text-center mt-4 px-10">
          “ 3 out of 5 users were not able to complete the account creation
          process and that led to them dropping off.
        </h3>
      </div>
    </div>
    <div className="border-b border-black">
      <div className="container py-[4.5rem]">
        <h4 className="header4 whitespace-nowrap">Project Details</h4>
        <div className="flex gap-x-12 justify-between">
          <p className="text-primary subtitle1 mt-7 leading-[3.25rem] max-w-[517px]">
            I worked with the Customer experience team to learn about the type
            of feedback they were getting from users especially around account
            creation. After poring through the emails, social media and getting
            on calls with some of the users, I started noticing a pattern and it
            had to do with users not getting OTP’s ( One time Password)
          </p>
          <p className="text-primary subtitle1 mt-7 leading-[3.25rem]">
            To ensure that users are who they say they are, users were required
            to verify their phone numbers in order to complete the sign up
            process, they had to enter their phone numbers so an OTP can be sent
            to that number to verify it. <b>It turned out that a good number of
            users were not getting that password or in some cases, it came in
            much later resulting in users getting frustrated and dropping off.</b>
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export const Head = () => <Seo title="Eniola" description="Product Designer" />;

export default IndexPage;

import React, { useState, useRef } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import scrollTo from 'gatsby-plugin-smoothscroll';

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import useWindowDimensions from "../../components/windowDimensionHook";

const IndexPage = () => {
  const { width } = useWindowDimensions();
  const [swiperRef, setSwiperRef] = useState(null);
  const nextSlide = () => swiperRef.slideNext();
  const prevSlide = () => swiperRef.slidePrev();
  const topRef = useRef()
  const topFunction = () => {
    // topRef.current.scrollIntoView()
    scrollTo("#top")
  };

  return (
    <Layout>
      <div className="border-b border-black pb-14 mt-12" id="top">
        <div className="container mt-12 pb-[14px]">
          <h2 className="header2 text-black -z-10">
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
                Myself, Mobile Enginners, Product Manager, Customer Success
                team.
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
          <h4 className="header4 whitespace-nowrap">Why was this happening?</h4>
          <div className="flex gap-x-12 justify-between">
            <p className="text-primary subtitle1 mt-7 leading-[3.25rem] max-w-[517px]">
              I worked with the Customer experience team to learn about the type
              of feedback they were getting from users especially around account
              creation. After poring through the emails, social media and
              getting on calls with some of the users, I started noticing a
              pattern and it had to do with users not getting OTP’s ( One time
              Password)
            </p>
            <p className="text-primary subtitle1 mt-7 leading-[3.25rem]">
              To ensure that users are who they say they are, users were
              required to verify their phone numbers in order to complete the
              sign up process, they had to enter their phone numbers so an OTP
              can be sent to that number to verify it.{" "}
              <b>
                It turned out that a good number of users were not getting that
                password or in some cases, it came in much later resulting in
                users getting frustrated and dropping off.
              </b>
            </p>
          </div>
        </div>
        <div className="container py-[4.5rem]">
          <h4 className="header4 whitespace-nowrap">
            Why were users not getting their OTP’s?
          </h4>
          <p className="text-primary subtitle1 mt-7 leading-[3.25rem]">
            After I’d identified what the source of the problem was, I worked
            with the engineering team and Product Manager to learn why users
            were not getting their OTP’s and what other alternatives we could
            use to verify our users. This was the summary of my conversation;
          </p>
          <div className="grid lg:grid-cols-2 gap-x-12 justify-between mt-8">
            <div className="card p-7">
              <h4 className="text-grey header4">01</h4>
              <p className="subtitle2">
                Users not getting the one time password was largely a network
                issue and it was beyond our control.{" "}
              </p>
            </div>
            <div className="card p-7">
              <h4 className="text-grey header4">02</h4>
              <p className="subtitle2">
                We need to collect phone numbers because it’s the fastest way to
                contact users
              </p>
            </div>
          </div>
          <p className="subtitle2 mt-10">
            It was clear that while phone numbers were important they were not
            entirely reliable. It was important to find another way to verify
            our users.
          </p>
        </div>
      </div>
      <div className="border-b border-black">
        <div className="container py-[4.5rem]">
          <p className="subtitle1 text-center">Problem Discovery</p>
          <h3 className="header3 text-black leading-[70px] text-center mt-4 px-10">
            How might we increase the conversion rate during account creation?
          </h3>
        </div>
      </div>

      <div className="border-b border-black">
        <div className="container py-[4.5rem]">
          <h4 className="header4 whitespace-nowrap">Proposed solution</h4>
          <p className="text-primary subtitle1 mt-7 leading-[3.25rem]">
            It was important that whatever solution I came up with allows users
            complete the account creation process seamlessly while still making
            sure that users are able to verified and collecting all the
            important information. In order to make more informed decisions, I
            took a look at similar fintech products in the Nigerian market, how
            their onboarding was done and what we could learn from them, this
            helped me come up with the following solutions.
          </p>
          <div className="grid lg:grid-cols-2 gap-x-12 justify-between mt-8">
            <div className="card p-7">
              <h4 className="text-grey header4">01</h4>
              <h3 className="header4">Introduction of 4 - digit PIN</h3>
              <p className="subtitle2">
                I proposed the idea of making users create a 4-digit PIN at the
                point of account creation to verify that they are who they say
                they are but also as a way to make the app more secure and
                reduce the chances of fraud when making transactions in the app
              </p>
            </div>
            <div className="card p-7">
              <h4 className="text-grey header4">02</h4>
              <h3 className="header4">Bank Verification Number - BVN</h3>
              <p className="subtitle2">
                Every bank holder in Nigeria has a unique identifier called a
                BVN that could be used to verify a users identity thereby making
                the account secure and once again the reducing the chances of
                fraud on the app.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-black">
        <div className="container pt-10 pb-20 w-full ">
          <h4 className="header4">Old Account creation flow</h4>
          <div className="flex gap-x-3 items-center my-2 ml-auto w-fit">
            <button className="" onClick={() => prevSlide()}>
              <StaticImage
                src="../../images/prev.png"
                className="max-w-[40px] mx-auto block"
              />
            </button>
            <button className="" onClick={() => nextSlide()}>
              <StaticImage
                src="../../images/next.png"
                className="max-w-[40px] mx-auto block"
              />
            </button>
          </div>
          <div className="card px-2 py-16 md:px-4 lg:px-12 h-fit">
            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={Math.round(width / 300)}
              centeredSlides={false}
              spaceBetween={30}
              pagination={false}
              navigation={false}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <StaticImage src="../../images/acct_flow1.png" className="" />
              </SwiperSlide>
              <SwiperSlide>
                <StaticImage src="../../images/acct_flow2.png" className="" />
              </SwiperSlide>
              <SwiperSlide>
                <StaticImage src="../../images/acct_flow3.png" className="" />
              </SwiperSlide>
              <SwiperSlide>
                <StaticImage src="../../images/acct_flow4.png" className="" />
              </SwiperSlide>
              <SwiperSlide>
                <StaticImage src="../../images/acct_flow5.png" className="" />
              </SwiperSlide>
              <SwiperSlide>
                <StaticImage src="../../images/acct_flow6.png" className="" />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* New account creation flow */}
          <h4 className="header4 mt-32 mb-10">New Account creation flow</h4>
          <div className="card grid lg:grid-cols-2 gap-x-20 gap-y-28">
            <div className="flex flex-col items-center">
              <StaticImage
                src="../../images/new_account1.png"
                className="max-w-[288px] min-h-[582px]"
              />
              <h4 className="header4 mt-8">1.</h4>
              <p className="subtitle1 text-center max-w-[478px]">
                One of our design goals at cowrywise is simple and clutter free
                designs. On this screen, I made sure to collect only the most
                important information that we’ll need to create the account.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <StaticImage
                src="../../images/new_account2.png"
                className="max-w-[288px]"
              />
              <h4 className="header4 mt-8">2.</h4>
              <p className="subtitle1 text-center max-w-[478px]">
                After account creation, users had to verify their account so we
                had this screen informing users what they were going to be doing
                and why were performing this action.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <StaticImage
                src="../../images/new_account3.png"
                className="max-w-[288px]"
              />
              <h4 className="header4 mt-8">3.</h4>
              <p className="subtitle1 text-center max-w-[478px]">
                Because adding your BVN was a new information, we decided to do
                a little user education by telling users why we were colelcting
                their BVN
              </p>
            </div>
            <div className="flex flex-col items-center">
              <StaticImage
                src="../../images/new_account4.png"
                className="max-w-[288px]"
              />
              <h4 className="header4 mt-8">4.</h4>
              <p className="subtitle1 text-center max-w-[478px]">
                The last stage of the account creation flow involves creating a
                4 digit PIN
              </p>
            </div>
            <div className="flex flex-col items-center col-span-2 mb-32">
              <StaticImage
                src="../../images/new_account5.png"
                className="max-w-[288px]"
              />
              <h4 className="header4 mt-8">5.</h4>
              <p className="subtitle1 text-center max-w-[478px]">
                We also wanted to show users feedback on the actions they just
                completed so I had this success screen as the last step of the
                account creation flow
              </p>
            </div>
          </div>
        </div>
        <div className="container py-[4.5rem]">
          <h4 className="header4 whitespace-nowrap">
            Impact and Lessons learnt
          </h4>

          <div className="grid lg:grid-cols-2 gap-x-12 justify-between mt-8">
            <div className="card p-7">
              <h3 className="header4">87%</h3>
              <p className="subtitle2">
                Three months after this redesign was launched, we observed that
                our conversion rate went up to 87%
              </p>
            </div>
            <div className="card p-7">
              <h3 className="header4">32s</h3>
              <p className="subtitle2">
                After the redesign, we observed account creation took less than
                one minute,the average time to complete account set up was 32
                seconds
              </p>
            </div>
          </div>
          <p className="text-primary subtitle1 mt-10 leading-[3.25rem]">
            During the course of this project, I learnt that collaboration is
            really neccessary for the success of any project no matter how small
            or insignificant they might look. I also learnt about the importance
            of user education especially when you’re introducing something new
            to your users. Here is a link to the prototype to see how the flow
            works
          </p>
          <div className="w-fit ml-auto mt-11">
            <button onClick={topFunction} className="ring-0 focus:ring-o outline-0 border-0">
            <StaticImage
              role="button"
              onClick={topFunction}
              src="../../images/goto_top.png"
              className="max-w-[128px]"
            /></button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Eniola" description="Product Designer" />;

export default IndexPage;

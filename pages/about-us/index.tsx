import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { SocialMedia, ShoeProduct, LineChart, Chat } from "@/components/home";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import Balancer from "react-wrap-balancer";
import Card from "@/components/home/card";

export default function AboutUs() {
  return (
    <Layout>
      <ol className="z-10 my-24 mx-auto border-l border-neutral-300 px-6 dark:border-neutral-500">
        <h1 className="text-2xl font-bold text-orange-400 drop-shadow-sm md:text-3xl md:leading-[5rem]">
          Consultation Process
        </h1>
        <li>
          <div className="flex-start flex items-center pt-3">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
            <p className="text-sm text-neutral-500 dark:text-neutral-300">
              STEP 1
            </p>
          </div>
          <div className="mt-2 ml-4 mb-6">
            <h4 className="mb-1.5 text-xl font-semibold text-orange-400">
              Reach Out Through Email
            </h4>
            <p className="mb-3 text-neutral-500 dark:text-neutral-300">
              Please provide us a link to your existing Shopify Store as well as
              a list of apps and integrations you use for your business. Let us
              know what you would like to improve with any reference links to
              any other sites you admire. Expect to receive a response from our
              representatives within one business day.
            </p>
          </div>
        </li>
        <li>
          <div className="flex-start flex items-center pt-2">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
            <p className="text-sm text-neutral-500 dark:text-neutral-300">
              STEP 2
            </p>
          </div>
          <div className="mt-2 ml-4 mb-6">
            <h4 className="mb-1.5 text-xl font-semibold text-orange-400">
              First Zoom Consultation
            </h4>
            <p className="mb-3 text-neutral-500 dark:text-neutral-300">
              Here you will meet with one of our representatives to identify the
              scope of work for your desired improvements. At this time you can
              share screen to show what aspects of your site you would like
              improved, any screenshots or other files that can assist us in
              determining the scope of work.
            </p>
          </div>
        </li>
        <li>
          <div className="flex-start flex items-center pt-2">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
            <p className="text-sm text-neutral-500 dark:text-neutral-300">
              STEP 3
            </p>
          </div>
          <div className="mt-2 ml-4 pb-5">
            <h4 className="mb-1.5 text-xl font-semibold text-orange-400">
              The Proposal
            </h4>
            <p className="mb-3 text-neutral-500 dark:text-neutral-300">
              In approximately one business week our team will reach out to you
              to schedule a meeting to discuss and review the proposal. Here we
              will discuss the cost, how we can achieve your goals, the
              timeframe, and other additions and offerings we have.
            </p>
          </div>
        </li>
      </ol>
      <div className="container z-10 mx-auto px-6">
        <section className="mb-32 text-gray-800">
          <div className="flex flex-wrap">
            <div className="mb-6 w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-6/12 lg:px-6">
              <h2 className="mb-6 text-3xl font-bold text-orange-400">
                Contact us
              </h2>
              <p className="mb-6 text-gray-500">
                Send us an email inquiry if you are interested in our services.
                We are a full service web development boutique that caters
                services for Shopify Plus users.
              </p>
              <p className="mb-2 text-gray-500">Miami, 33130, United States</p>
              <p className="mb-2 text-gray-500">+ 01 234 567 89</p>
              <p className="mb-2 text-gray-500">moza.collective@gmail.com</p>
            </div>
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-6/12 lg:px-6">
              <form>
                <div className="form-group mb-6">
                  <input
                    type="text"
                    className="form-control m-0
              block
              w-full
              rounded
              border
              border-solid
              border-gray-300
              bg-white bg-clip-padding
              px-3 py-1.5 text-base
              font-normal
              text-gray-700
              transition
              ease-in-out
              focus:border-orange-400 focus:bg-white focus:text-gray-700 focus:outline-none"
                    id="exampleInput7"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group mb-6">
                  <input
                    type="email"
                    className="form-control m-0
              block
              w-full
              rounded
              border
              border-solid
              border-gray-300
              bg-white bg-clip-padding
              px-3 py-1.5 text-base
              font-normal
              text-gray-700
              transition
              ease-in-out
              focus:border-orange-400 focus:bg-white focus:text-gray-700 focus:outline-none"
                    id="exampleInput8"
                    placeholder="Email address"
                  />
                </div>
                <div className="form-group mb-6">
                  <textarea
                    className="
              form-control
              m-0
              block
              w-full
              rounded
              border
              border-solid
              border-gray-300
              bg-white bg-clip-padding
              px-3 py-1.5 text-base
              font-normal
              text-gray-700
              transition
              ease-in-out
              focus:border-orange-400 focus:bg-white focus:text-gray-700 focus:outline-none
            "
                    id="exampleFormControlTextarea13"
                    rows={3}
                    placeholder="Message"
                  />
                </div>
                <div className="form-group form-check mb-6 text-center">
                  <input
                    type="checkbox"
                    className="form-check-input mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-orange-400 checked:bg-orange-400 focus:outline-none"
                    id="exampleCheck87"
                    defaultChecked
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="exampleCheck87"
                  >
                    Send me a copy of this message
                  </label>
                </div>
                <button
                  type="submit"
                  className="
                  w-24 self-center rounded border-transparent bg-orange-500 py-1 px-2 text-center text-sm font-semibold text-white hover:border hover:border-orange-500 hover:bg-transparent hover:text-orange-600 sm:w-36 sm:py-2 sm:px-4"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

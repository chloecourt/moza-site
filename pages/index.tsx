import Card from "@/components/home/card";
import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import {
  Twitter,
  Pinterest,
  Tiktok,
  Instagram,
  GoogleAdsense,
  Facebook,
  GoogleAdwords,
  Youtube,
} from "@/components/shared/icons";
import { SocialMedia, ShoeProduct, LineChart } from "@/components/home";
export default function Home() {
  return (
    <Layout>
      <motion.div
        className="px-5 xl:px-0"
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.25,
            },
          },
        }}
      >
        {/* <motion.a
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          href="https://twitter.com/chloecourt08"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-white px-7 py-2 transition-colors hover:bg-blue-200"
        >
          <Pinterest className="h-5 w-5 " />
          <Twitter className="h-5 w-5 text-[#1d9bf0]" />
          <Instagram className="h-5 w-5" />
          <GoogleAdsense className="h-5 w-5" />
          <Tiktok className="h-5 w-5" />
          <Facebook className="h-5 w-5" />
          <GoogleAdwords className="h-5 w-5" />
          <Youtube className="h-5 w-5" />
        </motion.a> */}
        <motion.h1
          className="text-center text-4xl font-bold text-orange-400 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer ratio={0.8}>
            Your next media solution is right here
          </Balancer>
        </motion.h1>
        <motion.p
          className="mt-6 text-center text-gray-500 md:text-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>
            creating a customized ecommerce experiences to mobile app
            development for you next startup
          </Balancer>
        </motion.p>
        <motion.div
          className="mx-auto mt-6 flex items-center justify-center space-x-5"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          {/* {put button here below creating customized ecommerce experience } */}
        </motion.div>
      </motion.div>
      {/* here we are animating with Tailwind instead of Framer Motion because Framer Motion messes up the z-index for child components */}
      <motion.div
        className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0"
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.25,
            },
          },
        }}
      >
        {features.map(({ title, description, demo, large }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={demo}
            large={large}
          />
        ))}
      </motion.div>
    </Layout>
  );
}

const features = [
  {
    title: "Attractive Interfaces",
    description:
      "brighten up your Shopify or WordPress site some with cutting edge design and integrations",
    large: true,
    demo: <ShoeProduct />,
  },
  {
    title: "Performance first",
    description:
      "Built on [Next.js](https://nextjs.org/) primitives like `@next/font` and `next/image` for stellar performance.",
    demo: <SocialMedia />,
  },
  {
    title: "One-click Deploy",
    description:
      "Jumpstart your next project by deploying Precedent to [Vercel](https://vercel.com/) in one click.",
    demo: <LineChart />,
  },
  {
    title: "Built-in Auth + Database",
    description:
      "Precedent comes with authentication and database via [Auth.js](https://authjs.dev/) + [Prisma](https://prisma.io/)",
    large: true,
    demo: <div className="flex items-center justify-center space-x-20"></div>,
  },
];

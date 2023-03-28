import { motion } from "framer-motion";
import cx from "classnames";
import CountingNumbers from "@/components/shared/counting-numbers";
import {
  Pinterest,
  Instagram,
  GoogleAdwords,
  Youtube,
  Facebook,
  GoogleAdsense,
  Tiktok,
  Twitter,
} from "@/components/shared/icons";
import { ReactNode } from "react";

const socialIcons = [
  {
    component: <Pinterest className="absolute inset-0 z-10 m-auto h-14 w-14" />,
    key: "pinterest-fulfull",
    fill: false,
    completion: 0.75,
  },
  {
    component: <Instagram className="absolute inset-0 z-10 m-auto w-10" />,
    key: "interest-fulfill",
    fill: false,
    completion: 0.7,
  },
  {
    component: (
      <GoogleAdwords className="absolute inset-0 z-10 m-auto h-10 w-10" />
    ),
    key: "google-adwords-fulfill",
    fill: false,
    completion: 1,
  },
  {
    component: <Youtube className="absolute inset-0 z-10 m-auto h-12 w-12" />,
    key: "youtube-fulfill",
    fill: false,
    completion: 0.4,
  },
  {
    component: <Tiktok className="absolute inset-0 z-10 m-auto h-12 w-12" />,
    key: "Tiktok-fulfill",
    fill: false,
    completion: 0.8,
  },
  {
    component: (
      <Facebook
        className="absolute inset-0 z-10 m-auto h-14
     w-14
    "
      />
    ),
    key: "facebook-fulfill",
    fill: true,
    completion: 0.8,
  },
  // {
  //   component: (
  //     <GoogleAdsense
  //       className="absolute inset-0 z-10 m-auto h-14
  //    w-14
  //   "
  //     />
  //   ),
  //   key: "GoogleAdsense-fulfill",
  //   fill: false,
  //   completion: 0.8,
  // },
  // {
  //   component: (
  //     <Twitter
  //       className="absolute inset-0 z-10 m-auto h-12
  //    w-12 text-[#1d9bf0]
  //   "
  //     />
  //   ),
  //   key: "twitter-fulfill",
  //   fill: false,
  //   completion: 0.8,
  // },
];

export const SocialIcon = ({
  component,
  fill,
  completion,
  className,
}: {
  component: ReactNode;
  fill: boolean;
  completion: number;
  className?: string;
}) => {
  return (
    <div className={cx("flex h-24 w-20 flex-col", className)}>
      <div className="relative h-full w-full">
        <motion.svg
          className="absolute inset-0 m-auto"
          viewBox="0 0 100 100"
          width={66}
          height={66}
        >
          <motion.circle
            initial={{ pathLength: 0 }}
            animate={{ pathLength: completion }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 2, ease: "easeOut" }}
            strokeWidth={7}
            strokeDasharray="0 1"
            strokeLinecap="round"
            transform="rotate(90 50 50)"
            cx="50"
            cy="50"
            r="45"
            fill={fill ? "#fb923c" : "#ffffff"} // change fill to stroke later
            stroke="#fb923c"
          />
        </motion.svg>
        {component}
      </div>
      <p className="self-center">{`${completion * 100}%`}</p>
    </div>
  );
};

export default function SocialMedia() {
  return (
    <div className="flex flex-row items-baseline">
      <SocialIcon
        className="hidden min-[505px]:flex"
        component={
          <Twitter className="absolute inset-0 z-10 m-auto h-12 w-12 text-[#1d9bf0]" />
        }
        fill={false}
        completion={0.6}
      />
      <div className="grid grid-cols-3 grid-rows-2 gap-4 p-3">
        {socialIcons.map(({ component, key, fill, completion }) => (
          <SocialIcon
            component={component}
            key={key}
            fill={fill}
            completion={completion}
          />
        ))}
      </div>
      <SocialIcon
        className="hidden min-[505px]:flex"
        component={
          <GoogleAdsense className="absolute inset-0 z-10 m-auto h-14 w-14" />
        }
        fill={false}
        completion={0.67}
      />
    </div>
  );
}

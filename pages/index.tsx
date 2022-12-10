import localFont from "@next/font/local";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  DISCORD_URL,
  DOCUMENTATION_URL,
  TWITTER_URL,
  DAO_URL,
  APP_URL,
  INFO_CENTER_URL,
  DAO_DOCUMENTATION_URL,
  GITHUB_URL,
} from "../constants/urls";

// Font files can be colocated inside of `app`
const monument = localFont({
  src: "../public/fonts/MonumentExtended-Bold.ttf",
});
const migra = localFont({ src: "../public/fonts/Migra-Regular.ttf" });
const montreal = localFont({
  src: "../public/fonts/NeueMontreal-Regular.ttf",
});

export default function Home() {
  useEffect(() => {
    document.body.style.backgroundColor = "black";
  }, []);

  return (
    <div className="bg-black">
      <div className="relative h-[80vh] sm:h-[95vh]">
        <Background />
        <Header />
        <Hero />
      </div>
      <AppSection />
      <DAOSection />
      <DevSection />
      <Footer />
    </div>
  );
}

const Background = () => {
  const [loaded, setLoaded] = useState(false);
  const videoRef = useCallback((ref: HTMLVideoElement) => {
    const handler = async () => {
      try {
        await ref.play();
        setLoaded(true);
      } catch (err) {
        setLoaded(false);
      }
    };
    handler();
  }, []);

  return (
    <div className="absolute h-full w-full">
      <Image
        className={`object-cover h-full sm:hidden absolute top-0 ${
          loaded ? "hidden" : "sm:visible "
        }`}
        src="/backgrounds/background-preview.png"
        width={400}
        height={400}
        alt="background"
      />
      <video
        ref={videoRef}
        className={`object-cover h-full w-full ${
          loaded ? "visible" : "invisible sm:visible"
        }`}
        autoPlay
        loop
        muted
        playsInline
        controls={false}
      >
        <source src="https://d3ulrxylqa2nex.cloudfront.net/background.mov" />
      </video>
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex items-center justify-between p-6 px-5 sm:px-10">
      <div className="flex items-center">
        <div className={monument.className + " text-white text-xl mr-2 z-20"}>
          ARTIVA
        </div>
        <div
          className={migra.className + " text-white text-2xl opacity-70 z-20"}
        >
          V2
        </div>
      </div>
      <div className="z-20 items-center hidden sm:flex">
        <a
          href={TWITTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-md mr-1 rounded-md h-8 flex items-center opacity-70 px-6"
        >
          Twitter
        </a>
        <a
          href={DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-md mr-1 rounded-md h-8 flex items-center opacity-70 px-6"
        >
          Discord
        </a>
        <a
          href={DOCUMENTATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-md mr-1 rounded-md h-8 flex items-center opacity-70 px-6"
        >
          Developers
        </a>
        <a
          href={DAO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-md mr-2 rounded-md h-8 flex items-center opacity-70 px-6"
        >
          DAO
        </a>
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-md border border-white rounded-md h-8 flex items-center px-8"
        >
          Launch App
        </a>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className={"absolute z-20 bottom-10 left-5 sm:left-10"}>
      <div className={migra.className + " text-white text-6xl sm:text-7xl "}>
        Own your <br className="sm:hidden" /> platform
      </div>
      <div
        className={
          montreal.className + " text-xl sm:text-2xl mt-6 text-white opacity-80"
        }
      >
        Artiva V2 takes your NFT collaborations,
        <br className="sm:hidden" /> content and
        <br className="hidden sm:block" /> community onchain
      </div>
    </div>
  );
};

const AppSection = () => {
  return (
    <div className="bg-black h-[90vh]">
      <div className="flex items-center justify-around h-full">
        <div className="flex flex-col sm:flex-row items-center">
          <div className="mr-0 sm:mr-20 w-1/2 flex items-center justify-around">
            <Image
              className="w-40 sm:w-80"
              src={"/icons/app-logo.svg"}
              alt="App Icon"
              width={300}
              height={300}
            />
          </div>
          <div className="mt-20 sm:w-[60vw] sm:mt-0 text-center sm:text-left">
            <div
              className={
                monument.className +
                " text-2xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#E7F1BC] to-[#1990B3]"
              }
            >
              Explore the app
            </div>
            <div className="text-md sm:text-2xl text-white mt-6 px-8 sm:px-0">
              Deploy, curate and customize an NFT platform for you and your
              community.
            </div>
            <div className="mt-20 sm:mt-12 flex flex-col sm:flex-row px-8 sm:px-0">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black cursor-pointer text-xs md:text-md flex items-center justify-around font-bold rounded-md h-8 w-full sm:w-52 bg-gradient-to-r from-[#E7F1BC] to-[#1990B3]"
              >
                Launch App
              </a>
              <a
                href={INFO_CENTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 cursor-pointer text-xs md:text-md flex items-center justify-around mt-4 sm:mt-0 sm:ml-4 font-bold rounded-md h-8 w-full sm:w-52 border border-gray300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DAOSection = () => {
  return (
    <div className="bg-black h-[90vh] border-t border-gray-700">
      <div className="flex items-center justify-around h-full">
        <div className="flex flex-col sm:flex-row items-center">
          <div className="mt-20 sm:mt-0 text-center sm:text-left sm:w-[50vw] order-2 sm:order-1">
            <div
              className={
                monument.className +
                " text-2xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#FDA0E3] to-[#ad1db8]"
              }
            >
              Join the DAO
            </div>
            <div className="text-md sm:text-2xl text-white mt-6 px-8 sm:px-0">
              Control the DAO treasury, vote for onchain proposals{" "}
              <br className="hidden sm:block" /> and propagate the Artiva brand.
            </div>
            <div className="mt-20 sm:mt-12 flex flex-col sm:flex-row px-8 sm:px-0">
              <a
                href={DAO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black cursor-pointer text-xs md:text-md flex items-center justify-around font-bold rounded-md h-8 w-full sm:w-52 bg-gradient-to-r from-[#FDA0E3] to-[#ad1db8]"
              >
                View DAO
              </a>
              <a
                href={DAO_DOCUMENTATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 cursor-pointer text-xs md:text-md flex items-center justify-around mt-4 sm:mt-0 sm:ml-4 font-bold rounded-md h-8 w-full sm:w-52 border border-gray300"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="flex items-center justify-around order-1 sm:order-2">
            <Image
              className="w-40 sm:w-80"
              src={"/icons/dao-logo.svg"}
              alt="DAO Icon"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const DevSection = () => {
  return (
    <div className="bg-black h-[90vh] border-t border-gray-700">
      <div className="flex items-center justify-around h-full">
        <div className="flex flex-col sm:flex-row items-center">
          <div className="mr-0 sm:mr-20 w-1/2 flex items-center justify-around">
            <Image
              className="w-40 sm:w-80"
              src={"/icons/dev-logo.svg"}
              alt="Dev Icon"
              width={300}
              height={300}
            />
          </div>
          <div className="mt-20 sm:mt-0 text-center sm:text-left sm:w-[60vw]">
            <div
              className={
                monument.className +
                " text-2xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#FD914C] to-[#b03e19]"
              }
            >
              Build with us
            </div>
            <div className="text-md sm:text-2xl text-white mt-6 px-8 sm:px-0">
              Get funded by the DAO to build custom themes, unique clients and
              onchain publishing modules.
            </div>
            <div className="mt-20 sm:mt-12 flex flex-col sm:flex-row px-8 sm:px-0">
              <a
                href={DOCUMENTATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black cursor-pointer text-xs md:text-md flex items-center justify-around font-bold rounded-md h-8 w-full sm:w-52 bg-gradient-to-r from-[#FD914C] to-[#b03e19]"
              >
                View Docs
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 cursor-pointer text-xs md:text-md flex items-center justify-around mt-4 sm:mt-0 sm:ml-4 font-bold rounded-md h-8 w-full sm:w-52 border border-gray300"
              >
                View Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="bg-black border-t border-gray-700 sm:h-32 w-full sm:flex justify-around px-6 sm:px-0 py-4 sm:py-0">
      <div className="block sm:flex items-left sm:items-center">
        <a
          href={TWITTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xs rounded-md h-8 flex items-center opacity-70 mt-2 sm:mt-0 sm:px-12"
        >
          Twitter
        </a>
        <a
          href={DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xs rounded-md h-8 flex items-center opacity-70 mt-2 sm:mt-0 sm:px-12"
        >
          Discord
        </a>
        <a
          href={DOCUMENTATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xs rounded-md h-8 flex items-center opacity-70 mt-2 sm:mt-0 sm:px-12"
        >
          Developers
        </a>
        <a
          href={DAO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xs rounded-md h-8 flex items-center opacity-70 mt-2 sm:mt-0 sm:px-12"
        >
          DAO
        </a>
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xs rounded-md h-8 flex items-center opacity-70 mt-2 sm:mt-0 sm:px-12"
        >
          App
        </a>
      </div>
    </div>
  );
};

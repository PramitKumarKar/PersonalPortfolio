import React from "react";
import Vidplay from "../assets/portfolio/Vidplay.png";
import weatherApp from "../assets/portfolio/weatherApp.png"
import crypto from "../assets/portfolio/crypto.png"
const Portfolio = () => {

  const handleCodeLink = (url) => {
    window.open(url, '_blank')
  }

  const portfolios = [
    {
      id: 1,
      src: Vidplay,
      demoLink: "https://video-streaming-platform-nine.vercel.app/",
      codeLink: "https://github.com/PramitKumarKar/VideoStreamingPlatform"
    },
    {
      id: 2,
      src: crypto,
      demoLink: "https://crypto-z-pi.vercel.app/",
      codeLink: "https://github.com/PramitKumarKar/CryptoZ"
    },
    {
      id: 3,
      src: weatherApp,
      demoLink: "https://weather-forecast-app-mu.vercel.app/",
      codeLink: "https://github.com/PramitKumarKar/WeatherForecastApp"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,codeLink, demoLink }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105" onClick={() => {handleCodeLink(demoLink)}}>
                 Demo
                </button>
                <button className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105" onClick={() => {handleCodeLink(codeLink)}}>
                 Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
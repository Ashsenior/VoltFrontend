import React from "react";

const BannerCard = () => {
  return (
    <div className="w-full max-w-sm bg-gray-900 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mb-4">
      <a
        href="#"
        classNameName="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="w-full h-40 rounded-t-lg"
          src="https://cdn.discord.me/server/b17d2973206e20bbd1a29c93626d7b4ccbccdbd7527533b872f052cee72d7dfd/banner_64bf81a17f16bfe26bd4764351c0ab93c61ed933c5efbb21ad3a1c29c06e1bba.jpg"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="mb-3 font-normal text-white  dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </a>
    </div>
  );
};

export default BannerCard;

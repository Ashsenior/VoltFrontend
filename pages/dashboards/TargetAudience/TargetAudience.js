import React from "react";

const TargetAudience = ({ startup }) => {
  return (
    <div className="mt-6">
      <div className="stats w-full rounded-lg stats-vertical lg:stats-horizontal shadow-lg">
        <div className="stat">
          <div className="card-compact">
            <h4 className="text-xl text-gray-800 font-semibold">
              Core Customer 👨‍💻
            </h4>
            <p>{startup?.customer}</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="stat">
          <div className="card-compact">
            <h4 className="text-xl text-gray-800 font-semibold">
              Problem Area 🗒
            </h4>
            <p>{startup?.problemArea}</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="stat">
          <div className="card-compact">
            <h4 className="text-xl text-gray-800 font-semibold">
              Ways of use ⚙
            </h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              rem ad quibusdam explicabo necessitatibus minima? Quod deserunt
              modi ex ipsam? Porro nemo non praesentium quo.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="stat">
          <div className="card-compact">
            <h4 className="text-xl text-gray-800 font-semibold">
              Additional Customer 👩‍💻
            </h4>
            <p>{startup?.customer}</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetAudience;

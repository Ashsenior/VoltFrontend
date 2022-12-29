import React from "react";

const MarketPlaceCard = () => {
  var items = [
    {
      name: "Item #1",
      description: "Hello World!",
      type: "Product",
      rating: "4.1",
      image:
        "https://play-lh.googleusercontent.com/c240yqpF4BzB8XE4UF0yY4UTOzp9zVslIWHxsdEzVSg3v0BYKGcrTH5ZIcxED1z94Dcb=s64-rw",
    },
    {
      name: "Item #2",
      description: "Hello World!",
      type: "Product",
      rating: "4.1",
      image:
        "https://play-lh.googleusercontent.com/qBdVfwRCsI4KM7qewhJ0AKZKQjyD-DdxPDcdDbsRMhNO9zrwbefggn1vGqRIDZA3fg=s64-rw",
    },
    {
      name: "Item #3",
      description: "Hello World!",
      type: "Product",
      rating: "4.1",
      image:
        "https://play-lh.googleusercontent.com/KzEk8vKXTBztnDAU1XCwME43i70BTtwTH-xYhlFWOhvkBMXZh0cno_PR9XAU-P2xQgQ=s64-rw",
    },
    {
      name: "Item #4",
      description: "Hello World!",
      type: "Product",
      rating: "4.1",
      image:
        "https://play-lh.googleusercontent.com/Bl6ehsJWLuBaethzMiD3Kpfid_TNNV7ECLp-1QETcNhQ75uPTxW1zLpXEPiq9rcPkps=s64-rw",
    },
    {
      name: "Item #5",
      description: "Hello World!",
      type: "Product",
      rating: "4.1",
      image:
        "https://play-lh.googleusercontent.com/WG9LoxydQHtU2S7iUvlLAdt1_fc5edPzT0Q_pJ7QJLhriQlz4G-ToaG6UJDiNJoBSAoA=s64-rw",
    },
    {
      name: "Item #6",
      description: "Hello World!",
      type: "Product",
      rating: "4.1",
      image:
        "https://play-lh.googleusercontent.com/kh2_eN-8jLapLGca6E7EupoEpv9e7IWXGxWLPwCBKl888d8IiLPAuPWAhgmFLk4EoA=s64-rw",
    },
    {
      name: "Item #7",
      description: "Hello World!",
      type: "Product",
      rating: "4.1",
      image:
        "https://play-lh.googleusercontent.com/4cYUaOl_BfnT47O9sIstXdbSFU1JEIhWpLgfAaWY0SGYzUr760_1sFErEDfYK63AXcQ=s64-rw",
    },
    {
      name: "Item #8",
      description: "Hello World!",
      type: "Product",
      rating: "4.1",
      image:
        "https://play-lh.googleusercontent.com/hYLElG0RAgn60XE6cfgsPPW_JB63PEVWvDtvhipAGvTpxBX5YgLGt3UXvnJ_kRwKhnE=s64-rw",
    },
  ];

  return (
    <div className="mt-10 mb-10">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-xl font-semibold text-gray-700 text-left mb-2">
          Items
        </h4>
        <button className="btn btn-outline btn-sm rounded-md">All Items</button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-grey-900 shadow-lg"
          >
            <img
              className="w-50 h-36  rounded-lg bg-white shadow-lg"
              src={item.image}
            />
            <div className="p-6 flex flex-col justify-start">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                {item.name}
              </h5>
              <p className="text-gray-700 text-base mb-4">{item.description}</p>
              <p className="text-gray-600 text-xs">{item.rating} ratings</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketPlaceCard;

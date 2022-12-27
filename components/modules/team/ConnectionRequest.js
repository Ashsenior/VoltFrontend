import React from "react";

const ConnectionRequest = ({ request }) => {
  console.log(request);
  const connectionsData = [
    {
      id: "dsjhfafr451",
      startup_name: "Mr. Ritesh Rajpal",
      startup_image:
        "https://www.pngfind.com/pngs/m/145-1453310_bt-logo-transparent-background-british-telecom-icon-hd.png",
      type: "Tech",
      members: "12",
      points: "42",
      role: "Developer",
      color: "gray",
      status: "Pending",
    },
    {
      id: "dsjhfafr451",
      startup_name: "101 Tech",
      startup_image:
        "https://i.pinimg.com/originals/b0/02/d5/b002d5447123a6cde864d30b52a4cdae.jpg",
      type: "Tech",
      members: "12",
      points: "42",
      role: "Marketing",
      color: "gray",
      status: "Pending",
    },
    {
      id: "dsjhfafr451",
      startup_name: "101 Tech",
      startup_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhB1S9V0ABB8aLyXZgeJ4F3x6lRQxMaqdSRn_cph0SlKB6qPtARLc4KCGMbsuGJ_0EXCg&usqp=CAU",
      type: "Tech",
      members: "12",
      points: "42",
      role: "Product Manager",
      color: "green",
      status: "Accepted",
    },
    {
      id: "dsjhfafr451",
      startup_name: "101 Tech",
      startup_image:
        "https://www.kindpng.com/picc/m/70-707557_c-logo-png-hd-transparent-png.png",
      type: "Tech",
      members: "12",
      points: "42",
      role: "UI designer",
      color: "gray",
      status: "Pending",
    },
    {
      id: "dsjhfafr451",
      startup_name: "101 Tech",
      startup_image:
        "https://www.kindpng.com/picc/m/70-707557_c-logo-png-hd-transparent-png.png",
      type: "Tech",
      members: "12",
      points: "42",
      role: "Developer",
      color: "green",
      status: "Accepted",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-4 px-0 ">
        <div className="flex justify-between w-full bg-white text-gray-500 p-2 hover:bg-gray-100">
          <div className="flex">
            <img
              className="w-14 h-14 rounded-full"
              src={
                "https://www.kindpng.com/picc/m/70-707557_c-logo-png-hd-transparent-png.png"
              }
              alt=""
            />
            <div className="w-1/3 items-start mx-2">
              <h4 className="text-base font-medium">
                {request?.startup?.name}
              </h4>
              <p className="flex text-sm text-gray-500 ">
                {request?.user?.profile?.domain}
                <span className="ml-1 text-green-400">@Nexcksus</span>
              </p>
            </div>
            <div className="w-full bg-gray-100 rounded-lg flex flex-col items-start p-2">
              <h4>
                <span className="text-indigo-600 font-semibold">Message </span>
                {request?.message}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConnectionRequest;

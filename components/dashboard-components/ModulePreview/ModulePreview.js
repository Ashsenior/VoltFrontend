import React from "react";
import Preview from "./Previews";

const ModulePreview = () => {
  const previewData = [
    {
      id: "dsgfaae126",
      name: "Strategy Module",
      bg: "indigo",
      color: " #6666ff",
      points: "435",
      head: "ashsenior",
      team: "user",
      marketings: [
        {
          name: "Marketing campaign",
          user: "user",
          deadline: "02/17/22",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod sapien sit amet lectus laoreet,",
          youtube: "42",
          reddit: "13",
          instagram: "19",
        },
      ],
    },
    {
      id: "dsgfaae123",
      name: "Product Module",
      bg: "blue",
      color: "#0099ff",
      points: "700",
      head: "ashsenior",
      team: "user",
      marketings: [
        {
          name: "Latest Product",
          user: "user",
          deadline: "12/14/21",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod sapien sit amet lectus laoreet,",
          youtube: "12",
          reddit: "13",
          instagram: "15",
        },
      ],
    },
    {
      id: "dsgfaae127",
      name: "Research Module",
      bg: "gray",
      color: "#808080",
      points: "500",
      head: "ashsenior",
      team: "user",
      marketings: [
        {
          name: "Research campaign",
          user: "user",
          deadline: "04/24/22",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod sapien sit amet lectus laoreet,",
          youtube: "64",
          reddit: "41",
          instagram: "35",
        },
      ],
    },
    {
      id: "dsgfaae126",
      name: "Marketing Module",
      bg: "green",
      color: "#66ff33",
      points: "435",
      head: "ashsenior",
      team: "user",
      marketings: [
        {
          name: "Marketing campaign",
          user: "user",
          deadline: "02/17/22",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod sapien sit amet lectus laoreet,",
          youtube: "42",
          reddit: "13",
          instagram: "19",
        },
      ],
    },
  ];
  return (
    <div className="mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 ">
        {previewData.map((preview) => (
          <Preview key={preview.id} preview={preview} />
        ))}
      </div>
    </div>
  );
};

export default ModulePreview;

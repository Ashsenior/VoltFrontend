import React from "react";
import TeamCard from "./TeamCard";
import EmptyState from "./empty-state";
import ConnectionRequests from "./ConnectionRequests";

const AllTeamCards = ({ data }) => {
  const teamData = [
    {
      id: 1245,
      status: "Open to work",
      color: "green",
      image:
        "https://fkdolnidvoriste.cz/wp-content/uploads/2021/08/Profile.jpg",
      name: "Kevin H",
      role: "React Developer",
      commits: "142",
      task: "75",
      progress: "62",
      skills: "Social Media",
    },
    {
      id: 1245,
      status: "Working",
      color: "orange",
      image:
        "https://fkdolnidvoriste.cz/wp-content/uploads/2021/08/Profile.jpg",
      name: "Kevin H",
      role: "React Developer",
      commits: "142",
      task: "75",
      progress: "62",
      skills: "Social Media",
    },
    {
      id: 1245,
      status: "Working",
      color: "orange",
      image:
        "https://fkdolnidvoriste.cz/wp-content/uploads/2021/08/Profile.jpg",
      name: "Kevin H",
      role: "React Developer",
      commits: "142",
      task: "75",
      progress: "62",
      skills: "Social Media",
    },
    {
      id: 1245,
      status: "Open to work",
      color: "green",
      image:
        "https://fkdolnidvoriste.cz/wp-content/uploads/2021/08/Profile.jpg",
      name: "Kevin H",
      role: "React Developer",
      commits: "142",
      task: "75",
      progress: "62",
      skills: "Social Media",
    },
  ];
  return (
    <div className=" mb-10 mt-4 h-full shadow">
      <div className="flex">
        <div className="w-1/3">
          <h1 className="text-gray-200 font-semibold ml-2 pt-2">Mobs <span className="text-gray-400">aka Admins</span></h1>
          <div className=" gap-4 p-2">
            {data?.team?.mobs?.map((member) => (
              <TeamCard key={member.email} member={member} />
            ))}
          </div>
        </div>
        <div className="w-1/3">
          <h1 className="text-gray-200 font-semibold ml-2 pt-2">Other Members</h1>
          <div className=" gap-4 p-2">
            {data?.connections?.members ? (
              data?.connections?.members?.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))
            ) : (
              <EmptyState />
            )}
          </div>
        </div>
        <div className="w-1/3">
          <h1 className="text-gray-200 font-semibold ml-2 pt-2">Connections</h1>
          <div className=" gap-4 p-2">
            {data?.connections?.mobs ? (
              data?.connections?.mobs?.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))
            ) : (
              <EmptyState />
            )}
          </div>
        </div>
      </div>
      <div className="flex" >
        <div className="mb-10 w-1/2">
          <h1 className="text-lg text-gray-200 font-semibold m-2">Requests Recieved</h1>
          <div className="grid grid-cols-2 gap-2 p-2">
            {data?.requests?.recieved ? (
              data?.requests?.recieved?.map((request) => (
                <ConnectionRequests key={request.id} request={request} />
              ))
            ) : (
              <EmptyState />
            )}
          </div>
        </div>
        <div className="mb-10 w-1/2">
          <h1 className="text-lg text-gray-200 font-semibold m-2">Request sent</h1>
          <div className="grid grid-cols-2 gap-2 p-2">
            {data?.requests?.sent ? (
              data?.requests?.sent?.map((request) => (
                <ConnectionRequests key={request.id} request={request} />
              ))
            ) : (
              <EmptyState />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTeamCards;

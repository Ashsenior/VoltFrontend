import React from "react";
import TeamCard from "./TeamCard";
import ConnectionRequest from "./ConnectionRequest";
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
    <div className="bg-white rounded-lg mb-10 h-full shadow">
      <h1 className="text-base font-semibold ml-6 pt-6">All members</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {data?.connections?.members ? (
          data?.connections?.members?.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))
        ) : (
          <EmptyState />
        )}
      </div>
      <h1 className="text-base font-semibold ml-6 pt-6">Mobs</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {data?.team?.mobs?.map((member) => (
          <TeamCard key={member.email} member={member} />
        ))}
      </div>
      <h1 className="text-base font-semibold ml-6 pt-6">Connections</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {data?.connections?.mobs ? (
          data?.connections?.mobs?.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))
        ) : (
          <EmptyState />
        )}
      </div>
      <div>
        <div className="mb-10">
          <h1 className="text-xl font-semibold m-2">Request Recieved</h1>
          <div className="m-2">
            {data?.requests?.recieved ? (
              data?.requests?.recieved?.map((request) => (
                <ConnectionRequests key={request.id} request={request} />
              ))
            ) : (
              <EmptyState />
            )}
          </div>
        </div>
        <div className="mb-10">
          <h1 className="text-xl font-semibold m-2">Request sent</h1>
          <div className="m-2">
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

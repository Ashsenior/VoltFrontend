import React from "react";
import TeamCard from "./TeamCard";
import EmptyState from "./empty-state";
import ConnectionRequests from "./ConnectionRequests";
import UpcomingIcon from '@mui/icons-material/Upcoming';

const AllTeamCards = ({ data }) => {
  return (
    <div className="md:p-4 mb-10 mt-4 h-full shadow">
      <div className="mb-4 grid grid-cols-1 md:grid-cols-3 bg-gray-700 rounded-lg p-2">
        <div>
          <h1 className="text-gray-200 font-semibold ml-2 pt-2">Mobs <span className="text-gray-400">aka Admins</span></h1>
          <div className=" gap-4 p-2">
            {data?.team?.mobs?.map((member) => (
              <TeamCard key={member.email} member={member} />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-gray-200 font-semibold ml-2 pt-2">Other Members</h1>
          <div className=" gap-4 p-2">
            {data?.team?.members ? (
              data?.team?.members?.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))
            ) : (
              <EmptyState />
            )}
          </div>
        </div>
        <div>
          <h1 className="text-gray-200 font-semibold ml-2 pt-2">Connections</h1>
          <div className=" gap-4 p-2">
            {data?.team?.connections===[] ? (
              data?.team?.connections?.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))
            ) : (
              <EmptyState />
            )}
          </div>
        </div>
      </div>
      <div className="p-2">     
        <form>
          <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
              <div class="bg-white rounded-t-lg dark:bg-gray-800">
                  <label for="comment" class="sr-only">Your comment</label>
                  <textarea id="comment" rows="4" class="w-full p-4 text-md border-0 bg-gray-900 rounded-t-lg text-white placeholder-gray-400" placeholder="Enter your team members emails (comma seperated)..." required></textarea>
              </div>
              <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                  <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                      Send Invite
                  </button>
              </div>
          </div>
        </form>
        <p class="ml-auto text-xs text-gray-500 dark:text-gray-400">Invited members will get invite mails and will directly be added to the startup.</p>

      </div>
      <div className="bg-purple-500 items-center m-1 text-center justify-center rounded-lg p-8" >
              <h2 className="text-2xl font-semibold pb-4 text-purple-100">Connection Requests , Coming Soon !!!</h2>
              <p className="flex-row text-lg text-white">Find the best filtered and screened startup material people from around the globe.</p>
              <p className="flex-row text-lg text-white">Connect, chat and team up with them to create the next big thing!!</p>
      </div>
      {/*<div className="flex bg-gray-700 rounded-lg p-2" >
        <div className="mb-10 w-1/2">
          <h1 className="text-lg text-gray-200 font-semibold m-2">Requests Recieved</h1>
          <div className="grid grid-cols-2 gap-2 p-2">
            data?.requests?.recieved ? (
              data?.requests?.recieved?.map((request) => (
                <ConnectionRequests key={request.id} request={request} cat={"R"} />
              ))
            ) : (
              <EmptyState />
            )
            <div className="w-full mt-2">
              <label className="flex text-xl justify-center shadow-xl w-full h-24 px-4 transition bg-purple-700 rounded-md ">
                <span className="flex items-center space-x-2">
                  <UpcomingIcon className="text-purple-300" />
                  <span className="text-gray-300">
                    Requests Coming Soon !!!
                  </span>
                </span>
              </label>
            </div>
          </div>
        </div>
        <div className="mb-10 w-1/2">
          <h1 className="text-lg text-gray-200 font-semibold m-2">Request sent</h1>
          <div className="grid grid-cols-2 gap-2 p-2">
            data?.requests?.sent ? (
              data?.requests?.sent?.map((request) => (
                <ConnectionRequests key={request.id} request={request} cat={"S"} />
              ))
            ) : (
              <EmptyState />
            )
            <div className="w-full mt-2">
              <label className="flex text-xl justify-center w-full h-24 px-4 transition bg-gray-900 rounded-md appearance-none focus:outline-none">
                <span className="flex items-center space-x-2">
                  <UpcomingIcon className="text-gray-300" />
                  <span className="text-gray-300">
                    Requests Coming Soon !!!
                  </span>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>*/}
    </div>
  );
};

export default AllTeamCards;

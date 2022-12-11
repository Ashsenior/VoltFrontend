import React from "react";
import LeaderboardTabs from "../../components/leaderboards/tabs";
import SidebarLayout from "src/layouts/SidebarLayout";
import LeaderboardFilter from "../../components/leaderboards/filter";
import LeaderBoardTable from "../../components/leaderboards/table";

const Leaderboards = () => {
  return (
    <div>
      <LeaderboardTabs />
      <LeaderboardFilter />
      <LeaderBoardTable />
    </div>
  );
};

Leaderboards.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Leaderboards;

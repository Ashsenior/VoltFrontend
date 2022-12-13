import React from 'react';
import Footer from "src/components/Footer";
import SidebarLayout from "src/layouts/SidebarLayout";
import AllTeamCards from '../../../components/modules/team/AllTeamCards';
import TeamHeader from '../../../components/modules/team/TeamHeader';


function TeamModule() {
    return (
        <div>
            <TeamHeader></TeamHeader>
            <AllTeamCards></AllTeamCards>
            <Footer />
        </div>
    );
};

TeamModule.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default TeamModule;
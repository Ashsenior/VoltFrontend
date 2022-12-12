import React from 'react';
import Footer from "src/components/Footer";
import SidebarLayout from "src/layouts/SidebarLayout";
import TeamTabs from '../../../../components/modules/team/TeamTabs';


function CreateTeam() {
    return (
        <div>
            <TeamTabs></TeamTabs>
            <Footer />
        </div>
    );
};

CreateTeam.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default CreateTeam;
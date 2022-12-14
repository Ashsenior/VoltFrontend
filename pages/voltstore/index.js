import React from "react";
import SidebarLayout from "src/layouts/SidebarLayout";
import StoreMainTabs from "../../components/voltstore/StoreMainTabs";
import WelcomeHeader from "../../components/voltstore/WelcomeHeader";


const VoltStore = () => {
    return (
        <div>
            <WelcomeHeader />
            <StoreMainTabs />
        </div>
    );
};

VoltStore.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default VoltStore;

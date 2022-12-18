import React from "react";
import SidebarLayout from "src/layouts/SidebarLayout";
import StoreMain from "../../components/voltstore/StoreMain";
import Footer from "src/components/Footer";


const VoltStore = () => {
    return (
        <div className="m-2">
            <StoreMain />
            <Footer />
        </div>
    );
};

VoltStore.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default VoltStore;

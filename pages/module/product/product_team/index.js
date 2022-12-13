import React from "react";
import SidebarLayout from "src/layouts/SidebarLayout";
import Footer from "src/components/Footer";
import TeamHome from "../../../../components/modules/product/TeamHome";


function ProductTeam() {
    return (
        <>
            <TeamHome></TeamHome>
            <Footer />
        </>
    );
};

ProductTeam.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default ProductTeam;

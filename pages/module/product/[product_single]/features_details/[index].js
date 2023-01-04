import Head from "next/head";
import SidebarLayout from "src/layouts/SidebarLayout";
import { Container } from "@mui/material";
import Footer from "src/components/Footer";
import { useRouter } from "next/router";
import axiosInstance from "../../../../../src/axiosAPi";
import { useState } from "react";
import { useEffect } from "react";

function AllTeamMember() {
  const router = useRouter();
  const [features, setFeatures] = useState({});
  console.log(router.query);

  useEffect(() => {
    var access_token = localStorage.getItem("access_token");
    var refresh_token = localStorage.getItem("refresh_token");
    if (access_token && refresh_token) {
      getFeaturesData();
    }
  }, []);
  const getFeaturesData = () => {
    try {
      axiosInstance
        .get(
          `http://127.0.0.1:8000/product/startup/get-feature?feature_key=${router.query.index}`
        )
        .then((response) => {
          if (response?.status == 200) {
            setFeatures(response.data);
          }
        });
    } catch (error) {
      throw error;
    }
  };
  console.log(features?.feature?.title);

  return (
    <>
      <Head>
        <title>Features Details</title>
      </Head>

      <Container maxWidth="lg">
        {/* Product Info */}
        <div className="mt-6">
          <h1 className="text-xl font-semibold">{features?.feature?.title}</h1>
          <h3 className="text-lg font-medium">{features?.feature?.desc}</h3>

          <p>
            Deadline{" "}
            <span className="text-red-300">{features?.feature?.deadline}</span>
          </p>
          <div className="flex items-center gap-2">
            <p>Completed</p>
            <div className="radial-progress" style={{ "--value": 70 }}>
              70%
            </div>
          </div>

          {/* <FeatureTabs></FeatureTabs> */}
        </div>
      </Container>
      <Footer />
    </>
  );
}

AllTeamMember.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default AllTeamMember;

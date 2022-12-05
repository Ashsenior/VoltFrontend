import Head from "next/head";
import SidebarLayout from "src/layouts/SidebarLayout";
import { Container } from "@mui/material";
import Footer from "src/components/Footer";
import EditStrategies from "../../create_strategy/EditStrategies";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axiosInstance from "../../../../src/axiosAPi";

function EditStrategy({ query }) {
  const [strategy, setStrategy] = useState({});
  const [username, setUsername] = useState("");
  const [slug, setSlug] = useState("");
  const router = useRouter();

  useEffect(() => {
    var access_token = localStorage.getItem("access_token");
    var refresh_token = localStorage.getItem("refresh_token");
    if (access_token && refresh_token) {
      getEnrolledStatus();
    }
  }, []);
  const getEnrolledStatus = () => {
    try {
      axiosInstance
        .get("http://127.0.0.1:8000/strategy/startup/get-strategy", {
          params: {
            // username: localStorage.getItem("username"),
            slug: query?.edit_strategy,
          },
        })
        .then((response) => {
          if (response?.status == 200) {
            console.log(response);
            setStrategy(response.data);
            // localStorage.setItem(
            //   "startup_key",
            //   response.data.your_startups?.key
            // );
          }
        });
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    setSlug(query?.edit_strategy);
  }, [query]);

  return (
    <>
      <Head>
        <title>Strategy</title>
      </Head>

      <div className="m-0">
        <EditStrategies strategy={strategy} />
      </div>
      <Footer />
    </>
  );
}

EditStrategy.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default EditStrategy;

EditStrategy.getInitialProps = async ({ query }) => {
  return { query };
};

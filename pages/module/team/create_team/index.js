import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import Footer from "src/components/Footer";
import SidebarLayout from "src/layouts/SidebarLayout";
import TeamTabs from "../../../../components/modules/team/TeamTabs";
import StartupContext from "../../../../context/StartupContext";
import axiosInstance from "../../../../src/axiosAPi";

function CreateTeam() {
  const context = useContext(StartupContext);
  const [team, setTeam] = useState([]);
  const [people, setPeople] = useState({});
  const [username, setUsername] = useState("");
  const router = useRouter();

  useEffect(() => {
    var access_token = localStorage.getItem("access_token");
    var refresh_token = localStorage.getItem("refresh_token");
    if (access_token && refresh_token) {
      console.log("index ", refresh_token);
      getPeoples();
      console.log(localStorage.getItem("startup_key"));
    }
  }, []);

  const getPeoples = () => {
    try {
      axiosInstance
        .get("http://127.0.0.1:8000/team/get-people", {})
        .then((response) => {
          if (response?.status == 200) {
            console.log(response);
            setPeople(response.data);
          }
        });
    } catch (error) {
      throw error;
    }
  };
  return (
    <div>
      <TeamTabs people={people} />
      <Footer />
    </div>
  );
}

CreateTeam.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default CreateTeam;

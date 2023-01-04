import React from "react";
import SidebarLayout from "src/layouts/SidebarLayout";
import Congratualation, {
  TypeAnimation,
} from "../components/animation/congratualation";
import Confetti from "react-confetti";
const Dummy = () => {
  return (
    <>
      <Congratualation className="typeanimation" />
      <Confetti width={1000} height={1000} numberOfPieces={150} />
    </>
  );
};

Dummy.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Dummy;

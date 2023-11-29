import React, { useEffect } from "react";
import { Header, Slider } from "../../Components";
import * as apis from "../../apis";

function Home() {
  useEffect(() => {
    const fetchDataHome = async () => {
      const response = await apis.getHome();
      console.log(response);
    };
    fetchDataHome();
  }, []);
  return (
    <div className="overflow-y-auto w-full">
    <div className="h-[70px] px-[50px] flex items-center">
      <Header/>
    </div>
      <Slider />
    </div>
  );
}

export default Home;

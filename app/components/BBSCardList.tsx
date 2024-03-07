import React from "react";
import BBSCard from "./BBSCard";
import { BBSData } from "../types/types";

interface BBSDataAllProps {
  bbsAllData: BBSData[];
}

const BBSCardList = (props: BBSDataAllProps) => {
  const { bbsAllData } = props;
  return (
    <div className="grid lg:grid-cols-3 p-4 gap-4">
      {bbsAllData.map((bbsData: BBSData) => (
        <BBSCard key={bbsData.id} bbsData={bbsData} />
      ))}
    </div>
  );
};

export default BBSCardList;

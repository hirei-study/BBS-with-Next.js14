import { BBSData } from "@/app/types/types";
import Link from "next/link";
import React from "react";

const getDetaiBBS = async (id: number) => {
  const res = await fetch(`http://localhost:3000/api/post/${id}`, {
    cache: "no-store",
  });

  const bbsDetailData: BBSData = await res.json();
  // console.log("bbsAllData: ", bbsAllData);
  return bbsDetailData;
};

const BBSDetailPage = async ({ params }: { params: { bbsId: number } }) => {
  const bbsDetailData = await getDetaiBBS(params.bbsId);
  //   console.log("bbsDetailData: ", bbsDetailData);

  return (
    <div className="mx-auto max-w-4xl p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{bbsDetailData.title}</h1>
        <p className="text-gray-600">{bbsDetailData.username}</p>
      </div>

      <div className="mb-8">
        <p className="text-gray-900">{bbsDetailData.content}</p>
      </div>

      <Link
        href={"/"}
        className="bg-blue-500 text-white font-bold rounded-md px-4 py-2"
      >
        戻る
      </Link>
    </div>
  );
};

export default BBSDetailPage;

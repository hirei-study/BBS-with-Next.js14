import BBSCardList from "./components/BBSCardList";
import { BBSData } from "./types/types";

const getBBSAllData = async () => {
  const res = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });

  const bbsAllData: BBSData[] = await res.json();
  // console.log("bbsAllData: ", bbsAllData);
  return bbsAllData;
};

export default async function Home() {
  const bbsAllData = await getBBSAllData();

  return (
    <main>
      <BBSCardList bbsAllData={bbsAllData} />
    </main>
  );
}

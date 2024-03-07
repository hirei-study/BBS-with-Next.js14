import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { BBSData } from "../types/types";

interface BBSDataProps {
  bbsData: BBSData;
}

const BBSCard = (props: BBSDataProps) => {
  const { bbsData } = props;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{bbsData.title}</CardTitle>
        <CardDescription>{bbsData.username}</CardDescription>
      </CardHeader>
      <CardContent>{bbsData.content}</CardContent>
      <CardFooter className="flex justify-between">
        <Link href={`/bbs-posts/${bbsData.id}`} className="text-blue-500">
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BBSCard;

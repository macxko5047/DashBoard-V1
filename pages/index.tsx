import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import axios from "axios";
const prisma = new PrismaClient();

const inter = Inter({ subsets: ["latin"] });

export default function Home({ datas }: any) {
  const [dataAll, setDataAll] = useState<any>([]);
  console.log("dataAll", dataAll);
  useEffect(() => {
    const FetchData = async () => {
      // let headersList = {
      //   Authorization: "qwertyuiopasdw:password-tit-api-forfree",
      //   apikey: "qwertyuiopasdw:password-tit-api-forfree",
      // };

      let reqOptions = {
        url: "/api/posts",
        method: "GET",
        // headers: headersList,
      };

      let res = await axios.request(reqOptions);

      if (res.data) {
        // console.log(res.data);
        setDataAll(res.data);
      }
    };
    FetchData();
    setInterval(FetchData, 10000);
  }, []);

  return (
    <main>
      <div>
        <p>Get started by editing&nbsp;</p>
        <p>Get API Prisma 1&nbsp;</p>

        <ul>
          {dataAll.map(
            (res: {
              Work_order_id: string;
              PD_key: string;
              Item_number: string;
              OK_qty: number;
            }) => (
              <li key={res.PD_key}>
                {res.PD_key} {res.Work_order_id} {res.Item_number} {res.OK_qty}
              </li>
            )
          )}
        </ul>

        <p>Get API Prisma 2.&nbsp;</p>

        <ul>
          {datas.map(
            (res: {
              Work_order_id: string;
              PD_key: string;
              Item_number: string;
              OK_qty: number;
            }) => (
              <li key={res.PD_key}>
                {res.PD_key} {res.Work_order_id} {res.Item_number} {res.OK_qty}
              </li>
            )
          )}
        </ul>
      </div>
    </main>
  );
}

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

export async function getServerSideProps(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Fetch data from external API
  const posts = await prisma.production_history.findMany();
  console.log(posts);

  const datas = JSON.parse(JSON.stringify(posts));

  // Pass data to the page via props
  return { props: { datas } };
}

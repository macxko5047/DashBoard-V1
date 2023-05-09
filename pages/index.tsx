import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Hearders from "./compoment/hearder";
import ContentBody from "./compoment/contentbody";
import Table_leder from "./compoment/table_leder";

// const prisma = new PrismaClient();

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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
    // setInterval(FetchData, 10000);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} padding={1}>
        <Grid item xs={12}>
          <Hearders />
        </Grid>

        <Grid item xs={6}>
          <Item>
            <ContentBody />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item sx={{ height: "100%" }}>
            <Table_leder />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

// (BigInt.prototype as any).toJSON = function () {
//   return this.toString();
// };

// export async function getServerSideProps(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   // Fetch data from external API
//   const posts = await prisma.production_history.findMany();
//   console.log(posts);

//   const datas = JSON.parse(JSON.stringify(posts));

//   // Pass data to the page via props
//   return { props: { datas } };
// }

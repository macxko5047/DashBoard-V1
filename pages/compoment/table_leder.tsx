import React from "react";
import Box from "@mui/material/Box";

type Props = {};

import { GridColDef, DataGrid } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  {
    field: "first",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    width: 140,
  },
  {
    field: "last",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    width: 140,
  },
];

const rows = [
  {
    id: 1,
    first: "Jane",
    last: "Carter",
  },
  {
    id: 2,
    first: "Jack",
    last: "Smith",
  },
  {
    id: 3,
    first: "Gill",
    last: "Martin",
  },
];

const table_leder = (props: Props) => {
  return (
    <Box
      sx={{
        height: 300,
        width: "100%",
        "& .super-app-theme--header": {
          backgroundColor: "rgba(255, 7, 0, 0.55)",
        },
      }}
    >
      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
};

export default table_leder;

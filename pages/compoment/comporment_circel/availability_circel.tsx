import React, { useEffect, useState } from "react";
import Box from "@mui/joy/Box";
import CircularProgress from "@mui/joy/CircularProgress";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
export default function CircularProgressChildren() {
  const [data, setdata] = useState<any>(50);
  return (
    <Box
      sx={{ display: "flex", gap: 2, alignItems: "center", flexWrap: "wrap" }}
    >
      <CircularProgress
        sx={{
          "--CircularProgress-size": "100px",
          "--CircularProgress-trackThickness": "15px",
          "--CircularProgress-progressThickness": "15px",
        }}
        color="success"
        determinate
        value={data}
      >
        <Stack direction="column" spacing={0.5}>
          <Typography sx={{ fontWeight: "bold" }}>65%</Typography>
          <Typography sx={{ fontWeight: "bold" }}>Ava</Typography>
        </Stack>
      </CircularProgress>
    </Box>
  );
}

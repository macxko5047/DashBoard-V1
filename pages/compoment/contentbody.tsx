import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import PerformanceCircel from "./comporment_circel/preformance_circel";
import Ava from "./comporment_circel/availability_circel";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
type Props = {};

const contentbody = (props: Props) => {
  const [productionFroup, setProductionFroup] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const handleChangeProductionGroup = (event: SelectChangeEvent) => {
    setProductionFroup(event.target.value);
  };
  const handleChangePosition = (event: SelectChangeEvent) => {
    setPosition(event.target.value);
  };
  const handleChangeStatus = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        {/* --------------------------row 1---------------------------- */}
        <Grid item xs={6}>
          <Item sx={{ bgcolor: "#DCDCDC" }}>
            <Stack
              direction="row"
              spacing={1}
              sx={{ justifyContent: "center" }}
            >
              <Typography sx={{ fontSize: 22 }}>Production Group : </Typography>
              <FormControl sx={{ minWidth: 150 }}>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={productionFroup}
                  onChange={handleChangeProductionGroup}
                  autoWidth
                  sx={{ height: 35 }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Twenty</MenuItem>
                  <MenuItem value={21}>Twenty one</MenuItem>
                  <MenuItem value={22}>Twenty one and a half</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item sx={{ bgcolor: "#DCDCDC" }}>
            <Stack
              direction="row"
              spacing={1}
              sx={{ justifyContent: "center" }}
            >
              <Typography sx={{ fontSize: 22 }}>Position : </Typography>
              <FormControl sx={{ minWidth: 150 }}>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={position}
                  onChange={handleChangePosition}
                  autoWidth
                  sx={{ height: 35 }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Twenty</MenuItem>
                  <MenuItem value={21}>Twenty one</MenuItem>
                  <MenuItem value={22}>Twenty one and a half</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Item>
        </Grid>
        {/* --------------------------row 2---------------------------- */}
        <Grid item xs={12}>
          <Stack direction="row" spacing={1}>
            <Box sx={{ width: 1 }}>
              <Stack direction="column" spacing={0.5}>
                <Item sx={{ bgcolor: "#87CEFA", width: 1 }}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Total Prod Unit : XXX
                  </Typography>
                </Item>
                <Item sx={{ bgcolor: "#87CEFA", width: 1 }}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Total Manp : XX Person
                  </Typography>
                </Item>
              </Stack>
            </Box>
            <Box sx={{ width: 1 }}>
              <Stack direction="column" spacing={0.5}>
                <Item sx={{ bgcolor: "#F4A460", width: 1 }}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Active Prod Unit : XX
                  </Typography>
                </Item>
                <Item sx={{ bgcolor: "#F4A460", width: 1 }}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Active Manp : 37 Manp
                  </Typography>
                </Item>
              </Stack>
            </Box>
            <Box sx={{ width: 1 }}>
              <Item
                sx={{
                  bgcolor: "#DCDCDC",

                  height: 1,
                }}
              >
                <Stack direction="column" spacing={0.5}>
                  <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                    Status
                  </Typography>
                  <FormControl sx={{ minWidth: 150 }}>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={status}
                      onChange={handleChangeStatus}
                      autoWidth
                      sx={{ height: 35 }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"Nomal"}>Nomal</MenuItem>
                      <MenuItem value={"ABnormall"}>ABnormall</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Item>
            </Box>
          </Stack>
        </Grid>
        {/* --------------------------row 3---------------------------- */}
        <Grid item xs={12}>
          <Item>
            <PerformanceCircel />
            <Ava />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default contentbody;

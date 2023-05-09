import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
type Props = {};
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const hearder = (props: Props) => {
  const date = new Date();
  // console.log("date", date);

  let day = String(date.getDate()).padStart(2, "0");
  // console.log("day", day);

  let month = String(date.getMonth() + 1).padStart(2, "0");
  let year = date.getFullYear();

  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate: any = `${year}-${month}-${day}`;
  //   console.log(currentDate);
  const [valueStart, setValueStart] = useState<Dayjs | null>(
    dayjs(currentDate)
  );
  const [valueEnd, setValueEnd] = useState<Dayjs | null>(dayjs(currentDate));
  //   console.log("valueEnd", dayjs(valueEnd).format("YYYY-MM-DD"));

  return (
    <Box>
      <Grid container sx={{ flexGrow: 1 }}>
        <Grid item xs={4}>
          <Item sx={{ bgcolor: "#6699FF", p: 1 }}>
            <Typography
              variant="h4"
              sx={{
                height: 60,
                fontFamily: "monospace",
                fontWeight: 1000,
                p: 1,
                color: "white",
              }}
            >
              Production Monitoring
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item sx={{ bgcolor: "#DCDCDC" }}>
            <Stack
              direction="row"
              spacing={1}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box>
                <Typography variant="h5" sx={{ height: 60, p: 1 }}>
                  Production Date : {currentDate}{" "}
                </Typography>
              </Box>
              <Box>
                <Stack direction="row" spacing={1}>
                  <Typography variant="h5" sx={{ p: 1 }}>
                    Customize Date :
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      sx={{}}
                      label="Start"
                      value={valueStart}
                      onChange={(newValue) => setValueStart(newValue)}
                    />
                  </LocalizationProvider>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      sx={{}}
                      label="End"
                      value={valueEnd}
                      onChange={(newValue) => setValueEnd(newValue)}
                    />
                  </LocalizationProvider>
                </Stack>
              </Box>
            </Stack>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default hearder;

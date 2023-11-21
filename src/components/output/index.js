import { Paper, Typography } from "@mui/material";

const Output = ({ text, type }) => (
  <Paper sx={{ p: 2, height: "100%" }} height="100%">
    {text.split("\n").map((i, key) => {
      return <Typography key={key}>{i}</Typography>;
    })}
  </Paper>
);
export { Output };

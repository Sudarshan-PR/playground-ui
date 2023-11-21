import { Box, Paper, Typography } from "@mui/material";
import { Playground } from "../../components/playground";

const HomePage = () => {
  return (
    <Box padding={2} maxHeight="100%">
      <Paper sx={{ p: 1.5, mb: 1.5 }}>
        <Typography variant="h5"> Playground </Typography>
      </Paper>
      <Playground />
    </Box>
  );
};
export { HomePage };

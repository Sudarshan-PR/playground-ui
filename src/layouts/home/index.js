import { Box, Paper, Stack, Typography } from "@mui/material";
import TerminalIcon from "@mui/icons-material/Terminal";
import { Playground } from "../../components/playground";

const HomePage = () => {
  return (
    <Box padding={2} maxHeight="100%">
      <Paper sx={{ p: 2, mb: 2 }}>
        <Stack direction="row" spacing={1.5} alignContent="center">
          <Typography
            variant="h4"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <TerminalIcon fontSize="large" />
          </Typography>
          <Typography variant="h4">Playground</Typography>
        </Stack>
      </Paper>
      <Paper elevation={0} sx={{ p: 2, mt: 2 }}>
        <Playground />
      </Paper>
    </Box>
  );
};
export { HomePage };

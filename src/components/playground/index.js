import { Button, Grid, Stack } from "@mui/material";
import { CodeEditor } from "../codeEditor";
import { Output } from "../output";

const Playground = () => (
  <>
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <CodeEditor />
      </Grid>
      <Grid item xs={4}>
        <Stack height="100%" spacing={2}>
          <Button variant="contained">Compile</Button>
          <Output />
        </Stack>
      </Grid>
    </Grid>
  </>
);

export { Playground };

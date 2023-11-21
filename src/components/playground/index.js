import {
  Button,
  Grid,
  Stack,
  CircularProgress,
  Typography,
  Snackbar,
} from "@mui/material";
import { CodeEditor } from "../codeEditor";
import { Output } from "../output";
import { useEffect, useState } from "react";
import { compileCode, getUserID, base_url_ws } from "../../utils";
import useWebSocket from "react-use-websocket";

const Playground = () => {
  const [language, setLanguage] = useState("go");
  const [code, setCode] = useState("// some comment");
  const [compiling, setCompiling] = useState(false);
  const [output, setOutput] = useState("Compile to get output");
  // const [outputType, setOutputType] = useState("success");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const userid = getUserID();

  const WS_URL = `${base_url_ws}/ws?user=${userid}`;
  const { lastJsonMessage } = useWebSocket(WS_URL, {
    share: false,
    shouldReconnect: () => true,
    retryOnError: true,
  });

  // Run when a new WebSocket message is received (lastJsonMessage)
  useEffect(() => {
    onNotification(lastJsonMessage);
  }, [lastJsonMessage]);

  const onNotification = (val) => {
    console.log("Output Received: ", val);
    if (val !== null) {
      setCompiling(false);
      setOutput(val.output);
      if (val.type !== "success") {
        setOpenSnackbar(true);
      }
    }
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const onCodeChange = (val) => {
    setCode(val);
  };

  const onLanguageChange = (val) => {
    setLanguage(val.value);
  };

  const onQueued = (data) => {
    console.log(data);
    setCompiling(true);
  };
  const onQueuedError = (data) => {
    console.log(data);
  };

  const onCompile = () => {
    const data = { code, language, userid };

    compileCode(data, onQueued, onQueuedError);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <CodeEditor
            code={code}
            onCodeChange={onCodeChange}
            onLanguageChange={onLanguageChange}
            language={language}
            theme="pastels-on-dark"
          />
        </Grid>
        <Grid item xs={4}>
          <Stack height="100%" spacing={2}>
            <Button
              color={compiling ? "info" : "primary"}
              id="compile-button"
              variant="contained"
              onClick={onCompile}
              sx={{ maxHeight: 50, height: 50 }}
            >
              {compiling ? (
                <CircularProgress color="inherit" size="1.5rem" />
              ) : (
                <Typography fontSize="1rem">Compile</Typography>
              )}
            </Button>
            <Output text={output} />
          </Stack>
        </Grid>
      </Grid>
      <Snackbar
        open={openSnackbar}
        message="Error occured while execution."
        onClose={handleSnackbarClose}
      />
    </>
  );
};

export { Playground };

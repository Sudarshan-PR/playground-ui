import { Button, Grid, Stack } from "@mui/material";
import { CodeEditor } from "../codeEditor";
import { Output } from "../output";
import { useState } from "react";
import { compileCode } from "../../utils";

const Playground = () => {
  const [language, setLanguage] = useState("go");
  const [code, setCode] = useState("// some comment");

  const onCodeChange = (val) => {
    setCode(val);
  };

  const onLanguageChange = (val) => {
    setLanguage(val.value);
  };

  const onQueued = (data) => {
    console.log(data);
  };
  const onQueuedError = (data) => {
    console.log(data);
  };

  const onCompile = () => {
    const data = { code, language };

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
            theme="spacecadet"
          />
        </Grid>
        <Grid item xs={4}>
          <Stack height="100%" spacing={2}>
            <Button id="compile-button" variant="contained" onClick={onCompile}>
              Compile
            </Button>
            <Output />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export { Playground };

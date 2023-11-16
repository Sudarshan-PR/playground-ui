import { useState } from "react";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import monacoThemes from "monaco-themes/themes/themelist";

// import useKeyPress from "../hooks/useKeyPress";
// import Footer from "./Footer";
// import LanguagesDropdown from "./LanguagesDropdown";

import { CodeEditorTextBox } from "../codeEditorTextBox";
import { languageOptions } from "./languages";
import Dropdown from "../dropdown";
import { defineTheme } from "../codeEditorTextBox/themes";
import { Box, Stack } from "@mui/material";

const javascriptDefault = `// some comment`;

const monacoThemesList = Object.keys(monacoThemes).map((theme, idx) => ({
  id: idx,
  themeid: theme,
  label: monacoThemes[theme],
  value: monacoThemes[theme],
}));

const CodeEditor = () => {
  const [code, setCode] = useState(javascriptDefault);
  const [theme, setTheme] = useState(
    monacoThemesList.find((th) => th.themeid === "clouds-midnight")
  );
  const [language, setLanguage] = useState(languageOptions[0]);

  defineTheme(theme);
  const onLanguageChange = (event) => {
    console.log("selected option language: ", event.target);
    setLanguage(event.target.value);
  };

  const onThemeChange = (event) => {
    console.log("selected option theme: ", event.target);
    const th = event.target.value;
    if (["light", "vs-dark"].includes(th.value)) {
      setTheme(th);
    } else {
      defineTheme(th).then((_) => setTheme(th));
    }
  };

  const onChange = (action, data) => {
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };

  const handleCompile = () => {
    // We will come to the implementation later in the code
  };

  return (
    <>
      <Stack direction="row" spacing={2} p={1}>
        <Dropdown
          label="Language"
          default_option={language}
          options={languageOptions}
          onSelectChange={onLanguageChange}
        />
        <Dropdown
          label="Theme"
          default_option={theme}
          options={monacoThemesList}
          onSelectChange={onThemeChange}
        />
      </Stack>
      <Box>
        <CodeEditorTextBox
          code={code}
          onChange={onChange}
          language={language?.value}
          theme={theme}
        />
      </Box>
    </>
  );
};
export { CodeEditor };

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

const monacoThemesList = Object.keys(monacoThemes).map((theme) => ({
  themeid: theme,
  label: monacoThemes[theme],
  value: monacoThemes[theme],
}));

const CodeEditor = ({
  onCodeChange,
  onLanguageChange,
  onThemeChange,
  code,
  theme,
  language,
}) => {
  const [codeDefault, setCodeDefault] = useState(code || javascriptDefault);
  const [themeDefault, setTheme] = useState(
    monacoThemesList.find((th) => th.themeid === (theme || "pastels-on-dark"))
  );
  const [languageDefault, setLanguage] = useState(
    languageOptions.find((lang) => lang.value === (language || "javascript"))
  );

  defineTheme(themeDefault);
  const onLanguageChangeDefault = (event) => {
    const lang = JSON.parse(event.target.value);
    setLanguage(lang);
    if (onLanguageChange) {
      onLanguageChange(lang);
    }
  };

  const onThemeChangeDefault = (event) => {
    const th = JSON.parse(event.target.value);
    if (["light", "vs-dark"].includes(th.value)) {
      setTheme(th);
    } else {
      defineTheme(th).then((_) => setTheme(th));
    }
    if (onThemeChange) {
      onThemeChange(th);
    }
  };

  const onCodeChangeDefault = (data) => {
    if (onCodeChange) {
      onCodeChange(data);
      return;
    }
    setCodeDefault(data);
  };

  return (
    <>
      <Stack direction="row" spacing={2} p={1}>
        <Dropdown
          label="Language"
          value={languageDefault}
          options={languageOptions}
          onSelectChange={onLanguageChangeDefault}
        />
        <Dropdown
          label="Theme"
          value={themeDefault}
          options={monacoThemesList}
          onSelectChange={onThemeChangeDefault}
        />
      </Stack>
      <Box>
        <CodeEditorTextBox
          code={codeDefault}
          onChange={onCodeChangeDefault}
          language={languageDefault.value}
          theme={themeDefault}
        />
      </Box>
    </>
  );
};
export { CodeEditor };

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          type: "light",
          primary: {
            main: "#fafafa",
          },
          secondary: {
            main: "#26a27b",
          },
        }
      : {
          type: "dark",
          primary: {
            main: "#26a27b",
          },
          secondary: {
            main: "#fafafa",
          },
        }),
  },
});
export { getDesignTokens };

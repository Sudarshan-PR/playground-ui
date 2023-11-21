// https://colorhunt.co/palette/2c33332e4f4f0e8388cbe4de
const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          type: "light",
          primary: {
            light: "#93b1db",
            dark: "#0c1d36",
            main: "#1D3557",
            contrastText: "#e4e6eb",
          },
          secondary: {
            light: "#f5e8e6",
            dark: "#a34e41",
            main: "#F5CAC3",
            contrastText: "#050505",
          },
        }
      : {
          type: "dark",
          primary: {
            main: "#CBE4DE",
            light: "#e6edeb",
            dark: "#a6bdb7",
            contrastText: "#000000",
          },
          secondary: {
            main: "#E4CBD1",
            light: "#e3d5d9",
            dark: "#b09ba0",
            contrastText: "#0D0D14",
          },
          background: {
            default: "#2C3333",
            paper: "#2E4F4F",
          },
          text: {
            primary: "#EBEBEE",
            secondary: "#C1C1C1",
          },
          devider: "#2E4F4F",
        }),
  },
});
export { getDesignTokens };

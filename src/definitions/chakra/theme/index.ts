import { extendTheme } from "@chakra-ui/react";
import { config, styles } from "./config";

const theme = extendTheme({
    config: config,
    ...styles,
});

export default theme;

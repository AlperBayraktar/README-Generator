import { type ThemeConfig, ThemeOverride } from "@chakra-ui/react";
import { StepsStyleConfig } from "chakra-ui-steps";

type GlobalStyles = Pick<ThemeOverride, "styles">;

const CustomSteps = {
    ...StepsStyleConfig,
    baseStyle: (props: any) => {
        return {
            ...StepsStyleConfig.baseStyle(props),
            label: {
                ...StepsStyleConfig.baseStyle(props).label,
                color: "#ffffff",
            },
        };
    },
};

const styles: GlobalStyles = {
    styles: {
        global: {
            body: {
                backgroundColor: "gray.800",
                color: "white",
            },
        },
    },
    fontWeights: {
        bold: 500,
        extrabold: 600,
        black: 700,
    },
    components: {
        Steps: CustomSteps,
        Button: {
            baseStyle: {
                whiteSpace: "normal",
            },
        },
    },
    Alert: {
        variants: {
            toast: {
                container: {
                    color: "gray.50",
                    bg: "red.500",
                },
            },
        },
    },
} as GlobalStyles;

const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
};

export { config, styles };

import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@definitions/chakra/theme";
import "@styles/global.scss";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <ChakraProvider theme={theme}>
            <>
                <Head>
                    <title>README Generator</title>
                </Head>
                <Component {...pageProps} />
            </>
        </ChakraProvider>
    );
}

export default appWithTranslation(MyApp);

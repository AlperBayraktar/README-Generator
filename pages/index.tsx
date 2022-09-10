import {
    Stack,
    Flex,
    Text,
    VStack,
    Button as ChakraButton,
    useBreakpointValue,
    Heading,
    Link,
} from "@chakra-ui/react";
import Button from "@components/Button";
import NextLink from "next/link";
import getLanguageProps from "@components/helpers/getLanguageProps";
import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import LanguagePicker from "@components/languagePicker";

const Index: NextPage = () => {
    const { t } = useTranslation("index");
    return (
        /* 
        THIS BACKGROUND WAS GENERATED USING SVGBACKGROUNDS (https://www.svgbackgrounds.com/)
        CREATIVE COMMONS LICENSE: https://creativecommons.org/licenses/by/4.0/deed.en
        LICENSE PAGE OF THE SVGBACKGROUNDS: https://www.svgbackgrounds.com/license/
        */

        <Flex
            w={"full"}
            h={"100vh"}
            background={"url(images/IndexBackground.svg)"}
            backgroundSize={"cover"}
            backgroundPosition={"center center"}
        >
            <p
                style={{
                    position: "absolute",
                    bottom: "2px",
                    left: "2px",

                    fontSize: "0.875rem",
                    fontFamily: "Monospace, courier",
                }}
            >
                {t("backgroundImageBy")}{" "}
                <Link
                    href="https://www.svgbackgrounds.com/"
                    color="blue.200"
                    target="_blank"
                >
                    svgbackgrounds.com
                </Link>{" "}
                (
                <Link
                    href="https://www.svgbackgrounds.com/license/"
                    color="blue.200"
                    target="_blank"
                >
                    {t("license")}
                </Link>
                )
            </p>
            <LanguagePicker />
            <VStack
                w={"full"}
                justify={"center"}
                px={useBreakpointValue({ base: 4, md: 8 })}
            >
                <Stack maxW={"3xl"} align={"flex-start"} spacing={7}>
                    <Heading
                        margin={0}
                        as="h1"
                        size="4xl"
                        fontWeight={700}
                        color="green.400"
                        className="typewriter"
                    >
                        README Generator
                    </Heading>
                    <Text
                        fontWeight={600}
                        lineHeight={1.2}
                        fontSize={useBreakpointValue({
                            base: "3xl",
                            md: "4xl",
                        })}
                    >
                        {t("description")}
                    </Text>
                    <Stack direction={"row"}>
                        <NextLink href="/wizard">
                            <>
                                <Button width={250} rounded="full">
                                    {t("letsStart")}
                                </Button>
                            </>
                        </NextLink>

                        <NextLink href="/info">
                            <ChakraButton
                                bg={"whiteAlpha.300"}
                                rounded={"full"}
                                width={250}
                                _hover={{ bg: "whiteAlpha.500" }}
                            >
                                {t("showMore")}
                            </ChakraButton>
                        </NextLink>
                    </Stack>
                </Stack>
            </VStack>
        </Flex>
    );
};

export const getStaticProps = getLanguageProps(["index"]);
export default Index;

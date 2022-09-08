import React from "react";
import {
    Container,
    Text,
    Link as ChakraLink,
    Heading,
    Flex,
    Avatar,
    Image,
    HStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Trans } from "react-i18next";

interface IProjectInfo {
    containerFooter: JSX.Element;
    t: any;
}

const ProjectInfo: React.FC<IProjectInfo> = ({ containerFooter, t }) => {
    return (
        <Container>
            <Flex columnGap={2}>
                <Avatar
                    name="Alper Bayraktar"
                    width="5.8rem"
                    height="5.8rem"
                    src="https://avatars.githubusercontent.com/u/85285027"
                />
                <Container>
                    <Heading fontSize="2xl" mb={3}>
                        {t("aboutProject.title")}
                    </Heading>
                    <Text>
                        <Trans
                            t={t}
                            i18nKey="aboutProject.description"
                            values={{ name: "Alper Bayraktar" }}
                            components={{
                                chakralink: (
                                    <ChakraLink
                                        href="https://github.com/AlperBayraktar"
                                        color="blue.200"
                                        target="_blank"
                                    />
                                ),
                            }}
                        />
                    </Text>
                </Container>
            </Flex>
            <Heading fontSize="2xl" mt={5} mb={2}>
                Tech Stack
            </Heading>
            <HStack spacing={3}>
                <NextLink href="https://nextjs.org/" passHref>
                    <ChakraLink target="_blank">
                        <Image
                            src="https://nextjs.org/static/favicon/favicon.ico"
                            width="40px"
                            height="40px"
                            title="Next.js"
                            alt="Next.js"
                        />
                    </ChakraLink>
                </NextLink>

                <NextLink href="https://chakra-ui.com/" passHref>
                    <ChakraLink target="_blank">
                        <Image
                            src="https://chakra-ui.com/favicon.png"
                            width="40px"
                            height="40px"
                            title="Chakra UI"
                            alt="Chakra UI"
                        />
                    </ChakraLink>
                </NextLink>

                <NextLink href="https://reactjs.org/" passHref>
                    <ChakraLink target="_blank">
                        <Image
                            src="https://reactjs.org/favicon.ico"
                            width="40px"
                            height="40px"
                            title="React.js"
                            alt="React.js"
                        />
                    </ChakraLink>
                </NextLink>
            </HStack>

            <Heading fontSize="2xl" mt={5} mb={2}>
                GitHub Repo
            </Heading>
            <NextLink
                href="https://github.com/AlperBayraktar/ReadmeGenerator"
                passHref
            >
                <ChakraLink target="_blank">
                    <Image
                        src="https://github.githubassets.com/favicons/favicon-dark.svg"
                        width="40px"
                        height="40px"
                        title="Github"
                        alt="Github"
                    />
                </ChakraLink>
            </NextLink>

            {containerFooter}
        </Container>
    );
};

export default ProjectInfo;

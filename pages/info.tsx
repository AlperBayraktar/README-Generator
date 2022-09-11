import getLanguageProps from "@components/helpers/getLanguageProps";
import { useState } from "react";
import { NextPage } from "next";
import NextLink from "next/link";
import {
    Container,
    Heading,
    Flex,
    Link as ChakraLink,
    Divider,
    Button,
} from "@chakra-ui/react";
import InfoChoiceContainer from "@components/info";
import UsageInfo from "@components/info/usageInfo";
import ProjectInfo from "@components/info/projectInfo";
import { useTranslation } from "next-i18next";
import { ButtonProps } from "@chakra-ui/button/src/button";

const GhostButton: React.FC<ButtonProps> = (props) => {
    return (
        <Button colorScheme="blue" variant="ghost" {...props}>
            {props.children}
        </Button>
    );
};

const InfoContainersFooter = ({ t, setInfoChoice }: any) => (
    <Flex height="2rem" alignItems="center" mt={2}>
        <NextLink href="/" passHref>
            <ChakraLink>
                <GhostButton>{t("goHome")}</GhostButton>
            </ChakraLink>
        </NextLink>

        <Divider orientation="vertical" />

        <NextLink href="/wizard" passHref>
            <ChakraLink>
                <GhostButton>{t("goToWizard")}</GhostButton>
            </ChakraLink>
        </NextLink>
        <Divider orientation="vertical" />

        <NextLink href="/info" passHref>
            <ChakraLink>
                <GhostButton onClick={() => setInfoChoice("NOT_CHOOSEN")}>
                    {t("goBack")}
                </GhostButton>
            </ChakraLink>
        </NextLink>
    </Flex>
);

const Info: NextPage = () => {
    const { t } = useTranslation("info");

    const [infoChoice, setInfoChoice] = useState<
        "NOT_CHOOSEN" | "USAGE" | "PROJECT"
    >("NOT_CHOOSEN");

    return (
        <Flex
            w={"full"}
            h={"100vh"}
            alignItems="center"
            justifyContent="center"
        >
            <Container
                borderWidth="1px"
                borderColor="gray.700"
                borderRadius="8px"
                p={8}
                minWidth={infoChoice === "NOT_CHOOSEN" ? "md" : "60%"}
            >
                <Heading fontSize="5xl" textAlign="center" pb={8}>
                    {t("title")}
                </Heading>

                {infoChoice === "NOT_CHOOSEN" && (
                    <InfoChoiceContainer setInfoChoice={setInfoChoice} t={t} />
                )}
                {infoChoice === "USAGE" && (
                    <UsageInfo
                        containerFooter={
                            <InfoContainersFooter
                                t={t}
                                setInfoChoice={setInfoChoice}
                            />
                        }
                    />
                )}
                {infoChoice === "PROJECT" && (
                    <ProjectInfo
                        containerFooter={
                            <InfoContainersFooter
                                t={t}
                                setInfoChoice={setInfoChoice}
                            />
                        }
                        t={t}
                    />
                )}
            </Container>
        </Flex>
    );
};

export const getStaticProps = getLanguageProps(["info"]);
export default Info;

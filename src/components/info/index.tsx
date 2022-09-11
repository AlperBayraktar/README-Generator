import React from "react";
import NextLink from "next/link";
import {
    Container,
    Text,
    VStack,
    Link as ChakraLink,
    Button,
} from "@chakra-ui/react";

interface IInfoChoiceContainer {
    setInfoChoice: Function;
    t: any;
}

const InfoChoiceContainer: React.FC<IInfoChoiceContainer> = ({
    setInfoChoice,
    t,
}) => {
    return (
        <Container>
            <VStack spacing={5}>
                <Text fontSize="2xl">{t("iWantToLearnAbout")}</Text>
                <Button
                    onClick={() => {
                        setInfoChoice("USAGE");
                    }}
                    disabled
                    title={t("comingSoon")}
                >
                    {t("usingReadmeGenerator")}
                </Button>
                <Button
                    onClick={() => {
                        setInfoChoice("PROJECT");
                    }}
                >
                    {t("projectAsDeveloper")}
                </Button>
                <NextLink href="/" passHref>
                    <ChakraLink>
                        <Button variant="ghost" _hover={{ bg: "" }}>
                            {t("goBack")}
                        </Button>
                    </ChakraLink>
                </NextLink>
            </VStack>
        </Container>
    );
};

export default InfoChoiceContainer;

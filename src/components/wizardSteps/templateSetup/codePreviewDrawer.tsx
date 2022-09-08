import React, { useEffect, useState } from "react";
import {
    Heading,
    Flex,
    Container,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    useToast,
    Alert,
    AlertIcon,
} from "@chakra-ui/react";
import Button from "@components/Button";
interface ICodePreviewDrawer {
    disclosure: any;
    markdownCode: Object;
}

const CodePreviewDrawer: React.FC<ICodePreviewDrawer> = ({
    disclosure,
    markdownCode,
}) => {
    const copiedToast = useToast();
    const [isCopyButtonDisabled, setIsCopyButtonDisabled] =
        useState<boolean>(false);

    const markdownCodeToHTML: string = Object.values(markdownCode)
        .map((code: string) => code.replace("\n", "<br />"))
        .join("<br />");

    useEffect(() => {
        if (markdownCodeToHTML.replaceAll("<br />", "") === "") {
            setIsCopyButtonDisabled(true);
        } else {
            setIsCopyButtonDisabled(false);
        }
    }, [markdownCodeToHTML]);

    return (
        <Drawer
            onClose={disclosure.onClose}
            isOpen={disclosure.isOpen}
            size="lg"
        >
            <DrawerOverlay />
            <DrawerContent backgroundColor="gray.700" color="white">
                <DrawerCloseButton />
                <DrawerHeader>
                    <Heading fontSize={"4xl"} textAlign="center">
                        Generated Markdown
                    </Heading>
                </DrawerHeader>
                <DrawerBody>
                    {markdownCodeToHTML.replaceAll("<br />", "") === "" ? (
                        <Alert status="info" color="black">
                            <AlertIcon />
                            No markdown generated yet :)
                        </Alert>
                    ) : (
                        <Container
                            maxW="container.sm"
                            bg="gray.600"
                            color="#262626"
                            py={6}
                            px={10}
                            borderRadius={16}
                            textColor="white"
                        >
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: markdownCodeToHTML,
                                }}
                            ></div>
                        </Container>
                    )}
                </DrawerBody>
                <DrawerFooter>
                    <Flex columnGap={2}>
                        <Button
                            isDisabled={isCopyButtonDisabled}
                            onClick={() => {
                                window.navigator.clipboard
                                    .writeText(
                                        Object.values(markdownCode).join("\n")
                                    )
                                    .then(() => {
                                        copiedToast({
                                            title: `Code Copied`,
                                            description: "Hope you like it!",
                                            variant: "left-accent",
                                            isClosable: true,
                                            position: "top-right",
                                            duration: 2500,
                                            status: "success",
                                            containerStyle: {
                                                color: "#000",
                                            },
                                        });

                                        setIsCopyButtonDisabled(true);
                                        setTimeout(() => {
                                            setIsCopyButtonDisabled(false);
                                        }, 3000);
                                    });
                            }}
                        >
                            Copy
                        </Button>
                        <Button onClick={disclosure.onClose} variant="outline">
                            Close
                        </Button>
                    </Flex>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};

export default CodePreviewDrawer;

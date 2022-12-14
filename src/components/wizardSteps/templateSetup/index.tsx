import React, { useState, useEffect } from "react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import TemplateSectionOrders from "./templateSectionOrders";
import {
    Heading,
    VStack,
    Flex,
    Container,
    Grid,
    useDisclosure,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Kbd,
    Button,
} from "@chakra-ui/react";
import PreviewContainer from "./previewContainer";
import CodePreviewModal from "./codePreviewDrawer";

interface ITemplateSetup {
    projectType: string;
    goToProjectTypeSelection: any;
}

const TemplateSetup: React.FC<ITemplateSetup> = ({
    projectType,
    goToProjectTypeSelection,
}) => {
    const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
        initialStep: 0,
    });
    const [markdown, setMarkdown] = useState<Object>({});
    const markdownModal = useDisclosure();

    // View changes made to markdown
    useEffect(() => {
        console.log(markdown);
        console.log(Object.values(markdown).join("\n"));
    }, [markdown]);

    useEffect(() => {
        let newMd = {};
        TemplateSectionOrders[projectType].map((section: any) => {
            section.fields.forEach((field: any) => {
                newMd = {
                    ...newMd,
                    [field]: "",
                };
            });
        });
        setMarkdown(() => newMd);
    }, []);

    const steps = TemplateSectionOrders[projectType].map((section: any) => {
        let requiredFields = {};
        section.fields.forEach((fieldName: any) => {
            {
                requiredFields = {
                    ...requiredFields,
                    [fieldName]: markdown[fieldName],
                };
            }
        });

        return {
            label: section.stepName,
            content: (
                <VStack spacing={4} alignItems="left">
                    {section.header}

                    {section.getContent(
                        requiredFields,
                        (onChangeResult: any, updatedFieldsName: string) => {
                            setMarkdown({
                                ...markdown,
                                [updatedFieldsName]:
                                    typeof onChangeResult === "string"
                                        ? onChangeResult
                                        : onChangeResult.target.value,
                            });
                        }
                    )}

                    {section.footerBeforeSubmitBtn}

                    <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                        <Button
                            isDisabled={activeStep === 0}
                            onClick={prevStep}
                            width="100%"
                        >
                            Prev
                        </Button>

                        <Button onClick={nextStep} width="100%">
                            {activeStep ===
                            TemplateSectionOrders[projectType].length - 1
                                ? "Finish"
                                : "Next"}
                        </Button>

                        <Button onClick={markdownModal.onOpen} width="100%">
                            View generated markdown code
                        </Button>

                        <Button onClick={goToProjectTypeSelection} width="100%">
                            Choose project type again
                        </Button>
                    </Grid>

                    {section.footerAfterSubmitBtn}
                </VStack>
            ),
        };
    });

    useEffect(() => {
        if (activeStep === TemplateSectionOrders[projectType].length) {
            markdownModal.onOpen();
        }
    }, [activeStep]);

    return (
        <Grid alignItems={"center"} w="100%">
            {/* Render Steps */}
            <Flex flexDir="row" width="96vw" columnGap={5} m="auto" mb={8}>
                <Container
                    maxW="50%"
                    backgroundColor="gray.700"
                    padding="8"
                    borderRadius="8"
                    centerContent
                >
                    <Flex flexDir="column" width="100%">
                        <Steps activeStep={activeStep} orientation="vertical">
                            {steps.map(
                                ({ label, content }, stepIndex: number) => (
                                    <Step label={label} key={stepIndex}>
                                        <Heading
                                            as="h2"
                                            fontWeight={500}
                                            py={7}
                                        >
                                            {label}
                                        </Heading>
                                        {content}
                                    </Step>
                                )
                            )}
                        </Steps>
                    </Flex>
                    {activeStep ===
                        TemplateSectionOrders[projectType].length && (
                        <Alert
                            status="success"
                            variant="subtle"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            textAlign="center"
                            backgroundColor="green.600"
                            py={7}
                            my={5}
                        >
                            <AlertIcon boxSize="40px" mr={0} />
                            <AlertTitle mt={4} mb={1} fontSize="lg">
                                Setup Finished!
                            </AlertTitle>
                            <AlertDescription maxWidth="sm">
                                You can copy/install your{" "}
                                <Kbd backgroundColor="green.500">README.md</Kbd>{" "}
                                or go back using the buttons below
                            </AlertDescription>
                        </Alert>
                    )}

                    {activeStep ===
                        TemplateSectionOrders[projectType].length && (
                        <Button onClick={prevStep} w="50%">
                            Go back to setup
                        </Button>
                    )}
                </Container>

                <PreviewContainer markdownCode={markdown} />
                <CodePreviewModal
                    markdownCode={markdown}
                    disclosure={markdownModal}
                />
            </Flex>
        </Grid>
    );
};

export default TemplateSetup;

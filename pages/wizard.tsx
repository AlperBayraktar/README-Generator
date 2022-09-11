import { NextPage } from "next";
import { Grid, Flex, Link as ChakraLink, Heading } from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import { useState } from "react";
import ChooseProjectType from "@components/wizardSteps/chooseProjectType";
import TemplateSetup from "@components/wizardSteps/templateSetup";
import getLanguageProps from "@components/helpers/getLanguageProps";
import NextLink from "next/link";

const Wizard: NextPage = () => {
    const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
        initialStep: 0,
    });

    const [choosenProjectType, setChoosenProjectType] = useState<string>("");

    const steps = [
        {
            label: "Choose field",
            content: (
                <ChooseProjectType
                    nextStep={nextStep}
                    setChoosenProjectType={setChoosenProjectType}
                />
            ),
        },

        {
            label: "Create Template",
            content: (
                <TemplateSetup
                    projectType={choosenProjectType}
                    goToProjectTypeSelection={prevStep}
                />
            ),
        },
    ];

    return (
        <div
            style={{
                width: "100vw",
                margin: "auto",
            }}
        >
            <NextLink href="/" passHref>
                <ChakraLink>
                    <Heading
                        fontSize="5xl"
                        my={20}
                        textAlign="center"
                        color="green.400"
                    >
                        README Generator
                    </Heading>
                </ChakraLink>
            </NextLink>
            <Flex flexDir="column">
                <Steps activeStep={activeStep} m="auto" mb={10} w="50%">
                    {steps.map(({ label, content }, stepIndex: number) => (
                        <Step label={label} key={stepIndex}>
                            {content}
                        </Step>
                    ))}
                </Steps>
            </Flex>
        </div>
    );
};

export const getStaticProps = getLanguageProps(["wizard"]);
export default Wizard;

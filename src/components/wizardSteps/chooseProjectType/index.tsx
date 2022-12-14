import React from "react";
import { Heading, Grid, GridItem, Container } from "@chakra-ui/react";
import ProjectTypeButton from "./projectTypeButton";
import PROJECT_TYPES from "./projectTypes";

const ChooseProjectType: React.FC<any> = ({
    nextStep,
    setChoosenProjectType,
}) => (
    <Container
        maxW="60%"
        backgroundColor="gray.700"
        padding="8"
        borderRadius="8"
        centerContent
    >
        <Heading as="h3" size="lg" mb={6} textAlign="center" fontWeight={600}>
            Choose project type
        </Heading>
        <Grid
            templateColumns="repeat(2, 1fr)"
            gap={6}
            m="auto"
            textAlign="center"
            w="xs"
        >
            {Object.values(PROJECT_TYPES).map(
                (projectType: string, typeIndex: number) => {
                    return (
                        <GridItem key={typeIndex}>
                            <ProjectTypeButton
                                w="7rem"
                                rounded="0"
                                onClick={() => {
                                    setChoosenProjectType(projectType);
                                    nextStep();
                                }}
                            >
                                {projectType}
                            </ProjectTypeButton>
                        </GridItem>
                    );
                }
            )}
        </Grid>
    </Container>
);

export default ChooseProjectType;

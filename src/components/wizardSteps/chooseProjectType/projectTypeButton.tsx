import React from "react";
import { ButtonProps } from "@chakra-ui/button/src/button";
import { Button } from "@chakra-ui/react";

const ProjectTypeButton: React.FC<ButtonProps> = (props) => {
    return (
        <Button
            bg={"blue.800"}
            _hover={{ bg: "blue.600" }}
            {...props}
            whiteSpace="nowrap"
        >
            {props.children}
        </Button>
    );
};

export default ProjectTypeButton;

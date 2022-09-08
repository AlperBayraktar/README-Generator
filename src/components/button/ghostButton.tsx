import React from "react";
import { ButtonProps } from "@chakra-ui/button/src/button";
import { Button as ChakraButton } from "@chakra-ui/react";

const GhostButton: React.FC<ButtonProps> = (props) => {
    return (
        <ChakraButton
            variant="ghost"
            _hover={{ bg: "" }}
            _click={{ bg: "" }}
            {...props}
        >
            {props.children}
        </ChakraButton>
    );
};

export default GhostButton;

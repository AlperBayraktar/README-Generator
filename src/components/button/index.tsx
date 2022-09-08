import React from "react";
import { ButtonProps } from "@chakra-ui/button/src/button";
import { Button as ChakraButton } from "@chakra-ui/react";

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <ChakraButton bg={"blue.800"} _hover={{ bg: "blue.600" }} {...props}>
            {props.children}
        </ChakraButton>
    );
};

export default Button;

import React from "react";
import { Container, Text, VStack } from "@chakra-ui/react";

interface IUsageInfo {
    containerFooter: JSX.Element;
}

const UsageInfo: React.FC<IUsageInfo> = ({ containerFooter }) => {
    return <Container>Coming soon...{containerFooter}</Container>;
};

export default UsageInfo;

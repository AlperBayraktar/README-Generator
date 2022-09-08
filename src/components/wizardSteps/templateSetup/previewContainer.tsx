import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Style from "./index.module.scss";
import { Container } from "@chakra-ui/react";

interface IPreviewContainer {
    markdownCode: Object;
}

const PreviewContainer: React.FC<IPreviewContainer> = ({ markdownCode }) => {
    return (
        <Container
            maxW="50%"
            bg="gray.600"
            borderRadius="8"

            centerContent
        >
            <ReactMarkdown
                className={Style.markdownPreviewContainer}
                children={Object.values(markdownCode).join("\n")}
                remarkPlugins={[remarkGfm]}
            />
        </Container>
    );
};

export default PreviewContainer;

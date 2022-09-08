import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Textarea,
    Heading,
    Text,
} from "@chakra-ui/react";

import { useState } from "react";

const TEMPLATE_SECTIONS = {
    COMMON: {
        NAME_AND_DESCRIPTION: {
            stepName: "Name and Description",
            fields: ["project.title", "project.description"],
            getContent: (fields: any, updateMarkdownField: any) => {
                return (
                    <>
                        <FormControl>
                            <FormLabel>Project Name</FormLabel>
                            <Input
                                defaultValue="# "
                                placeholder="What is the name of your project?"
                                onChange={(e) =>
                                    updateMarkdownField(e, "project.title")
                                }
                                autoFocus
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Description</FormLabel>
                            <Textarea
                                rows={5}
                                placeholder="What does your project do?"
                                onChange={(e) => {
                                    console.log(e.target.value);
                                    updateMarkdownField(
                                        `${e.target.value}`,
                                        "project.description"
                                    );
                                }}
                            />
                        </FormControl>
                    </>
                );
            },
        },
        HOW_TO_SUPPORT: {
            stepName: "How to support?",
            fields: ["howToSupport.title", "howToSupport.description"],
            getContent: (fields: any, updateMarkdownField: any) => {
                return (
                    <>
                        <FormControl>
                            <FormLabel>Title</FormLabel>
                            <Textarea
                                rows={6}
                                placeholder="Write the ways for supporting this project"
                                defaultValue="## "
                                onChange={(e) =>
                                    updateMarkdownField(e, "howToSupport.title")
                                }
                                autoFocus
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel>How to support?</FormLabel>
                            <Textarea
                                rows={6}
                                placeholder="Write the ways for supporting this project"
                                defaultValue="- "
                                onChange={(e) =>
                                    updateMarkdownField(
                                        e,
                                        "howToSupport.description"
                                    )
                                }
                                autoFocus
                            />
                        </FormControl>
                    </>
                );
            },
        },
    },
};

export default TEMPLATE_SECTIONS;

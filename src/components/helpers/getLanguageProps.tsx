import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const getLanguageProps = (
    requiredNamespaces: string[] = ["common"],
    extraReturn: Function = (): Object => {
        return {};
    }
) => {
    const getStaticProps = async ({ locale }: any) => {
        const result: Object = extraReturn();

        if (!requiredNamespaces.includes("common")) {
            requiredNamespaces.push("common");
        }

        return {
            ...result,
            props: {
                ...(result !== undefined && result.props ? result.props : {}),
                ...(await serverSideTranslations(locale, requiredNamespaces)),
            },
        };
    };

    return getStaticProps;
};
export default getLanguageProps;

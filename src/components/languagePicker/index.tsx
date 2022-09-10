import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import {
    Menu,
    MenuButton,
    Button as ChakraButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider,
} from "@chakra-ui/react";

interface ILanguagePicker {
    isAtRightTop?: boolean;
}
const LanguagePicker: React.FC<ILanguagePicker> = ({ isAtRightTop = true }) => {
    const router = useRouter();
    const { locales, locale: activeLocale, pathname, query, asPath } = router;
    const otherLocales = locales?.filter((locale) => locale !== activeLocale);
    const { t } = useTranslation("common");

    const rightTopStyle = {
        position: "fixed",
        top: "0.8rem",
        right: "0.5rem",
    };
    return (
        <div style={isAtRightTop ? rightTopStyle : {}}>
            <Menu colorScheme={"green"}>
                <MenuButton as={ChakraButton}>
                    {t(`languages.${activeLocale}`)}
                </MenuButton>
                <MenuList>
                    <MenuGroup title="Language">
                        <MenuDivider />
                        {otherLocales?.map(
                            (locale: string, localeIndex: number) => {
                                return (
                                    <Link
                                        href={{ pathname, query }}
                                        as={asPath}
                                        locale={locale}
                                        key={localeIndex}
                                    >
                                        <MenuItem>
                                            {t(`languages.${locale}`)}
                                        </MenuItem>
                                    </Link>
                                );
                            }
                        )}
                    </MenuGroup>
                </MenuList>
            </Menu>
        </div>
    );
};

export default LanguagePicker;

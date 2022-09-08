const DEFAULT_LOCALE = "en";

module.exports = {
    i18n: {
        locales: ["tr", "en"],
        defaultLocale: DEFAULT_LOCALE,
        localeDetection: false,
    },

    fallbackLng: DEFAULT_LOCALE,
    debug: process.env.NODE_ENV === "development",
    reloadOnPrerender: process.env.NODE_ENV === "development",
};

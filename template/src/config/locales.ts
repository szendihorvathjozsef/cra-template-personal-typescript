import { Locale } from "date-fns";
import { hu } from "date-fns/locale";

export const SUPPORTED_NAMESPACES = ["translation"];

export type Namespaces = typeof SUPPORTED_NAMESPACES[number];

export type SupportedLanguages = "hu";

export type SupportedLocales = {
  [key in SupportedLanguages]: {
    name: string;
    shortName: string;
    locale: Locale;
    options: {};
  };
};

export const supportedLocales: SupportedLocales = {
  hu: {
    name: "Magyar",
    shortName: "hu",
    locale: hu,
    options: {},
  },
};

import React, {useCallback, useEffect, useState} from 'react';
import {NativeModules} from 'react-native';
import {
  ILocale,
  ILocaleName,
  ILocaleProviderProps,
  ITranslateData,
  // ITranslations,
} from './interfaces';
import LocaleContext, {DEFAULT_LOCALE} from './LocaleContext';
import en_US from '../assets/locale/en_US';
import de_DE from '../assets/locale/de_DE';

export const SUPPORTED_LOCALES: ILocale[] = [
  {...DEFAULT_LOCALE},
  {
    displayName: 'German',
    name: 'de-DE',
    language: 'de',
  },
];

const LocaleProvider: ILocaleProviderProps = function LocaleProvider({
  children,
}) {
  const [currentLocale, setCurrentLocale] = useState<ILocale>(DEFAULT_LOCALE);
  const [localeRtl, setLocalRtl] = useState<boolean>(false);
  const [translations, setTranslations] = useState<Record<string, string>>();

  const loadTranslations = useCallback(async () => {
    let defaultLocaleName = getSystemLocale(); /* || DEFAULT_LOCALE.name; */
    let locale =
      SUPPORTED_LOCALES.find(i => i.name === defaultLocaleName) || null;

    if (!locale) {
      locale = DEFAULT_LOCALE;
    }
    setLocalRtl(!!locale.rtl);
    setTranslations(getTranslations(locale.name));
    setCurrentLocale(locale);
  }, []);

  const translate = useCallback(
    ({key, params, defaultMessage}: ITranslateData): string => {
      if (!translations?.[key]) {
        return defaultMessage || '';
      }
      let translation = translations[key];
      if (params) {
        for (let k in params) {
          translation = translation.replace(`{${k.toLowerCase()}}`, params[k]);
        }
      }
      translation = translation.replace(/\{[\w]+\}/g, '');
      translation = translation.replace(/[\s]{2,}/, ' ');
      return translation.trim();
    },
    [translations],
  );

  const selectLocal = useCallback((localeKey: string) => {
    const locale = SUPPORTED_LOCALES.find(i => i.name === localeKey);
    if (!locale) {
      return;
    }
    setLocalRtl(!!locale.rtl);
    setTranslations(getTranslations(locale.name));
    setCurrentLocale(locale);
  }, []);

  useEffect(function componentDidMount() {
    loadTranslations();
    return function componentWillUnmount() {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LocaleContext.Provider
      value={{translate, localeRtl, selectLocal, currentLocale}}>
      {children}
    </LocaleContext.Provider>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getSystemLocale(): ILocaleName | undefined {
  // iOS
  if (
    NativeModules.SettingsManager &&
    NativeModules.SettingsManager.settings &&
    NativeModules.SettingsManager.settings.AppleLanguages
  ) {
    return (
      NativeModules.SettingsManager.settings.AppleLanguages[0] ||
      DEFAULT_LOCALE.name
    );
  }
  // Android
  if (NativeModules.I18nManager) {
    return NativeModules.I18nManager.localeIdentifier || DEFAULT_LOCALE.name;
  }
  return undefined;
}

function getTranslations(locale: ILocaleName): Record<string, string> {
  switch (locale) {
    case 'de-DE':
      return de_DE;
    default:
      return en_US;
  }
}

export default LocaleProvider;

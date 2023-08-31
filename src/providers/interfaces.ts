import React from 'react';

export type ILocaleName = 'en-US' | 'de-DE';
export type ILanguage = 'en' | 'de';

export interface ILocale {
  name: ILocaleName;
  language: ILanguage;
  displayName: string;
  rtl?: boolean;
}

export interface ITranslateData {
  key: string;
  params?: Record<string, string>;
  defaultMessage?: string;
}

export interface ILocaleContext {
  translate: (data: ITranslateData) => string;
  localeRtl: boolean;
  selectLocal: (localeName: string) => void;
  currentLocale: ILocale;
}

export type ILocaleProviderProps = React.FC<{}>;

import React from 'react';

export type ITranslationKey =
  | 'landing_title'
  | 'landing_message'
  | 'landing_sign_up_button_label'
  | 'landing_log_in_button_label'
  | 'landing_rates_button_label'
  | 'log_in_title'
  | 'log_in_subtitle'
  | 'log_in_email_field_label'
  | 'log_in_submit_button_label'
  | 'log_in_alt_options_divider_title'
  | 'log_in_sign_up_message'
  | 'log_in_sign_up_button_text'
  | 'sign_up_title'
  | 'sign_up_subtitle'
  | 'sign_up_email_field_label'
  | 'sign_up_submit_button_label'
  | 'sign_up_alt_options_divider_title';

export type ILocaleName = 'en-US' | 'de-DE';
export type ILanguage = 'en' | 'de';

export interface ILocale {
  name: ILocaleName;
  language: ILanguage;
  displayName: string;
  rtl?: boolean;
}

export type ITranslations = Record<ITranslationKey, string>;

export type ILocaleTranslations = Record<ILocaleName, ITranslations>;

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

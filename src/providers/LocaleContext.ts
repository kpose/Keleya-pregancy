import {createContext, useContext} from 'react';
import {ILocale, ILocaleContext} from './interfaces';

export const DEFAULT_LOCALE: ILocale = {
  displayName: 'English United States',
  name: 'en-US',
  language: 'en',
};

const LocaleContext = createContext<ILocaleContext>({
  translate: () => '',
  localeRtl: false,
  selectLocal: () => '',
  currentLocale: DEFAULT_LOCALE,
});

export function useLocale() {
  const context = useContext(LocaleContext);
  return context;
}

export default LocaleContext;

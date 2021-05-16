// This types were auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */

import type { LocaleTranslations } from 'typesafe-i18n'
import { i18nString as initI18nString, i18nObjectLoader, i18n as initI18n } from 'typesafe-i18n'
import type {
	Translation,
	TranslationFunctions,
	Formatters,
	Locales,
} from './types.actual'
import { initFormatters } from './formatters-template.actual'

export const baseLocale: Locales = 'en'

export const locales: Locales[] = [
	'en'
]

import en from './en'

const localeTranslations: LocaleTranslations<Locales, Translation> = {
	en: en as Translation,
}

export const getTranslationForLocale = (locale: Locales) => localeTranslations[locale] || localeTranslations[baseLocale]

export const i18nObject = (locale: Locales) => i18nObjectLoader<Locales, Translation, TranslationFunctions, Formatters>(locale, getTranslationForLocale, initFormatters)

export const i18n = () => initI18n<Locales, Translation, TranslationFunctions, Formatters>(getTranslationForLocale, initFormatters)

export const i18nString = (locale: Locales) => initI18nString<Locales, Formatters>(locale, initFormatters(locale))

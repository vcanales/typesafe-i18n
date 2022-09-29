// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'en'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	/**
	 * {​0​|​{​y​e​s​:​J​A​,​n​o​:​N​E​I​N​}​}
	 * @param {'no' | 'yes'} 0
	 */
	switch1: RequiredParams<`0|{yes:${string},no:${string}}`>
	/**
	 * {​o​p​t​i​o​n​|​{​y​e​s​:​J​A​,​n​o​:​N​E​I​N​}​}
	 * @param {'no' | 'yes'} option
	 */
	keyed: RequiredParams<`option|{yes:${string},no:${string}}`>
	/**
	 * {​0​|​{​ ​ ​y​e​s​ ​:​ ​J​A​ ​,​ ​n​o​ ​:​ ​N​E​I​N​ ​}​}
	 * @param {'no' | 'yes'} 0
	 */
	switch2: RequiredParams<`0|{  yes :${string}, no :${string}}`>
	/**
	 * {​0​|​{​y​:​ ​y​e​s​,​ ​n​:​ ​n​o​ ​}​|​u​p​p​e​r​c​a​s​e​}
	 * @param {'n' | 'y'} 0
	 */
	switchFormatter: RequiredParams<`0|{y:${string}, n:${string}}|uppercase`>
	/**
	 * {​0​|​u​p​p​e​r​c​a​s​e​|​{​Y​:​ ​y​e​s​,​ ​N​:​ ​n​o​ ​}​}
	 * @param {unknown} 0
	 */
	formatterSwitch: RequiredParams<`0|uppercase|{Y:${string}, N:${string}}`>
	/**
	 * {​0​|​u​p​p​e​r​c​a​s​e​|​{​Y​:​ ​y​e​s​,​ ​N​:​ ​n​o​ ​}​|​u​p​p​e​r​c​a​s​e​}
	 * @param {unknown} 0
	 */
	formatterSwitchFormatter: RequiredParams<`0|uppercase|{Y:${string}, N:${string}}|uppercase`>
	/**
	 * {​0​|​{​1​:​ ​o​n​e​,​ ​2​:​ ​t​w​o​}​}
	 * @param {'1' | '2'} 0
	 */
	number: RequiredParams<`0|{1:${string}, 2:${string}}`>
	/**
	 * {​0​|​{​y​e​s​:​J​A​,​ ​*​ ​:​ ​N​E​I​N​}​}
	 * @param {string | 'yes'} 0
	 */
	fallback: RequiredParams<`0|{yes:${string}, * :${string}}`>
	/**
	 * {​0​|​{​t​e​s​t​:​,​ ​*​ ​:​ ​n​o​t​h​i​n​g​}​}
	 * @param {string | 'test'} 0
	 */
	emptyNoFallback: RequiredParams<`0|{test:${string}, * :${string}}`>
	/**
	 * {​0​|​{​a​ ​b​ ​c​:​ ​b​e​g​i​n​,​ ​*​:​r​e​s​t​}​}
	 * @param {string | 'a b c'} 0
	 */
	spacesInKey: RequiredParams<`0|{a b c:${string}, *:${string}}`>
	/**
	 * {​0​|​{​a​-​b​-​c​:​ ​b​e​g​i​n​,​ ​*​:​r​e​s​t​}​}
	 * @param {string | 'a-b-c'} 0
	 */
	dashesInKey: RequiredParams<`0|{a-b-c:${string}, *:${string}}`>
	/**
	 * {​0​|​{​y​:​y​e​s​,​n​:​n​o​}​}
	 * @param {string} 0
	 */
	withType: RequiredParams<`0|{y:${string},n:${string}}`>
}

export type TranslationFunctions = {
	/**
	 * {0|{yes:JA,no:NEIN}}
	 */
	switch1: (arg0: 'no' | 'yes') => LocalizedString
	/**
	 * {option|{yes:JA,no:NEIN}}
	 */
	keyed: (arg: { option: 'no' | 'yes' }) => LocalizedString
	/**
	 * {0|{  yes : JA , no : NEIN }}
	 */
	switch2: (arg0: 'no' | 'yes') => LocalizedString
	/**
	 * {0|{y: yes, n: no }|uppercase}
	 */
	switchFormatter: (arg0: 'n' | 'y') => LocalizedString
	/**
	 * {0|uppercase|{Y: yes, N: no }}
	 */
	formatterSwitch: (arg0: unknown) => LocalizedString
	/**
	 * {0|uppercase|{Y: yes, N: no }|uppercase}
	 */
	formatterSwitchFormatter: (arg0: unknown) => LocalizedString
	/**
	 * {0|{1: one, 2: two}}
	 */
	number: (arg0: '1' | '2') => LocalizedString
	/**
	 * {0|{yes:JA, * : NEIN}}
	 */
	fallback: (arg0: string | 'yes') => LocalizedString
	/**
	 * {0|{test:, * : nothing}}
	 */
	emptyNoFallback: (arg0: string | 'test') => LocalizedString
	/**
	 * {0|{a b c: begin, *:rest}}
	 */
	spacesInKey: (arg0: string | 'a b c') => LocalizedString
	/**
	 * {0|{a-b-c: begin, *:rest}}
	 */
	dashesInKey: (arg0: string | 'a-b-c') => LocalizedString
	/**
	 * {0|{y:yes,n:no}}
	 */
	withType: (arg0: string) => LocalizedString
}

export type Formatters = {
	uppercase: (value: 'n' | 'y' | unknown) => unknown
}

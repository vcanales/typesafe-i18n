import { suite } from 'uvu'
import * as assert from 'uvu/assert'
import type { Locale } from '../../../../runtime/src/core.mjs'
import { navigatorDetector } from './navigator.mjs'

const test = suite('detector:navigator')

// --------------------------------------------------------------------------------------------------------------------

const testDetector = (name: string, languages: string[] | undefined, expected: Locale[]) =>
	test(`navigator ${name}`, () => {
		// Use Object.defineProperty to mock navigator since it's read-only
		Object.defineProperty(globalThis, 'navigator', {
			value: { languages: languages as string[] } as unknown as Navigator,
			configurable: true,
		})
		assert.equal(navigatorDetector(), expected)
	})

testDetector('undefined', undefined, [])

testDetector('empty', [], [])

testDetector('single value', ['de-AT'], ['de-AT'])

testDetector('multiple values', ['de', 'en-US', 'en', 'it'], ['de', 'en-US', 'en', 'it'])

// --------------------------------------------------------------------------------------------------------------------

test.run()

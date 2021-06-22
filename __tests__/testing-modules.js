 /**
 * @jest-environment jsdom
 */
import { suma } from '../js/funciones.js'

describe('sum two numbers', () => {
    test('sum 10  and 20 must be 30', () => {
        expect(suma(10, 20)).toBe(30)
    })
})

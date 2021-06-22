const pass = '123456789'

describe('validad pass is not empty and have a lenght of 6', () => {
    test('quantity of length', () => {
        expect(pass).toHaveLength(9)
    })

    test('pass no empty', () => {
        expect(pass).not.toHaveLength(0)
    })
    
})
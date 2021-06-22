const cart = ['product1', 'product2', 'product3']


describe('testing to the shopping cart', () => {
    test('test the array have 3 elements', () => {
        expect(cart).toHaveLength(3)
    })

    test('test shopping cart ca not be empty', () => {
        expect(cart).not.toHaveLength(0)
    })
})
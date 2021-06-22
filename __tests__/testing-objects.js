const client = {
    name: 'Ana',
    balance: 500
}


describe('testing client', () => {
    test('Client is Premium', () => {
        expect(client.balance).toBeGreaterThan(400)
    })

    test('client is Ana', () => {
        expect(client.name).toBe("Ana")
    })

    test('Client has not 500', () => {
        expect(client.balance).not.toBe(400)
    })

    test('client is Ana', () => {
        expect(client.name).not.toBe("Marce")
    })
})
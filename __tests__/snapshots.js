//snapshots are data which are stored in file apart

const client = {
    name: 'Ana',
    balance: 500,
    type: "Premium"
}


describe('testing client', () => {
    test('Client is Premium', () => {
        expect(client).toMatchSnapshot()
    })

})


//for update the pbject the snapshot never muss be update in his file created better remove it 
//manually or through this command: npm t -- -u
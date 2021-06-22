
function sum(a, b) {
    return a + b;
}

function substr(a,b) {
    return a - b;
}


describe('testing to sum and subs', () => {
    test('sum of 20 and 10', () => {
        expect(sum(20, 30)).toBe(50)
    })

    test('substr of 20 and 10', () => {
        expect(substr(20, 10)).toBe(10)
    })

    test('sum of 20 and 10 not be 40', () => {
        expect(sum(20, 30)).not.toBe(40)
    })

    test('subst of 20 and 10 not be 10', () => {
        expect(sum(20, 30)).not.toBe(10)
    })
})
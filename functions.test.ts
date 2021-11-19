const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test("test will check if shuffleArray is a function", () => {
        expect(typeof shuffleArray).toBe("function")
    });
    test("test will check if shuffleArray returns and array", () => {
        let shuffleArr = shuffleArray([1,3,2])
        expect(shuffleArr.length).toEqual(3)
    })
})
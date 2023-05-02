const request = require('supertest');
const app = require('./server');

const validatePassword = require("./validatePassword")

test("Return false given an empty string", async()=> {
    expect(validatePassword("")).toBe(false)
})

test("Return true, given password with 8 chars or longer, and a letter", async()=> {
    expect(validatePassword("1234567b")).toBe(true)
    expect(validatePassword("1234567B")).toBe(true)
})

test("Return false, given password with 8 chars long, but witghout letters", async()=> {
    expect(validatePassword("12345678")).toBe(false)
})

test("Return false, given password with 8 chars long, but witghout numbers", async()=> {
    expect(validatePassword("abcdefgh")).toBe(false)
})

test("Return false, given password with 8 upperchars long, but witghout numbers", async()=> {
    expect(validatePassword("ABCDEFGH")).toBe(false)
})
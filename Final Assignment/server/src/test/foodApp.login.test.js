const request = require('supertest');
const assert = require('chai').assert;
const app = require('../foodApp');

describe("unit testing /login route", ()=>{

    it("Should return status as 200 when triggered with correct credentials", async ()=>{
        const credentials = {
            email:"rohit123@gmail.com",
            password:"12345678"
        }
        const response = await request(app)
        .post("/login")
        .send(credentials)
        assert.equal(response.status, 200);
    })

    it("Should return status as 403 when triggered with incorrect credentials", async ()=>{
        const credentials = {
            email:"rohit123@gmail.com",
            password:"12345"
        }
        const response = await request(app)
        .post("/login")
        .send(credentials)
        assert.equal(response.status, 403);
    })
})
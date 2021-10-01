const request = require('supertest');
const assert = require('chai').assert;
const app = require('../foodApp');
const Queries = require("../model/queries");

afterEach((done)=>{
    Queries.deleteMany({contact:123},()=>{done();});
});

describe("unit testing /createQuery route", async ()=>{

    it("Should return status as 200 when triggered", async ()=>{
        const queryObject = {
            user:'abc',
            restaurant:'xyz',
            query:'pqr',
            contact:123
        }
        const response = await request(app)
        .post("/createQuery")
        .send(queryObject)
        assert.equal(response.status, 200);
    })

    it("Should return the sent query object when triggered", async ()=>{
        const queryObject = {
            user:'abc',
            restaurant:'xyz',
            query:'pqr',
            contact:123
        }
        const response = await request(app)
        .post("/createQuery")
        .send(queryObject)
        assert.include(response.body, {...queryObject});
    })

    
})
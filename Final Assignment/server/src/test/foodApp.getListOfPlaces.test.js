const request = require('supertest');
const assert = require('chai').assert;
const app = require('../foodApp');

describe("unit testing /getListOfPlaces route", ()=>{

    it("should return 200 when triggered", async ()=>{
        const response = await request(app).get("/getListOfPlaces");
        assert.equal(response.status, 200);
    })

    it("should return 20 restaurant's data", async ()=>{
        const response = await request(app).get("/getListOfPlaces");
        assert.equal(response.body.length, 20,"Length of data recieved should be 20");
    })
})
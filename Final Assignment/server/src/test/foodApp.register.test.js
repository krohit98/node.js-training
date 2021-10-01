const request = require('supertest');
const assert = require('chai').assert;
const app = require('../foodApp');
const Users = require("../model/users");

afterEach((done)=>{
    Users.deleteMany({email:'test@123.com'},()=>{done();});
});

describe("unit testing /register route", async ()=>{

    it("Should return status as 200 when triggered with valid input", async ()=>{
        const userObject = {
            firstName:'First',
            lastName:'Last',
            email:'test@123.com',
            password:"validPassword"
        }
        const response = await request(app)
        .post("/register")
        .send(userObject)
        assert.equal(response.status, 200);
    })

    it("Should return the sent user object when triggered with valid input", async ()=>{
        const userObject = {
            firstName:'First',
            lastName:'Last',
            email:'test@123.com',
            password:"validPassword"
        }
        const response = await request(app)
        .post("/register")
        .send(userObject)
        assert.include(response.body.addedUser, {firstName:'First', lastName:'Last', email:'test@123.com',});
    })

    
})